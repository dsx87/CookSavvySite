# CookSavvy — Landing Page

The marketing landing page for **CookSavvy**, a hobby iOS recipe app that turns the
ingredients you already have into a confident dinner decision. _Dinner, Decided._

This is a static, dependency-free website (plain HTML, CSS and JS). There is no build
step — the files you see are the files that ship.

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS** — design tokens as custom properties (mirroring the iOS app's theme),
  mobile-first responsive layout, automatic light/dark mode via `prefers-color-scheme`
- **Type** — body/UI use the native system-rounded stack (matching the app); headings
  use **Fraunces** (loaded from Google Fonts with `display=swap`, falling back to a system
  serif if the network fails)
- **Vanilla JS** — progressive enhancement only (mobile nav, scroll-reveal, footer year);
  the page works fully with JavaScript disabled

No frameworks, no bundler, no `node_modules`.

## Structure

```
cooksavvy-landing/
├── index.html          # all page sections
├── css/
│   ├── reset.css        # small modern CSS reset
│   └── styles.css        # design tokens + all styling
├── js/
│   └── main.js          # progressive-enhancement scripts
├── assets/
│   ├── logo.svg          # wordmark + mark
│   ├── favicon.svg        # tab / touch icon
│   └── app-store-badge.svg
├── privacy.html         # Privacy Policy (content from the app's docs/legal)
├── terms.html           # Terms of Use / subscription terms
└── README.md
```

## Run locally

Any static file server works. For example:

```bash
# Python (built in on macOS)
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Deploy

Because it's fully static, it deploys anywhere:

- **GitHub Pages** — push to a repo and enable Pages on the default branch
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or connect the repo
  (no build command needed; publish directory is the project root)

No domain is wired yet. The Privacy Policy and Terms are served as local pages
(`privacy.html`, `terms.html`) and linked from the footer, so they work on any host
without a custom domain. When the app ships, point `LegalLinks` in the iOS app at
wherever this site is hosted (e.g. `<host>/privacy` and `<host>/terms`).

## ⚠️ Placeholders to fill in before launch

Search the codebase for `TODO` — these are the spots to update:

| What | Where | Current value |
|------|-------|----------------|
| **App Store URL** | every `href="#"` on an App Store badge / CTA in `index.html` | `#` placeholder |
| **Pricing** | Pricing section in `index.html` | `$2.99 / month` (confirm before launch) |
| **Legal values** | `privacy.html` & `terms.html` | `[COMPANY_LEGAL_NAME]`, `[CONTACT_EMAIL]`, `[GOVERNING_JURISDICTION]` (shown highlighted) |
| **Contact link** | footer in `index.html` | removed until a support email exists |
| **Domain / SEO** | `index.html` `<head>` | `canonical`, `og:url`, `og:image` omitted until a domain is chosen |

The App Store badge is a placeholder rendition; replace `assets/app-store-badge.svg`
with Apple's official badge from the
[Apple Marketing Resources](https://developer.apple.com/app-store/marketing/guidelines/)
before publishing, per Apple's brand guidelines.
