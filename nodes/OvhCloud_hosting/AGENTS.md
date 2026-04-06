# Hosting Resource

## API Documentation

- **API Specs**:
  - https://eu.api.ovh.com/v1/hosting/privateDatabase.json
  - https://eu.api.ovh.com/v1/hosting/web.json
- **Base Path**: /hosting/privateDatabase

## Implementation Pattern

This resource follows the **dbaas pattern**. All sub-resources are organized as flat siblings under `resources/`.

### Directory Structure

```
hosting/
├── AGENTS.md
├── index.ts               # Main entry: ONE flat dropdown with ALL operations
├── list.operation.ts      # GET /hosting/privateDatabase
├── get.operation.ts       # GET /hosting/privateDatabase/{serviceName}
└── resources/
    ├── index.ts           # Namespace exports of all sub-resources
    └── {subResource}/
        ├── index.ts       # Simple re-exports ONLY
        └── *.operation.ts
```

### Key Rules

1. **Flat resources/**: All sub-resources are siblings under ONE `resources/` directory
2. **Simple re-exports**: Each sub-resource's `index.ts` uses ONLY:

   ```typescript
   export { description as descriptionXxx, execute as executeXxx } from './xxx.operation';
   ```

3. **No nested dropdowns**: One flat dropdown in the main `index.ts`
4. **Consistent naming**: `<verb>.operation.ts`
5. **ApiClient import**: `'../../../../transport/ApiClient'` (3 levels up from resources/)
6. **serviceName**: `resourceLocator` with modes `str` and `list` (searchListMethod: `'getHostingServices'`)

### Code Style

- `import type { ... } from 'n8n-workflow'` for type-only imports
- Single object returns: `return [{ json: data }]`
- Array returns: `return this.helpers.returnJsonArray(data)`
- Query params: `qs` arg of `httpGet`
- Body: `{ body }` arg of `httpPost`/`httpPut`
- Empty descriptions: `// eslint-disable-next-line @typescript-eslint/no-unused-vars`
- JSDoc comments on all functions
