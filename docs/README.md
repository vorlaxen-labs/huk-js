# HuK documentation

**HuK** is organized in layers:

- **`core/`** — `createModule` factory and `HuK` facade
- **`utils/`** — environment and shared helpers (SSR detection, crypto access, dates)
- **`constants/`** — shared constants (e.g. Turkish locale maps)
- **`modules/`** — public namespaces (`string`, `number`, …)

Import the root package or a subpath; each subpath maps to one module entry in `package.json` exports.

## Guides

| Document | Audience |
|----------|----------|
| [Getting started](./getting-started.md) | New users |
| [API reference](./api-reference.md) | Module listing |
| [Production](./production.md) | SSR, storage, crypto |
| [Publishing](./PUBLISHING.md) | Maintainers |
| [Repository](./REPOSITORY.md) | GitHub/npm SEO checklist |

## Community

- [Contributing](../CONTRIBUTING.md)
- [Code of conduct](../CODE_OF_CONDUCT.md)
- [Security](../SECURITY.md)
- [Changelog](../CHANGELOG.md)
