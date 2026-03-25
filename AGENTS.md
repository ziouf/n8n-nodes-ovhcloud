# AGENTS.md

Development guidelines for the n8n-nodes-ovhcloud repository.

## Build, Lint & Test Commands

### Available Scripts

```bash
npm run build          # Compile TypeScript to dist/
npm run build:watch    # Watch mode for TypeScript compilation
npm run dev            # Development mode with hot reload (uses n8n-node dev)
npm run lint           # Run ESLint using @n8n/node-cli config
npm run lint:fix       # Run ESLint with auto-fix
npm run release        # Release new version (uses release-it)
npm run prepublishOnly # Pre-release preparation
```

### Build Process

- TypeScript compiles from `credentials/` and `nodes/` to `dist/`
- Uses `@n8n/node-cli` for n8n-specific build operations
- Declaration maps and source maps generated for debugging
- Incremental compilation enabled for faster rebuilds

### Testing

- No automated test framework configured
- Manual testing required via n8n instance
- Test directory exists but is empty
- For single file testing: run `npm run dev` and test in n8n UI

## Code Style Guidelines

### Formatting (Prettier)

- **Tabs**: 2 spaces width, use tabs for indentation (`useTabs: true`)
- **Semicolons**: Required (`semi: true`)
- **Trailing commas**: Always (`trailingComma: 'all'`)
- **Quotes**: Single quotes preferred (`singleQuote: true`)
- **Print width**: 100 characters
- **End of line**: LF (`endOfLine: 'lf'`)
- **Bracket spacing**: Enabled (`bracketSpacing: true`)
- **Arrow parens**: Always (`arrowParens: 'always'`)
- **Quote props**: As needed (`quoteProps: 'as-needed'`)

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
  - `forceConsistentCasingInFileNames`: true
  - `skipLibCheck`: true
  - `declaration`: true (generates .d.ts files)
  - `sourceMap`: true

### Imports

- Use TypeScript `type` imports for type-only imports: `import type { X } from 'y'`
- Named imports preferred over default imports
- Group imports: n8n-workflow first, then local modules
- Local imports use relative paths (`.ts` extension not required in source)
- Import order: external packages, n8n-workflow, local modules

### Naming Conventions

- **Classes**: PascalCase (e.g., `OvhCloudApi`, `OvhCloudApiClient`)
- **Functions**: camelCase (e.g., `executeList`, `getServices`)
- **Constants**: camelCase with descriptive names (e.g., `OvhCloudApiSecretName`)
- **Variables**: camelCase (e.g., `responseData`, `serviceId`)
- **Type aliases**: PascalCase with type suffix when helpful (e.g., `OvhCredentialsType`)
- **Node properties**: camelCase (e.g., `svcOperation`, `svcType`)
- **Files**: PascalCase for classes, camelCase for utilities

### File Structure

```
credentials/          # Credential type definitions
nodes/               # Node implementations
  OvhCloud/          # Main node directory
    OvhCloud.node.ts # Main node entry point
    resources/       # Resource operation definitions
    shared/          # Shared utilities (API client)
dist/                # Compiled output
tests/               # Test files (currently empty)
```

Each resource file exports: `description`, `execute`, `methodsListSearch`

### Error Handling

- Use `NodeApiError` for n8n-specific errors
- Throw descriptive error messages with context
- Validate inputs before API calls
- Handle API errors gracefully with meaningful messages
- Catch blocks use `unknown` type (disabled `useUnknownInCatchVariables`)

### Type Safety

- Define explicit types for all parameters and returns
- Use TypeScript type guards where appropriate
- Prefer interfaces/types over `any`
- Use `IDataObject` for n8n data structures
- Leverage strict null checks

### API Client Pattern

- Use `OvhCloudApiClient` wrapper for HTTP requests
- Authentication handled via `OvhCloudApi` credential type
- Sign requests with OVH signature algorithm (SHA1)
- HTTP methods: `httpGet`, `httpPost`, `httpPut`, `httpDelete`
- Credentials provide: `host`, `applicationKey`, `applicationSecret`, `consumerKey`

### Node Definition Pattern

- Resources defined as separate files in `nodes/OvhCloud/resources/`
- Operations use switch statements in `execute()` functions
- Dynamic options via `listSearch` methods
- Use `displayOptions` for conditional property visibility
- Follow n8n node schema conventions
- Node versioned via `n8nNodesApiVersion` in package.json

### Comments & Documentation

- JSDoc comments for public APIs
- Inline comments for complex logic
- TODO comments for future enhancements
- Keep comments concise and actionable
- Reference Prettier docs for formatting rules

## Git Workflow

- Feature branches: `git checkout -b feature/feature-name`
- Commits: Conventional Commits format (`feat:`, `fix:`, `chore:`, etc.)
- No direct push to main; use pull requests
- No rebasing with `-i` flag (interactive rebase not supported)
- Avoid force push to main/master
- Only amend commits if: (1) explicitly requested, (2) commit created by you, (3) not pushed

## Dependencies

- **Peer**: `n8n-workflow`
- **Dev**: `@n8n/node-cli`, `eslint` (9.32.0), `prettier` (3.6.2), `typescript` (5.9.2), `release-it`
- **Runtime**: `luxon` (for date handling)

## n8n Node Specifics

- Package type: `n8n-nodes-base` compatible
- Credentials defined in `package.json` under `n8n.credentials`
- Nodes defined in `package.json` under `n8n.nodes`
- Use `@n8n/node-cli` for all build operations
- Node icons stored in `icons/` directory

## Notes

- Follow existing code patterns in resource files
- Use existing `OvhCloudApiClient` for all API calls
- Credential authentication via `OVH API` credential type
- No Cursor or Copilot rules configured
- Manual testing in n8n instance required
