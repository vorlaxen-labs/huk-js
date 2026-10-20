# HuK — Production-grade TypeScript utilities

[![npm version](https://img.shields.io/npm/v/@vorlaxen-labs/huk-js)](https://www.npmjs.com/package/@vorlaxen-labs/huk-js)
[![npm downloads](https://img.shields.io/npm/dm/@vorlaxen-labs/huk-js)](https://www.npmjs.com/package/@vorlaxen-labs/huk-js)
[![CI](https://img.shields.io/github/actions/workflow/status/vorlaxen-labs/huk-js/ci.yml?branch=main&label=CI)](https://github.com/vorlaxen-labs/huk-js/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vorlaxen-labs/huk-js)](https://bundlephobia.com/package/@vorlaxen-labs/huk-js)
[![GitHub stars](https://img.shields.io/github/stars/vorlaxen-labs/huk-js?style=social)](https://github.com/vorlaxen-labs/huk-js/stargazers)

**HuK** (`@vorlaxen-labs/huk-js`) is a **zero runtime dependency**, **tree-shakable** TypeScript utility library for **Node.js**, **browsers**, and **SSR** frameworks (Next.js, Nuxt, Remix, and similar). One typed toolkit replaces ad‑hoc `utils/` folders: string transforms, validation, masking, dates, crypto helpers, SSR-safe storage, and functional utilities — with **Turkish-aware `slugify`** built in.

> Part of the [Vorlaxen Labs](https://github.com/vorlaxen-labs) toolkit. Pairs with [`@vorlaxen-labs/bar-js`](https://www.npmjs.com/package/@vorlaxen-labs/bar-js) for complementary helpers.

## Table of contents

- [Why HuK](#why-huk)
- [Features](#features)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Package exports](#package-exports)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Why HuK

| Need | HuK approach |
|------|----------------|
| Bundle size | Subpath exports — import only `string`, `fn`, `storage`, etc. |
| Type safety | First-class TypeScript types on every module |
| SSR | Storage and env helpers fail safely on the server |
| i18n / TR locales | Turkish character maps for slugify and text transforms |
| No vendor lock-in | MIT license, no peer deps, no hidden runtime |

## Features

- **String** — slugify (TR-aware), truncate, mask, camelCase, HTML escape, email & password validation
- **Number** — clamp, format, currency, bytes, parsing helpers
- **Date** — validation, add/subtract, relative time, ISO formatting
- **Array / Object** — compact, unique, groupBy, clone, merge, deep `get`, pick/omit
- **Storage** — SSR-safe `localStorage` wrapper with consistent API
- **Crypto** — UUID v4, SHA-256 hash, base64 encode/decode (Web Crypto where available)
- **Fn** — debounce, throttle, retry, pipe, memoize, once
- **Is** — narrow types with `empty`, primitives, and structure checks

## Installation

```bash
npm install @vorlaxen-labs/huk-js
```

```bash
pnpm add @vorlaxen-labs/huk-js
```

```bash
yarn add @vorlaxen-labs/huk-js
```

Requires **Node.js 18+** for local development; browser bundles depend only on your toolchain.

## Quick start

```typescript
import { HuK } from '@vorlaxen-labs/huk-js';

const slug = HuK.string.slugify('Hakan K. - Software Developer!');
// "hakan-k-software-developer"

const masked = HuK.string.mask('4444555566667777', { visibleEnd: 4 });
// "************7777"

const camel = HuK.string.toCamelCase('user_profile_data');
// "userProfileData"
```

Tree-shake with subpaths:

```typescript
import { string } from '@vorlaxen-labs/huk-js/string';
import { fn } from '@vorlaxen-labs/huk-js/fn';

string.isEmail('dev@vorlaxen.com');
const save = fn.debounce(() => {}, 300);
```

## Package exports

| Import | Purpose |
|--------|---------|
| `@vorlaxen-labs/huk-js` | `HuK` facade + named module exports |
| `@vorlaxen-labs/huk-js/string` | String transforms, security, validation |
| `@vorlaxen-labs/huk-js/number` | Number validation, math, formatting |
| `@vorlaxen-labs/huk-js/date` | Date validation and formatting |
| `@vorlaxen-labs/huk-js/array` | Array utilities |
| `@vorlaxen-labs/huk-js/object` | Object clone, merge, get, pick |
| `@vorlaxen-labs/huk-js/storage` | SSR-safe localStorage wrapper |
| `@vorlaxen-labs/huk-js/crypto` | UUID, base64, SHA-256 hash |
| `@vorlaxen-labs/huk-js/fn` | debounce, throttle, retry, pipe, memoize |
| `@vorlaxen-labs/huk-js/is` | Type and empty checks |

## Documentation

| Guide | Description |
|-------|-------------|
| [Docs index](docs/README.md) | Architecture and module layout |
| [Getting started](docs/getting-started.md) | Install, exports, v1→v2 migration |
| [API reference](docs/api-reference.md) | Module overview |
| [Production](docs/production.md) | SSR, storage, crypto runtime |
| [Publishing](docs/PUBLISHING.md) | CI and npm release (maintainers) |

**Links**

- npm: [`@vorlaxen-labs/huk-js`](https://www.npmjs.com/package/@vorlaxen-labs/huk-js)
- Issues: [github.com/vorlaxen-labs/huk-js/issues](https://github.com/vorlaxen-labs/huk-js/issues)
- Discussions: [github.com/vorlaxen-labs/huk-js/discussions](https://github.com/vorlaxen-labs/huk-js/discussions)
- Changelog: [GitHub Releases](https://github.com/vorlaxen-labs/huk-js/releases)

## Contributing

We welcome bug reports, docs improvements, and focused PRs. See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Security

Report vulnerabilities via [GitHub Security Advisories](https://github.com/vorlaxen-labs/huk-js/security/advisories/new). See [SECURITY.md](SECURITY.md).

## License

MIT © [Vorlaxen Labs](https://github.com/vorlaxen-labs). See [LICENSE](LICENSE).
