# Error Handling

## Common HTTP Status Codes

| Status Code | Meaning               | Description                                     |
| ----------- | --------------------- | ----------------------------------------------- |
| `400`       | Bad Request           | Missing or invalid parameters                   |
| `401`       | Unauthorized          | Missing or invalid OVH Cloud API credentials    |
| `403`       | Forbidden             | User lacks the required IAM permissions         |
| `404`       | Not Found             | Resource or endpoint does not exist             |
| `409`       | Conflict              | Operation conflicts with current resource state |
| `429`       | Too Many Requests     | Rate limit exceeded                             |
| `500`       | Internal Server Error | Unexpected server-side error                    |
| `503`       | Service Unavailable   | API is temporarily unavailable                  |

## n8n Error Handling

- Use **`NodeApiError`** for n8n-specific errors when calling the OVHcloud API.
- Throw descriptive error messages with context (e.g., which operation failed and why).
- Validate inputs before making API calls to avoid unnecessary errors.
- Handle API errors gracefully and provide meaningful error messages to users.
- **Destructive operations** (terminate, reinstall, reboot) display a yellow warning notice in the node UI via the shared `destructiveActionNotice()` helper, alerting users before irreversible actions.
- **Concurrent execution mode** (`executeTemplate` with `concurrency > 1`): when `continueOnFail` is disabled, the first fatal error throws a unified `NodeApiError` and stops all new items from starting. Workers already in flight are awaited before the error is thrown, so no in-flight requests are left orphaned.

## Common Error Scenarios

| Error Type               | Cause                                           | Resolution                                                                                  |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Authentication Error** | Invalid or expired credentials                  | Verify `applicationKey`, `applicationSecret`, and `consumerKey` are correct and not expired |
| **Invalid Endpoint**     | Endpoint not in the OVH allow-list              | Use one of the seven supported OVH endpoints (see Security Considerations)                  |
| **Permission Denied**    | Missing IAM action for the requested operation  | Ensure API credentials have the required IAM scopes                                         |
| **Resource Not Found**   | The specified resource does not exist           | Verify the resource identifier is correct and belongs to the expected service               |
| **Validation Error**     | Missing or invalid required parameters          | Check the operation's parameter table for required fields                                   |
| **Conflict**             | Operation conflicts with current resource state | Check resource state before performing state-changing operations                            |
| **Rate Limit**           | Too many API requests in a short period         | Implement delays between operations or use n8n's built-in rate limiting                     |

## Error Messages

Examples of common error messages:

- **Authentication Errors**:

  ```
  "Error: Missing applicationKey"
  ```

- **Permission Errors**:

  ```
  "Error: User lacks permission 'account:apiovh:iam/policy/get'"
  ```

## Retry Logic Recommendations

- **Transient Retry**: All HTTP verbs (GET, POST, PUT, DELETE) now include an automatic retry mechanism by default for transient errors (e.g., 429 rate limits, 5xx server errors, network failures). 4xx client errors are never retried.
- **Jitter**: A jitter algorithm is applied to retry delays to prevent request collisions.
- **`continueOnFail`**: In case of an error during a batch operation, the `continueOnFail` parameter ensures that the current input item is preserved in the output to facilitate debugging and subsequent manual processing.
- **Automatic resource/operation enrichment**: When a node configures `{ errorContext: { resource: '…', operationParam: '…' } }` on `executeTemplate`, every error is automatically prefixed with `resource/operation: <original message>`. This makes it trivial to identify which OVH Cloud resource and which operation failed — even in batch or concurrent execution. If the caught error is already a `NodeApiError`, it is passed through unchanged (no double-wrapping).
- **Per-item concurrency classes**: Nodes using `perItemConcurrency` classify each item into one of three classes (`read`, `write`, `destructive`) and manage concurrency per-class: read operations run up to 3 in parallel, while write and destructive operations are limited to 1 in flight. This prevents race conditions on state-mutating operations while maximising throughput for read-only ones. Classification is heuristic-based (keyword matching on the operation string); unknown operations default to `'write'`. If the classify function throws, the item falls back to `'write'` classification. When both `perItemConcurrency` and `concurrency` are provided, `perItemConcurrency` takes precedence.
- For asynchronous operations that return a task object, continue to poll the task status until completion (`done` or `error`) rather than retrying the operation itself.

## Handling Asynchronous Tasks

Many OVHcloud operations return an asynchronous task object. To track task completion:

1. Capture the task `id` from the response.
2. Use a **Wait** node or polling loop in your n8n workflow.
3. Periodically query the task status using the task ID.
4. Proceed when the task `state` is `done` or `error`.
