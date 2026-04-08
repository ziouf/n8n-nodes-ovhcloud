# Type Safety

This project enforces strict type safety through TypeScript and n8n's type system.

## TypeScript Strict Mode

The project is configured with strict TypeScript compiler options:

- **`strict: true`** — Enables all strict type-checking options.
- **`noImplicitAny: true`** — Errors on expressions and declarations with an implied `any` type.
- **`noImplicitReturns: true`** — Reports an error when not all code paths in a function return a value.
- **`strictNullChecks: true`** — Ensures `null` and `undefined` are handled explicitly.
- **`noUnusedLocals: true`** — Reports errors on unused local variables.
- **`useUnknownInCatchVariables: false`** — Catch clause variables are typed as `unknown` but disabled for compatibility.

## IDataObject Usage

All n8n data structures should use **`IDataObject`** from `n8n-workflow` for dynamic data:

```typescript
import type { IDataObject } from 'n8n-workflow';

const responseData: IDataObject = {
    serviceName: 'vps123456.ovh.net',
    state: 'running',
};
```

## Explicit Type Definitions

- Define explicit **interfaces** and **type aliases** for all request and response bodies.
- Use **TypeScript type guards** to validate data types before processing.
- Prefer `interface` for object shapes and `type` for unions/enums.
- Avoid `any` — use `unknown` when the type is genuinely not known at compile time.

### Example

```typescript
interface VpsTask {
    id: number;
    date: string;
    state: 'todo' | 'doing' | 'done' | 'error' | 'cancelled';
    progress: number;
    type: string;
}

function isVpsTask(data: unknown): data is VpsTask {
    return (
        typeof data === 'object' &&
        data !== null &&
        'id' in data &&
        'state' in data &&
        typeof (data as VpsTask).id === 'number'
    );
}
```

## Best Practices

- **Type imports**: Use `import type { X } from 'y'` for type-only imports.
- **Explicit returns**: Always annotate function return types.
- **Null safety**: Use optional chaining (`?.`) and nullish coalescing (`??`) to handle potentially null values.
- **Enums**: Use TypeScript `enum` or union types for fixed sets of values (e.g., status codes, state values).
