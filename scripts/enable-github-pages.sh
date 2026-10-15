#!/usr/bin/env bash
# Run once after: gh auth login
set -euo pipefail
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/usr/local/bin:${PATH:-}"

REPO="ianmetromet-cmyk/PPMMWUWEB"

echo "Enabling GitHub Pages for ${REPO} (GitHub Actions)…"
if gh api "repos/${REPO}/pages" >/dev/null 2>&1; then
  gh api -X PUT "repos/${REPO}/pages" -f build_type=workflow
else
  gh api -X POST "repos/${REPO}/pages" -f build_type=workflow
fi

echo ""
echo "Pages enabled. Live URL (may take 1–2 minutes):"
echo "https://ianmetromet-cmyk.github.io/PPMMWUWEB/"
