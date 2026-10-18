# Getting started

## Installation

```bash
npm install @vorlaxen-labs/huk-js
```

Requires **Node.js 18+** for development; browser usage has no Node requirement beyond your bundler.

## Using HuK

```typescript
import { HuK } from '@vorlaxen-labs/huk-js';

HuK.string.slugify('Merhaba Dünya');
```

Named subpath imports:

```typescript
import { string } from '@vorlaxen-labs/huk-js/string';

string.isEmail('a@b.co');
```

## v1 → v2

- Public API is documented as **`HuK`** (not `huk`).
- **`express`** is no longer listed as a peer dependency (HuK never required it at runtime).
- Copyright holder: **Vorlaxen Labs** (MIT license unchanged).
