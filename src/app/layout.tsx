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
// 4. Show a dismissible first-visit bargaining-principles popup.
// 5. Connect the first Union Updates button to the approved NGP VAN form.
// 6. Temporarily hide Hannah Tunnell’s photo while retaining her card.
// 7. Attribute September 2026 PPMM worker survey findings.
// 8. Show the WhatsApp banner on Home and Timeline only.
// 9. Keep Contact Us messages on-site and report verified transport status.
//
// This is a one-file compatibility override for the existing Next.js site.
// FormSubmit requires recipient activation before email delivery is possible.
// This file cannot verify inbox receipt or activate an email address.

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
  // The site is static. Transport uses FormSubmit's documented AJAX endpoint.
  // Its recipient must verify the destination email before messages are delivered.
  // Intercept the old React/Formspree handler in the capturing phase.
  document.addEventListener('submit', async function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.closest('main')) return;
    if (!form.querySelector('textarea[name="message"]') ||
        !form.querySelector('input[name="email"]') ||
        !form.querySelector('input[name="topic"]')) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    if (form.dataset.ppmmwuSending === 'true') return;
    if (!form.reportValidity()) return;
    form.dataset.ppmmwuSending = 'true';

    var button = form.querySelector('button[type="submit"]');
    var status = form.querySelector('[role="status"]');
    var originalLabel = button ? button.textContent : 'SEND MESSAGE →';
    if (button) { button.disabled = true; button.textContent = 'SENDING…'; }
    if (status) { status.textContent = 'Submitting your message…'; status.setAttribute('aria-live','polite'); }

    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var fields = Object.fromEntries(new FormData(form).entries());
      fields._subject = 'PPMMWU Website Contact Form — New Message';
      fields._replyto = fields.email || '';
      fields._template = 'table';
      fields._honey = ''; // FormSubmit antispam field, left empty for real visitors.
      fields._url = window.location.href;

      var response = await fetch('https://formsubmit.co/ajax/Ian.newman@seiu521.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(fields),
        signal: controller.signal
      });
      var result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'The form service did not accept the request.');
      }
      form.reset();
      if (status) status.textContent = 'Your message was accepted by the form service. Thank you!';
    } catch (error) {
      // Retain all user-entered data if transport rejects or times out.
      if (status) status.textContent =
        'Your message could not be submitted. Please try again. If the problem continues, email Ian.newman@seiu521.org.';
    } finally {
      clearTimeout(timeout);
      form.dataset.ppmmwuSending = 'false';
      if (button) { button.disabled = false; button.textContent = originalLabel; }
    }
  }, true);
})();
`;
const bargainingPopupScript = `
(function () {
  var destination = "https://secure.ngpvan.com/jiBxJnPajUKRIzjfSsE9RQ2";
  var seenKey = "ppmmwu-principles-popup-seen-v1";

  // One-file update: connect the FIRST button in the Union Updates panel.
  // Also refresh after client-side navigation to the homepage.
  function linkFirstUpdateButton() {
    var firstUpdate = document.querySelector('section[aria-labelledby="union-updates"] article');
    var link = firstUpdate && firstUpdate.querySelector('a[href]');
    if (link && link.getAttribute('href') !== destination) {
      link.setAttribute('href', destination);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function init() {
    linkFirstUpdateButton();
    new MutationObserver(linkFirstUpdateButton).observe(document.body, {
      childList: true, subtree: true
    });

    var alreadyShown = false;
    try { alreadyShown = sessionStorage.getItem(seenKey) === '1'; } catch (e) {}
    if (alreadyShown || document.querySelector('[data-ppmmwu-principles-popup]')) return;

    var previousFocus = document.activeElement;
    var previousOverflow = document.body.style.overflow;
    var overlay = document.createElement('div');
    overlay.className = 'ppmmwu-principles-overlay';
    overlay.setAttribute('data-ppmmwu-principles-popup', '');
    overlay.innerHTML =
      '<div class="ppmmwu-principles-dialog" role="dialog" aria-modal="true" ' +
      'aria-labelledby="ppmmwu-principles-title" aria-describedby="ppmmwu-principles-description" tabindex="-1">' +
      '<button class="ppmmwu-principles-close" type="button" data-ppmmwu-close aria-label="Close welcome window">&times;</button>' +
      '<div class="ppmmwu-principles-kicker">PPMM WORKERS UNITED</div>' +
      '<h2 id="ppmmwu-principles-title">STRENGTHEN THE MISSION.</h2>' +
      '<p id="ppmmwu-principles-description">Stand with your coworkers. Sign onto the bargaining principles guiding our fight for a strong first contract.</p>' +
      '<a class="ppmmwu-principles-action" href="' + destination + '" target="_blank" rel="noopener noreferrer">SIGN ONTO OUR BARGAINING PRINCIPLES <span aria-hidden="true">↗</span></a>' +
      '<button class="ppmmwu-principles-later" type="button" data-ppmmwu-close>Not now — continue to website</button>' +
      '</div>';

    function closeModal() {
      if (!overlay.isConnected) return;
      overlay.remove();
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeys, true);
      try { sessionStorage.setItem(seenKey, '1'); } catch (e) {}
      if (previousFocus && typeof previousFocus.focus === 'function' && previousFocus.isConnected) {
        previousFocus.focus();
      }
    }

    function handleKeys(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;
      var controls = Array.from(overlay.querySelectorAll('button, a[href]'));
      if (!controls.length) return;
      var first = controls[0];
      var last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay || event.target.closest('[data-ppmmwu-close]')) {
        closeModal();
      }
      if (event.target.closest('.ppmmwu-principles-action')) {
        closeModal();
      }
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeys, true);
    var closeButton = overlay.querySelector('.ppmmwu-principles-close');
    if (closeButton) closeButton.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {once: true});
  } else {
    init();
  }
})();
`;

const routeEnhancementScript = `
(function () {
  function refresh() {
    if (!document.body) return;
    var route = window.location.pathname;
    while (route.endsWith('/')) route = route.slice(0, -1);
    document.body.classList.toggle('ppmmwu-timeline-route', route.endsWith('/timeline'));
  }
  function initialize() {
    refresh();
    var main = document.querySelector('main');
    if (main) new MutationObserver(refresh).observe(main, {childList: true, subtree: true});
    window.addEventListener('popstate', refresh);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once:true});
  else initialize();
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


          /* Temporarily remove Hannah’s portrait without collapsing the team grid. */
          main li:has(> img[alt="Portrait of Hannah Tunnell"]) {
            background: radial-gradient(circle at 17% 15%, #a853f5 0, transparent 42%),
                        linear-gradient(135deg, #772ed0 0%, #930bf4 60%, #331055 100%);
            isolation: isolate;
          }
          main li:has(> img[alt="Portrait of Hannah Tunnell"]) > img {
            display: none !important;
          }


          /* Annotate the four September 2026 worker survey statistics. */
          main section[aria-labelledby="priorities"] > ul > li > p:first-child::after {
            content: "*";
            vertical-align: super;
            font-size: 0.42em;
            line-height: 0;
            margin-left: 2px;
          }
          .ppmmwu-survey-attribution {
            display: none;
          }
          body:has(main #priorities) .ppmmwu-survey-attribution {
            display: block;
          }
          /* Keep the September 2026 attribution close to the survey cards. */
          body:has(main #priorities) main > div:last-child { padding-bottom: 0; }
          /* The shared banner is deliberately visible only on Home and Timeline. */
          #ppmmwu-whatsapp-banner { display: none; }
          body:has(main #resources) #ppmmwu-whatsapp-banner,
          body.ppmmwu-timeline-route #ppmmwu-whatsapp-banner { display: block; }
          body:has(main #resources) main > div:last-child { padding-bottom: 1rem; }

          /* Dismissible first-visit bargaining-principles welcome dialog. */
          .ppmmwu-principles-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 18px;
            background: rgba(18, 8, 21, 0.78);
            backdrop-filter: blur(5px);
          }
          .ppmmwu-principles-dialog {
            position: relative;
            width: min(100%, 650px);
            max-height: calc(100dvh - 36px);
            overflow-y: auto;
            border: 3px solid #160611;
            border-radius: 24px;
            padding: clamp(28px, 5vw, 50px);
            box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
            background: #fff8f5;
            color: #160611;
            text-align: center;
          }
          .ppmmwu-principles-close {
            position: absolute;
            top: 12px;
            right: 14px;
            display: grid;
            place-items: center;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: #fff;
            color: #160611;
            font-size: 30px;
            line-height: 1;
            cursor: pointer;
          }
          .ppmmwu-principles-kicker {
            color: #930bf4;
            font-size: 15px;
            font-weight: 900;
            letter-spacing: 0.06em;
          }
          .ppmmwu-principles-dialog h2 {
            margin: 16px 0 18px;
            font-size: clamp(30px, 5vw, 52px);
            line-height: 1.03;
            font-weight: 900;
            color: #930bf4;
          }
          .ppmmwu-principles-dialog p {
            margin: 0 auto 26px;
            max-width: 540px;
            font-size: clamp(16px, 2vw, 20px);
            line-height: 1.45;
            font-weight: 650;
          }
          .ppmmwu-principles-action {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            min-height: 58px;
            padding: 15px 22px;
            border: 3px solid #160611;
            border-radius: 100px;
            background: #ffd119;
            color: #160611;
            font-size: clamp(14px, 2vw, 18px);
            font-weight: 900;
            text-decoration: none;
            text-align: center;
          }
          .ppmmwu-principles-action:hover { background: #ffe269; }
          .ppmmwu-principles-later {
            margin-top: 18px;
            padding: 8px 12px;
            border: none;
            background: transparent;
            color: #533f4b;
            font-size: 15px;
            font-weight: 700;
            text-decoration: underline;
            cursor: pointer;
          }
          .ppmmwu-principles-dialog :is(button, a):focus-visible {
            outline: 3px solid #930bf4;
            outline-offset: 4px;
          }
        `}</style>
      </head>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Script
          id="ppmmwu-contact-mail-override"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: contactFormScript }}
        />
        <Script
          id="ppmmwu-principles-popup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: bargainingPopupScript }}
        />
        <Script id="ppmmwu-route-enhancements" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: routeEnhancementScript }} />
        <SiteHeader />
        <main className="flex-1">{children}</main>

        {/* Visible at the bottom of the About page, directly after the survey cards. */}
        <p className="ppmmwu-survey-attribution mx-auto w-full max-w-[1440px] px-5 pb-6 text-sm font-semibold leading-relaxed text-muted md:px-[72px]">
          * Based on survey information collected directly from PPMM workers in September 2026.
        </p>

        {/* Shared call-to-action displayed only on Home and Timeline. */}
        <aside id="ppmmwu-whatsapp-banner" aria-labelledby="ppmmwu-whatsapp-heading" className="mx-auto w-full max-w-[1440px] px-5 pt-6 pb-10 md:px-[72px] md:pt-8 md:pb-14">
          <div className="flex flex-col gap-5 rounded-[24px] border-[3px] border-ink bg-purple-deep p-6 text-white shadow-[0_8px_0_#160611] md:gap-6 md:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-[800px] flex-col gap-2">
              <p className="text-xs font-extrabold tracking-[0.12em] text-yellow uppercase md:text-sm">
                PLANNED PARENTHOOD MAR MONTE ONE
              </p>
              <h2 id="ppmmwu-whatsapp-heading" className="text-[clamp(26px,3.5vw,42px)] leading-[1.08] font-black">
                STAY CONNECTED WITH PPMM WORKERS!
              </h2>
              <p className="max-w-[680px] text-base leading-relaxed font-semibold text-white/95 md:text-lg">
                Join our WhatsApp channel for campaign updates, worker connections, and opportunities to get involved.
              </p>
            </div>
            <a
              href="https://tr.ee/Oo4HStt8E8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2 rounded-full border-[3px] border-ink bg-yellow px-5 py-3 text-center text-base font-black text-purple transition-colors hover:bg-gold focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-yellow sm:w-auto lg:max-w-[310px]"
            >
              Join Our WhatsApp Channel <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>

        <SiteFooter />
      </body>
    </html>
  );
}
