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

## Common Error Scenarios

| Error Type               | Cause                                           | Resolution                                                                                  |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Authentication Error** | Invalid or expired credentials                  | Verify `applicationKey`, `applicationSecret`, and `consumerKey` are correct and not expired |
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

- Implement **exponential backoff** for rate limit (`429`) and server error (`500`, `503`) responses.
- Use n8n's built-in retry mechanisms where applicable.
- For asynchronous operations that return a task object, poll the task status until completion (`done` or `error`) rather than retrying the operation itself.

## Handling Asynchronous Tasks

Many OVHcloud operations return an asynchronous task object. To track task completion:

1. Capture the task `id` from the response.
2. Use a **Wait** node or polling loop in your n8n workflow.
3. Periodically query the task status using the task ID.
4. Proceed when the task `state` is `done` or `error`.
