# connectors.so

A growing collection of Superhuman (formerly Coda) connectors, built by [Sourabh Choraria](https://github.com/choraria).

Live at **<https://www.connectors.so>**.

## Stack

- Jekyll 4.x — static site generator
- GitHub Pages with **GitHub Actions** build (not the legacy "deploy from branch" mode)
- Custom theme; no external Jekyll theme

## Local development

You need Ruby 2.7+ (Jekyll 4.x requirement). macOS system Ruby (2.6.x) is too old — install via Homebrew:

```bash
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
exec zsh -l
gem install bundler jekyll
```

Then from this directory:

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

## Adding a new connector

Each connector is **one folder** under `_connectors/`. Adding connector #2:

1. Create the folder:
   ```
   _connectors/<slug>/
   ├── index.md              # layout: connector
   ├── privacy-policy.md     # layout: connector-page
   ├── terms-of-service.md   # layout: connector-page
   └── setup-and-usage.md    # layout: connector-page
   ```
2. Add an entry to `_data/connectors.yml` with the same `slug`, plus `title`, `tagline`, `icon`, `accent`, `accent_2`, `status`, and the `tabs` array.
3. Drop the connector icon SVG at `assets/images/connectors/<slug>.svg`.

The homepage card grid and the in-connector tab nav both read from `_data/connectors.yml`, so once those two are in sync the connector appears everywhere automatically.

## Repo layout

```
.
├── _config.yml                  # Jekyll config + collection setup
├── CNAME                        # www.connectors.so
├── Gemfile                      # Jekyll + plugins
├── .github/workflows/pages.yml  # Build + deploy
├── index.html                   # Homepage
├── 404.html
├── _layouts/                    # default · connector · connector-page
├── _includes/                   # head · nav · footer · connector-card · connector-tabs
├── _connectors/                 # One folder per connector
│   └── google-business-profile/
├── _data/connectors.yml         # Card metadata + tab order
└── assets/
    ├── css/style.scss
    ├── favicon.svg
    └── images/connectors/
```

## Deploy

Push to `main`. The `pages.yml` workflow builds with Jekyll 4.x (Ruby 3.2) and deploys to GitHub Pages.

**One-time GitHub setup:**

- Repo Settings → Pages → **Source: GitHub Actions** (not "Deploy from a branch").
- After the first deploy + DNS propagation, toggle **Enforce HTTPS**.

**DNS at the registrar:**

- Apex `connectors.so` → A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` → CNAME → `choraria.github.io`.
- GitHub auto-redirects apex → www.

## TODOs before launch

Grep for `TODO` in markdown and HTML:

- Support email address (Privacy, Terms, Setup & Usage).
- Governing-law jurisdiction (Terms §9).
- Coda Gallery URL, demo video URL (Overview).
- Replace the homepage `intro__quote` placeholder with the real intro.
- Confirm `accent` and `accent_2` colors for the GBP card if you want something less Google-branded.
