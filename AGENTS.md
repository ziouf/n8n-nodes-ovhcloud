# AGENTS.md

Development guidelines for the n8n-nodes-ovhcloud repository.

## Build, Lint & Test Commands

### Available Scripts

```bash
npm run build          # Compile TypeScript to dist/
npm run build:watch    # Watch mode for TypeScript compilation
npm run dev           # Development mode with hot reload
npm run lint          # Run ESLint (uses @n8n/node-cli config)
npm run lint:fix      # Run ESLint with auto-fix
npm run release       # Release new version
npm run prepublishOnly # Pre-release preparation
```

### Build Process

- TypeScript compiles from `credentials/` and `nodes/` to `dist/`
- Uses `@n8n/node-cli` for n8n-specific build operations
- No separate test framework configured; manual testing via n8n instance required

## Code Style Guidelines

### Formatting (Prettier)

- **Tabs**: 2 spaces width, use tabs for indentation
- **Semicolons**: Required (`semi: true`)
- **Trailing commas**: Always (`trailingComma: 'all'`)
- **Quotes**: Single quotes preferred (`singleQuote: true`)
- **Print width**: 100 characters
- **End of line**: LF (`endOfLine: 'lf'`)

### TypeScript Configuration

- **Target**: ES2019 with ES2020/ES2022 error support
- **Module**: CommonJS
- **Strict mode**: Enabled (`strict: true`)
- **Key compiler options**:
  - `noImplicitAny`: true
  - `noImplicitReturns`: true
  - `noUnusedLocals`: true
  - `strictNullChecks`: true
  - `useUnknownInCatchVariables`: false
  - `esModuleInterop`: true

### Imports

- Use TypeScript `type` imports for type-only imports: `import type { X } from 'y'`
- Named imports preferred over default imports
- Group imports: n8n-workflow first, then local modules
- Local imports use relative paths with explicit extensions

### Naming Conventions

- **Classes**: PascalCase (e.g., `OvhCloudApi`, `OvhCloudApiClient`)
- **Functions**: camelCase (e.g., `executeList`, `getServices`)
- **Constants**: camelCase with descriptive names (e.g., `OvhCloudApiSecretName`)
- **Variables**: camelCase (e.g., `responseData`, `serviceId`)
- **Type aliases**: PascalCase with type suffix when helpful (e.g., `OvhCredentialsType`)
- **Node properties**: camelCase (e.g., `svcOperation`, `svcType`)

### File Structure

- **credentials/**: Credential type definitions
- **nodes/**: Node implementations
  - `OvhCloud.node.ts`: Main node entry point
  - `resources/*.ts`: Resource operation definitions
  - `shared/*.ts`: Shared utilities (e.g., API client)
- Each resource file exports: `description`, `execute`, `methodsListSearch`

### Error Handling

- Use `NodeApiError` for n8n-specific errors
- Throw descriptive error messages with context
- Validate inputs before API calls
- Handle API errors gracefully with meaningful messages

### Type Safety

- Define explicit types for all parameters and returns
- Use TypeScript type guards where appropriate
- Prefer interfaces/types over `any`
- Use `IDataObject` for n8n data structures

### API Client Pattern

- Use `OvhCloudApiClient` wrapper for HTTP requests
- Authentication handled via `OvhCloudApi` credential type
- Sign requests with OVH signature algorithm (SHA1)
- HTTP methods: `httpGet`, `httpPost`, `httpPut`, `httpDelete`

### Node Definition Pattern

- Resources defined as separate files in `resources/`
- Operations use switch statements in `execute()` functions
- Dynamic options via `listSearch` methods
- Use `displayOptions` for conditional property visibility
- Follow n8n node schema conventions

### Comments & Documentation

- JSDoc comments for public APIs
- Inline comments for complex logic
- TODO comments for future enhancements
- Keep comments concise and actionable

## Git Workflow

- Feature branches: `git checkout -b feature/feature-name`
- Commits: Conventional Commits format (`feat:`, `fix:`, etc.)
- No direct push to main; use pull requests

## Dependencies

- **Peer**: `n8n-workflow`
- **Dev**: `@n8n/node-cli`, `eslint`, `prettier`, `typescript`
- **Runtime**: `luxon` (for date handling)

## Notes

- No test suite configured; test manually in n8n instance
- Follow existing code patterns in resource files
- Use existing `OvhCloudApiClient` for all API calls
- Credential authentication via `OVH API` credential type
