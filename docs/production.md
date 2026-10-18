# Production usage

## SSR and storage

`HuK.storage` uses `localStorage` only when a browser environment is detected. On Node/SSR:

- `set`, `remove`, `clear` are no-ops (no throw)
- `get` returns your **default** value

Corrupt JSON in storage returns the default. Quota errors on `set` fail silently by design.

## Crypto

- **UUID**: prefers `crypto.randomUUID()`; falls back to a random hex pattern.
- **hash**: uses Web Crypto `subtle` when available; otherwise Node `crypto.createHash` (dynamic import).

## Bundlers

Use subpath imports to keep bundles small:

```typescript
import { string } from '@vorlaxen-labs/huk-js/string';
```

`sideEffects: false` is set in `package.json`.

## Node

Target **Node 18+** for development and for hash fallback behavior in server-only code.
