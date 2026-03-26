# Copilot Instructions for n8n-nodes-ovhcloud

## Big picture architecture
- This is an n8n community node package (`n8n-nodes-base` style) with one main node: `nodes/OvhCloud/OvhCloud.node.ts`.
- Runtime flow is hierarchical dispatch:
  - `OvhCloud.node.ts` routes by top-level `resource` (`services`, `me`, `email`, `vps`).
  - Each `actions/<resource>/index.ts` routes by operation/sub-resource.
  - Leaf `*.operation.ts` files define UI fields (`description`) and API behavior (`execute`).
- Transport/auth is centralized in `nodes/OvhCloud/transport/`:
  - `ApiClient` wraps all HTTP calls (`httpGet/httpPost/httpPut/httpDelete`).
  - `CredentialHolder` signs OVH requests (`X-Ovh-*` headers + SHA1 signature).

## Core implementation patterns
- Keep each operation file in the `description(...)` + `execute(...)` pattern (see `actions/services/list.operation.ts`).
- For new resource groups, export from `actions/<resource>/index.ts` and wire into `OvhCloud.node.ts` properties + execute switch.
- Use `displayOptions` composition for conditional UI fields (spread + merge patterns used heavily in `actions/me/index.ts` and `actions/vps/index.ts`).
- Dynamic dropdowns must use `methods/listSearch` functions (`getServiceIds`, `getEmailDomains`, `getVpsServices`) and `resourceLocator` modes.
- Use parameter naming prefixes by domain (`svc*`, `me*`, `bill*`, `vps*`) to avoid collisions in mixed property arrays.

## API and data-flow conventions
- Always go through `ApiClient`; do not call `helpers.httpRequest` directly in operation files.
- Typical OVH list flow is 2-step fan-out:
  1. fetch IDs (e.g. `/services`, `/me/bill`, `/me/order`),
  2. fetch each detail endpoint and return array of `{ json: ... }`.
- Query filters are assembled incrementally and only include non-empty values (see bills/orders list operations).
- Return shape should be `INodeExecutionData[]`; root node wraps with `helpers.returnJsonArray`.

## Build, lint, run, debug
- Install: `npm install`
- Build: `npm run build` (uses `n8n-node build`)
- Lint: `npm run lint` / `npm run lint:fix`
- Dev/manual testing: `npm run dev` and validate in an n8n instance UI (no automated tests configured).
- `tests/` exists but is currently empty; avoid introducing test frameworks unless requested.

## Code style constraints (project-specific)
- TypeScript strict mode is enabled; keep explicit types and avoid `any`.
- Use type-only imports where appropriate (`import type { ... }`).
- Formatting expectations: tabs, semicolons, single quotes, trailing commas (Prettier config).
- Keep changes minimal and localized; follow existing naming and file organization.

## Integration points to preserve
- Credential type name must remain `ovhCloud-Api` (`credentials/OvhCloudApi.credentials.ts`).
- n8n package registration is in `package.json` under `n8n.credentials` and `n8n.nodes`; keep dist paths valid.
- Node icon references use `icons/ovh_vertical.svg` and are wired in both node and credential definitions.
