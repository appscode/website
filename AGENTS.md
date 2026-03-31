# AGENTS.md — AppsCode Website

This is a **Hugo static site** (v0.111.1 extended) for appscode.com. It uses Bulma CSS, PostCSS, and deploys to Firebase/nginx. There are no tests, no linters, and no type checkers.

## Build & Run Commands

```bash
# Start local dev server (uses config.dev.yaml, baseurl: firebase preview)
make run
# Equivalent to:
hugo server --config=config.dev.yaml

# Generate dev build (output to public/)
make gen
# Equivalent to:
rm -rf public && hugo --config=config.dev.yaml

# Generate production build (minified, uses config.yaml, baseurl: appscode.com)
make gen-prod
# Equivalent to:
rm -rf public && hugo --minify --config=config.yaml

# Install npm dependencies (PostCSS, PurgeCSS, Bulma)
npm install

# Build and push Docker container (multi-arch: amd64, arm64)
make container

# Deploy to Firebase (qa)
make qa

# Regenerate assets (pulls docs from hugo-tools, rewrites image paths)
make assets
```

There are **no tests or lint commands**. `npm test` is a no-op placeholder. The CI pipeline (`.github/workflows/ci.yml`) only runs `make gen-prod` to verify the site builds. Always run `make gen` or `make gen-prod` after changes to confirm the build succeeds.

## Project Structure

```
content/                # Markdown pages with YAML front matter
  services/             # Service pages organized by category
  products/             # Product pages
  about/                # About page
  contact/              # Contact page
  videos/               # Video content
  webinar/              # Webinar pages
data/                   # JSON data files consumed by shortcodes
  services/             # Service data (mirrors content/services/ structure)
  products/             # Product data
  authors/              # Author profiles
  customers.json        # Customer logos
  partners.json         # Partner listings
  testimonials.json     # Testimonials
layouts/                # Hugo templates (overrides empty themes/ dir)
  _default/             # Base layouts (baseof.html, list, single)
  partials/             # Reusable partials (header, footer, head, helpers)
  shortcodes/
    common/             # Shared shortcodes (hero-area, cards, faq, etc.)
    services/           # Service-specific shortcodes (we-understand-the-nitty-gritty)
  products/             # Product-specific layouts
  services/             # Service layout
  index.html            # Homepage
  404.html
static/                 # Static assets (images, fonts, CSS)
  assets/images/        # Images referenced in content and data
  assets/sass/          # Main CSS (processed by PostCSS/PurgeCSS)
config.yaml             # Production config (baseurl: appscode.com)
config.dev.yaml         # Dev config (baseurl: firebase preview URL)
Makefile                # Build, deploy, container targets
Dockerfile              # nginx:stable-alpine container
process-css.js          # PurgeCSS config (whitelists: active, is-visible, fserv-*, etc.)
```

## Content Conventions

### Page front matter
Every service page follows this pattern:
```yaml
---
id: unique-page-id
title: Page Title
description: SEO description
layout: services          # or products, _default, etc.
url: '/services/custom-url'
data: 'data/path/to/data_file.json'
---
```

### JSON data files
Data is stored in `data/` as `.json` files, NOT inline in markdown. Shortcodes load data via `.Page.Params.data`. Each JSON file contains sections like `hero`, `cards`, `faq`, `service_details`, `tech_stack`, `partner_listing`, etc. Use consistent key ordering: `title`, `subtitle`, `description`, `cta_text`, `cta_url`, `illustration`.

### Shortcodes
Pages compose sections using shortcodes:
```markdown
{{< common/hero-area >}}
{{< common/customer-logos >}}
{{< common/title-with-small-cards >}}
{{< common/service-details >}}
{{< common/cards >}}
{{< common/partner-listing >}}
{{< common/expertise >}}
{{< common/cta-area >}}
{{< common/faq >}}
```

Service-specific shortcodes live in `layouts/shortcodes/services/`. Each shortcode loads JSON data from `.Page.Params.data` and renders a section.

## Code Style

### HTML/Templates (Go templates)
- Use `{{ $data := getJSON .Page.Params.data }}` to load data in shortcodes
- Use `{{ .field | safeHTML }}` for fields containing HTML (links, formatting)
- Use Bulma CSS classes (`columns`, `column`, `is-*`, `section-padding`, `has-text-*`, etc.)
- Wrap output in `{{ with $data.section_name }}...{{ end }}` guards
- Prefer 4-space indentation in HTML templates
- Block comments for section markers: `<!-- Section Name Start/End -->`
- Scripts/styles use partials in `layouts/partials/helpers/` (`style-bundle.html`, `script-bundle.html`)

### JSON data files
- Use double quotes for all strings
- HTML is allowed in `description` fields (rendered with `safeHTML`)
- Image paths are relative to `static/` (e.g., `/assets/images/...`)
- Keep keys in consistent order: `title`, `subtitle`, `description`, `cta_text`, `cta_url`, `illustration`

### CSS
- Bulma is the CSS framework; extend with utility classes, not custom CSS
- PostCSS with autoprefixer runs automatically
- PurgeCSS strips unused classes in production (configured in `process-css.js`)

### Markdown
- Use `{{< shortcode >}}` syntax (not `{{% %}}`) — content is not processed by Markdown renderer
- `markup.goldmark.renderer.unsafe: true` in config allows raw HTML in markdown
- Use `---` YAML front matter delimiters, not `+++` TOML

## Deployment

- **Firebase**: `make gen` then `make qa` (default project) or production via `make release`
- **Docker**: `make container` builds nginx-based image, pushed to `ghcr.io/appscode/website`
- **CI**: GitHub Actions runs `make gen-prod` on PRs and pushes to master; concurrency group cancels in-progress runs

## Key Files to Know

| File | Purpose |
|---|---|
| `config.yaml` | Production Hugo config (baseurl: appscode.com) |
| `config.dev.yaml` | Dev/preview Hugo config (baseurl: firebase URL) |
| `Makefile` | Build, deploy, container targets |
| `.github/workflows/ci.yml` | CI pipeline (build-only) |
| `layouts/_default/baseof.html` | Base HTML template (header, footer, scripts) |
| `layouts/partials/head/head.html` | Head section (meta, fonts, CSS) |
| `layouts/shortcodes/common/hero-area.html` | Hero section shortcode |
| `process-css.js` | PurgeCSS config with safelist |
| `data/config.json` | Site-wide config (assets repo URL) |
| `firebase.json` | Firebase hosting config |
| `Dockerfile` | nginx:stable-alpine for containerized deploys |
