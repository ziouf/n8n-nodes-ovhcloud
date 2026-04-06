# V2 Backup Services Resource

## API Documentation

- **API Spec**: https://eu.api.ovh.com/v2/backupServices.json
- **Base Path**: /v2/backupServices

## Implementation Pattern

This resource follows the **v2 pattern**. Each resource has a simple flat structure with `list` and `get` operations.

### Directory Structure

```
v2BackupServices/
├── AGENTS.md
├── index.ts               # Main entry: dropdown with list and get operations
├── list.operation.ts      # GET /v2/backupServices
└── get.operation.ts       # GET /v2/backupServices/{serviceName}
```

### Key Rules

1. **Simple structure**: No `resources/` subdirectory — just list and get at the root level
2. **Consistent naming**: `<verb>.operation.ts`
3. **ApiClient import**: `'../../transport/ApiClient'` (2 levels up from the resource dir)
4. **serviceName**: `resourceLocator` with modes `str` and `list` (searchListMethod: `'getV2BackupServicesServices'`)

### Code Style

- `import type { ... } from 'n8n-workflow'` for type-only imports
- Single object returns: `return [{ json: data }]`
- Array returns: `return this.helpers.returnJsonArray(data)`
- Query params: `qs` arg of `httpGet`
- Body: `{ body }` arg of `httpPost`/`httpPut`
- Empty descriptions: `// eslint-disable-next-line @typescript-eslint/no-unused-vars`
- JSDoc comments on all functions
