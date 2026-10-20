# Repository & discoverability

GitHub and npm metadata for **vorlaxen-labs/huk-js**. Remote settings below are applied with `gh repo edit` (see maintainer commands).

## GitHub (remote)

| Field | Value |
|-------|--------|
| **Description** | HuK — zero-dependency, tree-shakable TypeScript utilities for Node, browsers & SSR. Turkish-aware slugify, validation, crypto, SSR-safe storage. npm: @vorlaxen-labs/huk-js |
| **Website** | https://www.npmjs.com/package/@vorlaxen-labs/huk-js |
| **Discussions** | Enabled (Q&A category) |
| **Merge** | Squash merge; delete branch on merge |

### Topics (GitHub max 20)

```
typescript, typescript-utilities, utilities, utility-library, npm-package, tree-shaking, zero-dependencies, string-utils, slugify, turkish, i18n, type-guards, crypto-utils, localstorage, ssr, nextjs, vorlaxen-labs, huk, helper-library, opensource
```

### Social preview

Upload **1280×640** under **Settings → General → Social preview**. Source asset: [assets/social-preview.svg](../assets/social-preview.svg) (export to PNG if needed).

## npm (package.json)

- **`description`** — mirrors GitHub description keywords.
- **`keywords`** — see root `package.json`; update on major feature additions.
- **`homepage`** — GitHub README anchor.
- **`repository` / `bugs`** — GitHub URLs.

## In-repo SEO

- Root **README.md** — primary landing copy and badges.
- **CONTRIBUTING.md**, **CODE_OF_CONDUCT.md**, **SECURITY.md**, **CHANGELOG.md**.
- **docs/** — linked from README for long-tail API queries.

## Maintainer: apply GitHub settings

```bash
gh repo edit vorlaxen-labs/huk-js \
  --description "HuK — zero-dependency, tree-shakable TypeScript utilities for Node, browsers & SSR. Turkish-aware slugify, validation, crypto, SSR-safe storage. npm: @vorlaxen-labs/huk-js" \
  --homepage "https://www.npmjs.com/package/@vorlaxen-labs/huk-js" \
  --enable-discussions \
  --enable-squash-merge \
  --delete-branch-on-merge \
  --add-topic typescript --add-topic typescript-utilities --add-topic utilities \
  --add-topic utility-library --add-topic npm-package --add-topic tree-shaking \
  --add-topic zero-dependencies --add-topic string-utils --add-topic slugify \
  --add-topic turkish --add-topic i18n --add-topic type-guards --add-topic crypto-utils \
  --add-topic localstorage --add-topic ssr --add-topic nextjs \
  --add-topic vorlaxen-labs --add-topic huk --add-topic helper-library --add-topic opensource
```

After changing topics, remove stale ones with `gh repo edit --remove-topic <name>` if needed.
