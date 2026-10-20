# Publishing (@vorlaxen-labs/huk-js)

Production releases are **fully automated** on push to `main` via GitHub Actions and [semantic-release](https://semantic-release.gitbook.io/). You do **not** need a `.env` file in the repo for CI.

This matches the [@vorlaxen-labs/agent-skills](https://github.com/vorlaxen-labs/agent-skills) pipeline: **Trusted Publishing (OIDC)**, not a long-lived publish token in the publish step.

## One-time setup (required)

### 1. npm package access

- Scope: `@vorlaxen-labs`
- Package: `@vorlaxen-labs/huk-js`
- Public access is set in `package.json` → `publishConfig.access`.

### 2. GitHub Actions auth (OIDC)

Publish auth is **OIDC** via [Trusted Publishing](https://docs.npmjs.com/trusted-publishers). No `NPM_TOKEN` secret is required for the publish job.

`GITHUB_TOKEN` is provided automatically by Actions.

Requirements in CI (see `.github/workflows/publish.yml`):

- **Node.js 22.14+** (workflow uses Node 22)
- **npm CLI 11.5.1+** (upgraded in the publish job)
- Job permission **`id-token: write`**
- Do **not** pass `registry-url` to `setup-node` (conflicts with semantic-release OIDC)
- Do **not** write `//registry.npmjs.org/:_authToken=…` into `.npmrc` for publish

`package.json` → `repository.url` must match the GitHub repo exactly (currently `git+https://github.com/vorlaxen-labs/huk-js.git`).

### 3. npm Trusted Publisher (required for CI publish)

On [npmjs.com](https://www.npmjs.com) → **@vorlaxen-labs/huk-js** → **Settings** → **Trusted publishing**:

1. Provider: **GitHub Actions**
2. Organization / user: `vorlaxen-labs`
3. Repository: `huk-js`
4. **Workflow filename:** `publish.yml` (filename only)
5. Environment: (leave empty unless you use GitHub Environments)
6. **Allowed actions:** enable **`npm publish`** (semantic-release uses direct publish)

After saving, status shows **Pending validation** until the first successful OIDC publish from `publish.yml`. Complete that publish before npm’s validation deadline or the config is removed.

Save, then merge to `main` with a conventional commit (`fix:`, `feat:`, …) so CI and **Publish Package** run.

### 4. Branch and commits

- Default release branch: **`main`**
- Use [Conventional Commits](https://www.conventionalcommits.org/):
  - `fix:` → patch
  - `feat:` → minor
  - `feat!:` or footer `BREAKING CHANGE:` → major

## What CI does

1. **Pull requests:** lint, build, test (`npm run test`), `npm pack --dry-run`.
2. **Push to `main`:** same checks, then **Publish Package** runs semantic-release:
   - Computes next version from commits since last git tag
   - Runs `prepublishOnly` (`build` + `test`) during `npm publish`
   - Publishes to npm with provenance
   - Creates a GitHub Release
   - Commits `package.json` + `package-lock.json` with `[skip ci]`

Manual tag push (`git push origin v*`) is **not** used.

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| OIDC `404 package not found` on publish | Trusted Publisher not linked for `@vorlaxen-labs/huk-js`, or wrong repo / workflow filename |
| `403` + bypass 2FA | Use Trusted Publishing instead of a granular token without bypass |
| Trusted Publisher stuck on **Pending validation** | No OIDC `npm publish` from `publish.yml` yet; merge a `fix:`/`feat:` commit before the npm deadline |
| No release after push to `main` | No conventional commit since last tag; run `npm run release:dry-run` locally |

## Local dry-run

```bash
npm ci
npm run release:dry-run
```

Prefer **CI on `main`** so version tags, GitHub releases, and npm stay in sync.
