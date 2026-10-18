# Publishing (@vorlaxen-labs/huk-js)

Releases from `main` use GitHub Actions and [semantic-release](https://semantic-release.gitbook.io/).

## CI

On every PR and push to `main`: lint → build → test → `npm pack --dry-run`.

Publish runs after CI succeeds (see `.github/workflows/publish.yml`).

## Secrets

Configure `NPM_TOKEN` for npm publish (or Trusted Publishing when enabled). `GITHUB_TOKEN` is provided by Actions.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `fix:` patch
- `feat:` minor
- `feat!:` or `BREAKING CHANGE:` major
