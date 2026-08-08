# Dynamic List Search Methods (factory)

All dynamic dropdowns (`searchListMethod` / `resourceLocator`) are built on a single
factory in `shared/methods/listSearch.ts`, avoiding duplication across the 30+ per-node
loader files.

## `createServiceListSearch(route)`

Returns an n8n-compatible list-search loader for a fixed OVH API route. Each returned
id is normalized to a string and mapped to `{ name, value }`. It supports pagination with
`maxItems` and `query` parameters, and automatically maps each result to an object.

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

`type ListSearchLoader = (this: ILoadOptionsFunctions) => Promise<INodeListSearchResult>`
