# Contributing to HuK

Thank you for helping improve **@vorlaxen-labs/huk-js**. This project targets small, focused utilities with strong typing and predictable behavior in Node and browsers.

## Before you start

- Search [existing issues](https://github.com/vorlaxen-labs/huk-js/issues) and [discussions](https://github.com/vorlaxen-labs/huk-js/discussions).
- For large changes, open an issue or discussion first so we can align on API shape.

## Development setup

```bash
git clone https://github.com/vorlaxen-labs/huk-js.git
cd huk-js
npm ci
npm run build
npm test
```

## Pull requests

1. Branch from `main`.
2. Keep changes scoped (one feature or fix per PR when possible).
3. Run before pushing:

   ```bash
   npm run lint
   npm run build
   npm test
   ```

4. Use the [pull request template](.github/pull_request_template.md).

## Code guidelines

- Match existing module layout under `src/modules/`.
- Prefer tree-shakable exports; avoid adding runtime dependencies.
- Add or update unit tests under `tests/` for behavior you change.
- Document public API changes in `docs/api-reference.md` when relevant.

## Releases

Maintainers use [semantic-release](https://github.com/semantic-release/semantic-release) via CI. See [docs/PUBLISHING.md](docs/PUBLISHING.md).

## Code of conduct

Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
