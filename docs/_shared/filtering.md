# Optional Filters on List Operations

This page documents the optional filters mechanism available on select list-type API operations across the OVH Cloud node suite.

## Overview

Several GET "list" operations now expose an optional **Filters** block in their n8n UI. When filled, these filters are translated into query parameters and appended to the API request. When left empty (the default), the request is **identical** to the pre-filter version — there is no breaking change.

### How it works

1. Each affected operation includes a `fixedCollection` property named `filters` with `default: {}`.
2. The collection is organized into **groups** (e.g. `dateRange`, `status`, `search`).
3. Within each group, the user sets one or more field values.
4. At runtime, `buildFilterQuery()` reads the filters from the execution context, skips empty/default values, and returns an `IDataObject` of query parameters.
5. The query object is passed to `client.httpGet()` (or `client.paginateResources()`) as the second argument.

### Naming convention

n8n parameter paths follow `filters.<group>.<field>`:

| n8n path                 | Example                  |
| ------------------------ | ------------------------ |
| `filters.dateRange.from` | ISO 8601 date string     |
| `filters.status.value`   | Enum value (e.g. `open`) |
| `filters.search.subject` | Free-text search term    |
| `filters.flags.archived` | `true` / `false`         |

## Non-breaking guarantee

- **Empty filters = no query params.** If the user does not add any filter group, the API call is exactly as before.
- **Empty / default values are skipped.** An empty string (`''`), `undefined`, or a number equal to its default (`0`) is never sent to the API. This means you cannot explicitly request the value `0` via a numeric filter — see [Known limitation](#known-limitation) below.

## Filter types

Each filter definition specifies a `type` that determines how the value is stored in the n8n UI and how it is sent to the API.

| Type             | n8n field type | API value                              | Notes                                                      |
| ---------------- | -------------- | -------------------------------------- | ---------------------------------------------------------- |
| `string`         | `string`       | Free text                              | Empty strings are skipped. Supports `delimiter` option.    |
| `number`         | `number`       | Integer                                | Default is `0`; a value of `0` is skipped (see limitation) |
| `dateTime`       | `dateTime`     | ISO 8601 string (passed through as-is) | e.g. `2024-01-15T10:30:00Z`                                |
| `options`        | `options`      | String or boolean from the enum        | Dropdown in the n8n UI; `noDataExpression: true`           |
| `options` (bool) | `options`      | `true` / `false`                       | Tri-state in the UI: **Yes** / **No** / (blank = skipped)  |
| `multiOptions`   | `multiOptions` | Array of strings                       | Multi-select dropdown; empty arrays are skipped            |
| `json`           | `json`         | JSON object                            | Accepts a JSON string or object; invalid JSON → error      |

### String with delimiter

A `string` type field can include a `delimiter` property (e.g. `','`). When set, the raw value is split on that delimiter, empty tokens are filtered out, and the resulting non-empty tokens are sent as an **array** of repeated query params. For example, entering `a,b,c` with `delimiter: ','` produces `action=a&action=b&action=c`.

### JSON type

The `json` type accepts either a raw JSON object (from a previous node's output) or a JSON string. If a string is provided, it is parsed via `JSON.parse()` — if parsing fails, an explicit error is thrown: `Invalid JSON in filter "..." (queryParam: "..."). Expected a valid JSON object.`

Common use: filtering by IAM tags, e.g. `{"environment":[{"operator":"EQ","value":"prod"}]}`. Supported operators: `EQ`, `EXISTS`, `ILIKE`, `LIKE`, `NEQ`, `NEXISTS`.

## Client-side vs. API-native pagination

Most list operations use **client-side pagination** via `paginateResources()` (controlled by `maxItems` and `returnFullObjects` in the n8n node UI). This is the default behavior for all nodes.

One exception is **OvhCloud Support — List** (`/support/tickets`), which uses the API's native `page` / `pageSize` pagination. The filter groups `pagination.pageSize` and `pagination.page` map directly to those query parameters. Note that `/support/tickets` does **not** accept `offset`/`limit`; the `page`/`pageSize` mechanism is distinct from the node-level `maxItems` control.

### Endpoints that do NOT support offset/limit

Some OVHcloud API endpoints reject `offset` and `limit` query parameters with a **400 error** ("Received not described parameters"). List operations on these endpoints fetch the full ID array via a single GET request, then fetch each resource's details sequentially:

- `/me/*` (all Me node list operations: bills, deposits, withdrawals, refunds, reverse bills, corrective invoices, orders, bank accounts, etc.)
- `/vps` (VPS list)
- `/dedicated/server` (Dedicated Server list)

For these endpoints, `maxItems` is still available as a **client-side cap** (the ID array is sliced to `maxItems` before fetching details). Client-side pagination (`offset`/`limit`) should only be used on endpoints that declare it in their API spec (e.g. `/cloud/*`, `/xdsl/*`).

## Known limitation

A numeric filter with a default of `0` cannot be used to explicitly request the value `0`. The `isEmptyFilterValue()` function treats `0` as "not set" and skips it. This is by design — it preserves the non-breaking guarantee (empty form = empty query). If you need to filter by `0`, you must use a different mechanism (e.g. a dedicated parameter outside the filters collection).

## Operations with optional filters

| Node                     | Operation                | Endpoint                                     | Filter groups                                                                          |
| ------------------------ | ------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------------- |
| **OvhCloud Me**          | List Bills               | `GET /me/bill`                               | `dateRange` (from, to), `ids` (orderId), `category` (value)                            |
| **OvhCloud Me**          | List Deposits            | `GET /me/deposit`                            | `dateRange` (from, to), `ids` (orderId)                                                |
| **OvhCloud Me**          | List Bank Accounts       | `GET /me/paymentMean/bankAccount`            | `status` (value)                                                                       |
| **OvhCloud Me**          | List Corrective Invoices | `GET /me/correctiveInvoice`                  | `dateRange` (from, to), `ids` (orderId), `category` (value)                            |
| **OvhCloud Me**          | List Refunds             | `GET /me/refund`                             | `dateRange` (from, to), `ids` (orderId)                                                |
| **OvhCloud Me**          | List Reverse Bills       | `GET /me/reverseBill`                        | `dateRange` (from, to), `ids` (orderId)                                                |
| **OvhCloud Me**          | List Withdrawals         | `GET /me/withdrawal`                         | `dateRange` (from, to), `ids` (orderId)                                                |
| **OvhCloud Me**          | List Orders              | `GET /me/order`                              | `dateRange` (from, to)                                                                 |
| **OvhCloud Support**     | List                     | `GET /support/tickets`                       | `dateRange`, `status`, `category` (category, product), `search`, `flags`, `pagination` |
| **OvhCloud Hosting Web** | List Tasks               | `GET /hosting/web/{serviceName}/tasks`       | `search` (function), `status` (value)                                                  |
| **OvhCloud Domain**      | List Tasks (domain name) | `GET /domain/name/{domainName}/task`         | `search` (function), `status` (value), `type` (value)                                  |
| **OvhCloud CDN**         | SSL Tasks List           | `GET /cdn/dedicated/{serviceName}/ssl/tasks` | `function` (value), `status` (value)                                                   |
| **OvhCloud IP**          | Firewall Rule List       | `GET /ip/{ip}/firewall/{ipOnFirewall}/rule`  | `state` (creationPending, ok, removalPending)                                          |
| **OvhCloud VPS**         | List                     | `GET /vps`                                   | `iamTags` (json)                                                                       |
| **OvhCloud IAM**         | Policy List              | `GET /iam/policy`                            | `action`, `identity`, `resourceURN` (delimiter), `readOnly`, `details` (tri-state)     |

## Test conformance

The file `tests/filter-conformance.test.ts` verifies that every filter definition's `queryParam` exists in the corresponding OVHcloud OpenAPI spec (`docs/api-specs/v1/*.json`) as a non-required query parameter, and that enum options are a subset of (and cover all values in) the spec's model enum. This acts as a regression guard: if the API adds or removes a query parameter, the spec file will be updated and the tests will catch any drift between filter definitions and the spec.

Unit tests for the filter utilities themselves live in `shared/nodes/filters.spec.ts`, covering `filtersCollection()`, `buildFilterQuery()`, and `isEmptyFilterValue()`.
