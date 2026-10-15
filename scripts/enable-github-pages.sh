#!/usr/bin/env bash
# Run once after: gh auth login
set -euo pipefail
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/usr/local/bin:${PATH:-}"

REPO="ianmetromet-cmyk/PPMMWUWEB"

echo "Enabling GitHub Pages for ${REPO} (gh-pages branch)…"
gh api -X POST "repos/${REPO}/pages" \
  -f build_type=legacy \
  -f 'source[branch]=gh-pages' \
  -f 'source[path]=/'

echo ""
echo "Pages enabled. Live URL (may take 1–2 minutes):"
echo "https://ianmetromet-cmyk.github.io/PPMMWUWEB/"
