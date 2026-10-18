# HuK — TypeScript helper utility kit

[![npm version](https://img.shields.io/npm/v/@vorlaxen-labs/huk-js)](https://www.npmjs.com/package/@vorlaxen-labs/huk-js)
[![CI](https://img.shields.io/github/actions/workflow/status/vorlaxen-labs/huk-js/ci.yml?branch=main&label=CI)](https://github.com/vorlaxen-labs/huk-js/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?logo=typescript)](https://www.typescriptlang.org/)

**HuK** is a zero runtime dependency, tree-shakable TypeScript utility library for Node.js and browsers. Use the `HuK` facade or import individual modules (string, crypto, storage, and more). Designed for production apps and pairs well with [`@vorlaxen-labs/bar-js`](https://www.npmjs.com/package/@vorlaxen-labs/bar-js).

## Table of contents

- [When to use HuK](#when-to-use-huk)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Package exports](#package-exports)
- [Documentation](#documentation)
- [For maintainers](#for-maintainers)
- [License](#license)

## When to use HuK

- You want one typed toolkit instead of a scattered `utils/` folder.
- You need **Turkish-aware slugify**, validation, masking, and formatting out of the box.
- You run **SSR** and need storage helpers that no-op safely on the server.
- You want **subpath imports** so bundlers ship only what you use.

## Installation

```bash
npm install @vorlaxen-labs/huk-js
```

```bash
pnpm add @vorlaxen-labs/huk-js
```

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

Guides live in **[docs/](docs/README.md)**:

| Guide | Description |
|-------|-------------|
| [Getting started](docs/getting-started.md) | Install, exports, v1→v2 notes |
| [API reference](docs/api-reference.md) | Module overview |
| [Production](docs/production.md) | SSR, storage, crypto runtime |
| [Publishing](docs/PUBLISHING.md) | CI and npm release |

- npm: [`@vorlaxen-labs/huk-js`](https://www.npmjs.com/package/@vorlaxen-labs/huk-js)
- Repository: [github.com/vorlaxen-labs/huk-js](https://github.com/vorlaxen-labs/huk-js)

## For maintainers

See [docs/PUBLISHING.md](docs/PUBLISHING.md) and [docs/REPOSITORY.md](docs/REPOSITORY.md).

## License

Distributed under the MIT License. Copyright Vorlaxen Labs. See [LICENSE](LICENSE).
