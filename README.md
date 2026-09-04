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
  list, operator block, portrait crops, closing CTA, sample dashboard, inline
  Cal embed.
- `src/assets/adam-malmborg.jpg`: the portrait. Responsive derivatives are
  generated at build time.
- `public/`: favicons, robots.txt.

## Design rules carried from the handoff

- Copy is client-approved and verbatim. No em dashes anywhere. Sentence-case
  headings.
- No pure black, no pure white, no shadows, no border radius except circular
  portrait crops. Hairline borders and background shifts only.
- Every CTA reads "Let's jump on a call".
- Responsive layout is intrinsic (auto-fit grids, `clamp()` spacing and
  type). The only media query is the mobile navigation in `Header.astro`.
- Fonts are self-hosted (fontsource): Libre Caslon Text 400 and 400 italic,
  Instrument Sans 400 and 500, latin subset only.

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

## Deploying

Static output. Zero-config on Vercel, Netlify, or Cloudflare Pages: build
command `npm run build`, output directory `dist`. The production origin is set
in `astro.config.mjs` (`site`), which drives canonical URLs, Open Graph tags,
and the sitemap.

## Pre-launch review

Two pieces of copy ship without client sign-off, per the handoff. Read them
once more before the DNS cutover:

- The dental and legal attribution claims in `src/content/industries.ts`.
- The two client vignettes on the home page (`src/pages/index.astro`, proof
  section).

The sample dashboard figures are invented and labelled as a sample. Replace
with real redacted numbers in v2.
