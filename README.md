# Shobhit Gupta — Developer Portfolio

A responsive, single-page developer portfolio for Shobhit Gupta, a second-year Computer Science and Engineering student at BMSCE. The site presents PawCare as his only featured end-to-end project, alongside verified profile links, skills, and a dated LeetCode snapshot.

## Features

- Responsive one-page portfolio with dark/light theme support, smooth section navigation, motion, and visible keyboard focus styles.
- PawCare case study with source and live-app links, authentic screenshots, and a 33-second silent MP4 walkthrough with English captions. The walkthrough was recorded from a separate temporary copy using synthetic data and an in-memory MongoDB instance; it contains no production records or visible passwords.
- Public GitHub repository metadata fetched from GitHub’s REST API for `shobhitguptacs`, with a local PawCare fallback if the API is unavailable. Forked and archived repositories are omitted; PawCare is the sole featured project and any other public repositories appear separately.
- LeetCode statistics displayed as a dated snapshot checked on 27 October 2026; these values can change over time.
- One-page PDF CV at [`public/Shobhit-Gupta-CV.pdf`](public/Shobhit-Gupta-CV.pdf) and an editable DOCX at [`cv/Shobhit-Gupta-CV.docx`](cv/Shobhit-Gupta-CV.docx).

## Tech stack

Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and Biome.

## Project structure

```text
app/                         Next.js routes, metadata, and global styles
components/                  Navigation, portfolio sections, and motion wrappers
lib/content.ts               Profile, skills, and PawCare content
lib/github.ts                Public GitHub repository data and fallback
lib/site.ts                  Canonical and public-origin helper
public/                      CV download, media, icons, and static metadata files
  media/pawcare/              Screenshots, MP4 walkthrough, and WebVTT captions
cv/                          Editable DOCX and source/build materials for the PDF CV
```

## Run locally

Prerequisites: Node.js 20.9 or newer and pnpm 11.25.0 (or Corepack capable of using the package-manager version pinned in `package.json`). No environment variables or secrets are required for local development.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
corepack pnpm check
corepack pnpm build
```

The server-side GitHub API request is cached for one hour. If GitHub is unreachable or rate-limited, the site uses a local PawCare repository fallback.

## Public origin and search metadata

Canonical, sitemap, and social-preview URLs use the optional `SITE_URL` value when configured. On Vercel, the app can use Vercel’s actual `VERCEL_URL` as the fallback; no deployment hostname is guessed. For a local production build, set `SITE_URL=http://localhost:3000`. Once the final production domain is confirmed, set `SITE_URL` to that real HTTPS origin if it should be preferred over Vercel’s deployment host.

## PawCare links

- Source: <https://github.com/shobhitguptacs/pawcare>
- Live application: <https://pawcare-v9rzfscq.manus.space>

## Author

**Shobhit Gupta**

GitHub: <https://github.com/shobhitguptacs>

Email: <mailto:shobhitguptacs25@bmsce.ac.in>

## Security and project ownership

Do not add `.env` files, access tokens, passwords, or other credentials to this repository. The root `.gitignore` excludes environment files, dependencies, build output, logs, local uploads, and temporary CV tooling. The existing PawCare source and repository are separate and are not modified by this portfolio.
