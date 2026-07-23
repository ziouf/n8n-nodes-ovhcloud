# AGENTS.md

## Repo layout (verified)

- `credentials/` — credential type definitions (`OvhCloudApi`)
- `nodes/OvhCloudDedicated|Hosting|Me|Service|Vps/` — five nodes, each with its own directory containing the `.node.ts`, a `resources/` folder, and shared utilities in `shared/shared/`
- `scripts/generate-nodes-manifest.js` — regenerates `n8n.nodes` entries in package.json from directories under `nodes/`; runs automatically after build via postbuild hook. **Never edit the nodes list by hand.**
- `docs/v1/`, `docs/v2/`, `docs/_shared/` — per-resource docs + shared boilerplate (auth, errors, type safety, testing checklist)

## Commands (exact strings to use)

```bash
npm run build          # n8n-node build AND regenerate nodes manifest
npm run dev            # hot-reload dev server via @n8n/node-cli
npm run lint           # ESLint via n8n-node-cli config
npm run lint:fix       # auto-fixable issues only
npm test               # Jest (ts-jest)
```

`npm run build:watch`, `release-it`, and the pre-release hook are available but rarely needed during development. No codegen or migration tools exist in this project; don't invent them.

## TypeScript / lint defaults to trust from config files

- **Module**: node16 (not CommonJS)
- **Strict mode on**, all strict checks enabled, `useUnknownInCatchVariables: true`, `noUnusedLocals: true`
- Declaration + source maps emitted; incremental builds enabled via tsbuildinfo
- ESLint 9.x flat config from @n8n/node-cli — do not add a separate `.eslintrc*`

## Coding conventions (verified, non-obvious)

- Use `NodeApiError` for n8n-specific errors. Catch blocks must handle the full catch type (`useUnknownInCatchVariables: true`).
- API calls go through `OvhCloudApiClient` — never raw fetch/axios inside a resource file. Auth is signed with SHA1 before dispatch.
- Resources follow a three-export pattern per file: `description`, `execute()`, and optionally `methodsListSearch()` for dynamic dropdowns (e.g., service IDs).
- Operations in resources use switch statements on an input property; services are listed via the credential's consumer-key-scoped API path under `<host>/api/`.
- **Pattern de structure par catégorie** : Pour les nodes avec un grand nombre d'opérations (>10), utiliser des sous-dossiers par catégorie de ressources (ex: `nodes/OvhCloudPublicCloud/project/`, `rancher/`, `blockstorage/`) au lieu d'un seul dossier plat. Chaque sous-dossier contient ses propres fichiers `.operation.ts` avec les imports relatifs adaptés (`../../../shared/transport/ApiClient`).

## What to avoid

- Don't claim there is no test framework — Jest + ts-jest are configured and `npm test` runs them.
- Don't hard-code node entries in package.json; let the manifest script do it.
- Don't bypass OvhCloudApiClient for HTTP requests, even inside tests of unrelated logic (use a proper mock when testing).
- Don't add manual `.eslintrc*`, `tsconfig` overrides outside tsconfig.json, or Prettier config alongside existing tooling — everything is inherited from the @n8n/node-cli preset.
