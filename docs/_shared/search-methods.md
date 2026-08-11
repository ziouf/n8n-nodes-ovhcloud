# Dynamic List Search Methods (factory)

All dynamic dropdowns (`searchListMethod` / `resourceLocator`) are built on a single
factory in `shared/methods/listSearch.ts`, avoiding duplication across the 30+ per-node
loader files.

## `createServiceListSearch(route)`

Returns an n8n-compatible list-search loader for a fixed OVH API route. Each returned
id is normalized to a string and mapped to `{ name, value }`. It supports cursor-based
pagination with `maxItems` and automatically maps each result to an object.

```typescript
import { createServiceListSearch } from './listSearch';

export const getVpsServices = createServiceListSearch('/vps');
```

## `createProjectScopedServiceListSearch(buildRoute, paramName?)`

For routes that depend on a parent parameter (e.g. `/publicCloud/project/{projectId}/...`).
The project id is resolved from the `publicCloudProjectId` node parameter, supporting both
the plain string form and the `{ mode, value }` resourceLocator form. This factory
supports `projectIdLocator` and `serviceNameLocator` patterns for dynamic scoping.

```typescript
export const getPublicCloudBlockStorageVolumes = createProjectScopedServiceListSearch(
    (projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
);
```

## `resolveProjectId(ctx, paramName?)`

Resolves a project id node parameter, throwing a descriptive error when it is neither a
non-empty string nor an object carrying a string `value`.

## `ListSearchLoader`

```typescript
type ListSearchLoader = (
    this: ILoadOptionsFunctions,
    filter?: string,
    paginationToken?: string,
) => Promise<INodeListSearchResult>;
```

n8n calls the loader with:

- **`filter`** — the text the user typed in the dropdown (if the user is still typing,
  this is the current search term).
- **`paginationToken`** — a cursor returned by a previous call, telling n8n to fetch the
  next page of results.

When n8n pages in the dropdown, it passes back the `paginationToken` string from the
previous result. The loader must interpret this token and return the next page.

## Real Offset-Based `paginationToken` Cursor

The cursor is a simple offset string: `String(nextOffset)`.

### First page (no `paginationToken` arg)

1. Fetches `maxItems + 1` items from the API (offset 0) to detect truncation.
2. Pops the probe item if present.
3. If truncated (exactly `maxItems + 1` returned), returns `paginationToken: String(maxItems)`
   as a real cursor pointing to the next page.
4. If not truncated (fewer than `maxItems + 1` items), returns no `paginationToken`.

### Subsequent pages (`paginationToken` arg provided)

1. Parses the token as an integer offset (`parseInt(token, 10)`; `NaN` → 0).
2. Fetches exactly `maxItems` items at that offset (no probe).
3. Returns `paginationToken: String(offset + items.length)` **only** when the page was
   full (`items.length === maxItems`). Otherwise no token is returned (end of results).

### n8n round-trip contract

```
User types "vps" → loader returns { results: [...5 items], paginationToken: "5" }
User scrolls → n8n calls loader(filter="vps", paginationToken="5")
Loader fetches offset 5 → returns { results: [...5 items], paginationToken: "10" }
User scrolls → n8n calls loader(filter="vps", paginationToken="10")
Loader fetches offset 10 → returns { results: [...2 items] }  ← no token = last page
```

### Cache keyed per `(scope, route, offset)`

The TTL cache stores raw API data keyed by `${scope}|${route}|${offset}`. Each offset
page is cached independently. The same `(scope, route, offset)` combination returns a
cache hit without hitting the API.

### Filter + cursor is best-effort

Client-side filtering is applied **per-page**. When the user paginates, the filter text
is applied to the raw items returned at that offset. This means:

- The cursor represents an offset into the **unfiltered** API results.
- If the user changes the filter text while paginating, the cursor still points to the
  same API offset but the client-side filter is re-applied to those items.
- Results may appear "gappy" if the filter excludes items at certain offsets — this is
  inherent to offset-based pagination with client-side filtering.

## Client-side Sorting

Results returned by `buildListSearchResults` (and therefore by all loaders built on it)
are **sorted alphabetically** before the client-side filter is applied. Sorting uses
`String.prototype.localeCompare` with `sensitivity: 'base'`, giving case-insensitive,
locale-aware ordering.

### Configuration

The `sort` and `sortKey` options on `ListSearchOptions` control this behaviour:

| Option    | Default  | Description                                                    |
| --------- | -------- | -------------------------------------------------------------- |
| `sort`    | `true`   | Enable (true) or disable (false) client-side sorting           |
| `sortKey` | `'name'` | Property to sort on — `'name'` (display) or `'value'` (raw id) |

```typescript
// Default: sort by display name (case-insensitive)
const getVps = createServiceListSearch('/vps');

// Disable sorting (preserves API order)
const getUnsorted = createServiceListSearch('/vps', { sort: false });

// Sort by the raw id instead of the display name
const getByValue = createServiceListSearch('/support/tickets', {
    map: (id) => `Ticket #${id}`,
    sortKey: 'value',
});
```

### Sorting order

- Sorting is applied **before** client-side filtering so the filtered subset remains
  in sorted order.
- When `sortKey` is `'name'`, items are sorted by their mapped display name (e.g.
  `"Ticket #12"`). When `sortKey` is `'value'`, items are sorted by their raw id
  (e.g. `"12"`).
- `sensitivity: 'base'` means `"VPS-1"` and `"vps-1"` compare as equal; ties are
  resolved by input order (JavaScript's sort is stable since ES2019).

## Credential-Scoped Result Cache

All list-search loaders automatically cache their results using a credential-scoped key (`endpoint \| sha256(consumerKey)[:16]`). This ensures that results from one credential never leak into another, while avoiding redundant API calls within the same credential.

### Configuration

The `ListSearchOptions` interface accepts an optional `cacheTtlMs` property:

| Value                      | Behaviour                                                         |
| -------------------------- | ----------------------------------------------------------------- |
| Omitted or positive number | Cache results for the given TTL (default: 5 minutes / 300 000 ms) |
| `0`                        | Caching is disabled — every call hits the API                     |

```typescript
// Use default 5-minute cache
const getVps = createServiceListSearch('/vps');

// Disable caching entirely
const getFreshVps = createServiceListSearch('/vps', { cacheTtlMs: 0 });

// Custom TTL (30 seconds)
const getShortCache = createServiceListSearch('/vps', { cacheTtlMs: 30_000 });
```

### Cache Invalidation

Call `clearListSearchCache()` to clear all cached entries. This is primarily useful in tests:

```typescript
import { clearListSearchCache } from './listSearch';

// In beforeEach or test cleanup
clearListSearchCache();
```
