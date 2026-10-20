import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

// PPMMWU one-file update (October 2026)
// 1. Constrain the homepage banner to 1500px without cropping.
// 2. Hide the obsolete homepage bargaining-updates signup.
// 3. Route the existing Contact Us form to Ian.newman@seiu521.org using FormSubmit.
//
// This is a one-file compatibility override for the existing Next.js site.
// The long-term cleaner approach is to edit page.tsx, ContactForm.tsx, and site.ts
// separately. No other repository files need changing for this override.

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "PPMMWU — Planned Parenthood Mar Monte Workers United",
    template: "%s | PPMMWU",
  },
  description:
    "Bargaining updates, member stories, campaign priorities, and ways to get involved with Planned Parenthood Mar Monte Workers United.",
};

const contactFormScript = `
(function () {
  // Capture submits before React's older Formspree submit handler runs.
  // This is deliberately limited to the Contact Us form on /contact/.
  document.addEventListener("submit", async function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.closest("main")) return;
    if (!form.querySelector('textarea[name="message"]') ||
        !form.querySelector('input[name="email"]') ||
        !form.querySelector('input[name="topic"]')) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (form.dataset.ppmmwuSending === "true") return;
    form.dataset.ppmmwuSending = "true";

    var submitButton = form.querySelector('button[type="submit"]');
    var statusText = form.querySelector('[role="status"]');
    var previousLabel = submitButton ? submitButton.textContent : "SEND MESSAGE →";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "SENDING…";
    }
    if (statusText) statusText.textContent = "Sending your message…";

    try {
      var details = Object.fromEntries(new FormData(form).entries());
      details._subject = "PPMMWU Contact Us — New message";
      details._replyto = details.email || "";
      details._template = "table";
      details._url = window.location.href;

      var response = await fetch("https://formsubmit.co/ajax/Ian.newman@seiu521.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(details)
      });
      var result = await response.json();
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      if (statusText) {
        statusText.textContent = "Thank you! Your message has been submitted to our union.";
      }
    } catch (error) {
      if (statusText) {
        statusText.textContent = "Your message could not be sent. Please try again.";
      }
    } finally {
      form.dataset.ppmmwuSending = "false";
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = previousLabel;
      }
    }
  }, true);
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <style>{`
          /* Full banner artwork, centered and smaller on desktop. */
          main > img[alt^="The mission runs on us!"] {
            display: block;
            width: 100%;
            max-width: 1500px;
            height: auto;
            margin-inline: auto;
          }

          /* Remove the old updates signup AND its spacing from view. */
          main div:has(> section[aria-labelledby="updates-signup"]),
          main section[aria-labelledby="updates-signup"] {
            display: none !important;
          }
        `}</style>
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Script
          id="ppmmwu-contact-mail-override"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: contactFormScript }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
