# Project Pineapple site

Marketing site for Project Pineapple LLC. Eight static routes, built with
[Astro](https://astro.build) and deployed as plain HTML. No client-side state
apart from the Cal.com booking embed.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Local dev server at `localhost:4321`          |
| `npm run build`   | Production build to `dist/`                   |
| `npm run preview` | Serve `dist/` locally                         |
| `npm run check`   | Type-check `.astro` and `.ts` files           |

## Routes

| Route         | File                          | Notes                                   |
| ------------- | ----------------------------- | --------------------------------------- |
| `/`           | `src/pages/index.astro`       | Full nav                                |
| `/assessment` | `src/pages/assessment.astro`  | Inline Cal.com embed                    |
| `/about`      | `src/pages/about.astro`       |                                         |
| `/dental`     | `src/pages/[industry].astro`  | Content from `src/content/industries.ts` |
| `/legal`      | `src/pages/[industry].astro`  | Same template as dental                 |
| `/contact`    | `src/pages/contact.astro`     |                                         |
| `/terms`      | `src/pages/terms.astro`       |                                         |
| `/thanks`     | `src/pages/thanks.astro`      | noindex, excluded from sitemap          |

To add an industry landing page, add an entry to `src/content/industries.ts`.
No layout work is needed.

## Where things live

- `src/content/site.ts`: constants that must change in one place (Cal.com
  event, email, CTA label and microcopy).
- `src/styles/global.css`: design tokens (colors, type, spacing) and the
  handful of shared classes (`.eyebrow`, `.btn`, `.split`, `.section`).
- `src/layouts/Base.astro`: document shell, fonts, SEO tags, Cal.com loader.
- `src/components/`: header (three variants), footer, stat strip, method
  list, operator block, portrait crops, closing CTA, product screenshot
  frame, inline Cal embed.
- `src/assets/adam-malmborg.jpg`: the portrait. Responsive derivatives are
  generated at build time.
- `src/assets/product/`: screens from the client dashboard app, populated
  with demo data ("Example Home Co."). Every caption that uses one says so.
- `public/brand/`: the logo lockup and app icon. `public/` also holds the
  favicons (made from the app icon) and robots.txt.

## Design rules

The site shares its visual system with the client dashboard app, so the
marketing site and the product read as one company.

- Copy is client-approved and verbatim. No em dashes anywhere. Sentence-case
  headings.
- Palette: ink `#15202B` text on cream `#FBF8F1`, white cards with hairline
  borders, crown green `#1E6B47` for buttons and accents, teal `#1C9C8F`
  for good news, pineapple yellow `#F0B429` only in the mark and as an
  accent on ink. No shadows.
- Type: Inter throughout (400, 500, 600, 700), self-hosted via fontsource,
  latin subset only. Headings 700 with tight tracking. The wordmark in the
  logo lockup is outlined Outfit and needs no font.
- Corners: cards 14 to 18px, buttons 10px, phone frame 28px.
- Every CTA reads "Let's jump on a call".
- Responsive layout is intrinsic (auto-fit grids, `clamp()` spacing and
  type). The only media query is the mobile navigation in `Header.astro`.
- Product screens are demo data and are always labelled as such. Never
  present them as a real client's results.

## Cal.com

The loader in `Base.astro` initializes the namespace and binds every
`[data-cal-link]` anchor to the booking modal. `/assessment` mounts the inline
embed from `CalEmbed.astro`. Every CTA keeps `href="/assessment"` as the no-JS
fallback.

Still to configure in the Cal.com dashboard before launch:

1. **Redirect on booking** to `https://projectpineapple.com/thanks`.
2. **Brand color.** The embed passes `cal-brand: #22402f` via `cssVarsPerTheme`;
   set the same in the Cal.com appearance settings so the hosted booking page
   matches.

## Analytics

Two optional integrations, both off until a value is set in
`src/content/site.ts`:

- `GTM_ID`: Google Tag Manager container. When set, the GTM snippet is
  emitted on every page.
- `CF_ANALYTICS_TOKEN`: Cloudflare Web Analytics site token. Cookieless
  page-view counting at the edge.

Independently of either, every page initialises `window.dataLayer` and
pushes two events for a tag manager to pick up:

- `cta_click` when any booking link is clicked, with `cta_text`,
  `cta_location` (the section id or class), and `page_path`.
- `booking_complete` when Cal.com reports a successful booking from the
  modal or the inline embed, with `booking_event_type`.

## Deploying

Hosted on Cloudflare Workers as a static-assets Worker (`wrangler.jsonc`).
No server code runs; Cloudflare serves `dist/` from the edge.

One-time setup in the Cloudflare dashboard:

1. Workers & Pages, Create, **Import a repository**, pick
   `adammalmborg/projectpineapple-site`.
2. Worker name `projectpineapple-site` (must match `wrangler.jsonc`).
3. Build command `npm run build`. Deploy command can stay at the default
   `npx wrangler deploy`. Production branch `main`.
4. After the first deploy, add the custom domain under the Worker's
   Settings, Domains & Routes.

Every push to `main` then builds and deploys. Pushes to other branches get
a preview URL.

The production origin is set in `astro.config.mjs` (`site`), which drives
canonical URLs, Open Graph tags, and the sitemap.

## Pre-launch review

Two pieces of copy ship without client sign-off, per the handoff. Read them
once more before the DNS cutover:

- The dental and legal attribution claims in `src/content/industries.ts`.
- The two client vignettes on the home page (`src/pages/index.astro`, proof
  section).

The product screens on the home page use demo data and are captioned as
such. Keep it that way unless a client agrees to have real, redacted numbers
shown.
