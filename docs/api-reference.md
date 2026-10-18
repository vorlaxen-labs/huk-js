# API reference

Import from `@vorlaxen-labs/huk-js` or the subpaths below.

| Module | Subpath | Highlights |
|--------|---------|------------|
| String | `/string` | `slugify`, `truncate`, `mask`, `escapeHtml`, `isEmail`, `isStrongPassword` |
| Number | `/number` | `clamp`, `format`, `currency`, `bytes`, validation helpers |
| Date | `/date` | `isValid`, `add`, `format`, `relative`, `toISODate` |
| Array | `/array` | `compact`, `unique`, `flatten`, `groupBy` |
| Object | `/object` | `clone`, `merge`, `get`, `pick` |
| Storage | `/storage` | SSR-safe `get` / `set` / `remove` / `clear` |
| Crypto | `/crypto` | `generateUuid`, `hash`, base64, validators |
| Fn | `/fn` | `debounce`, `throttle`, `retry`, `pipe`, `memoize`, `once` |
| Is | `/is` | `string`, `number`, `array`, `object`, `empty` |

See unit tests under `tests/unit/modules/` for behavioral examples.
