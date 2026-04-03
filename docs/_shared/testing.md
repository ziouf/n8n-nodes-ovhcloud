# Testing

## Manual Testing in n8n

There is no automated test framework configured for this project. All testing must be performed manually via an n8n instance.

### Steps

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Start development mode** (with hot reload):

   ```bash
   npm run dev
   ```

3. **Open the n8n UI** and create a workflow that uses the OVHcloud node.

4. **Configure credentials** using the **OVH API** credential type with valid Application Key, Application Secret, and Consumer Key.

5. **Test each operation** with both valid and invalid parameters to verify:
   - Correct API calls are made
   - Response data is properly parsed
   - Error handling works as expected

## Credential Test Button

Use the **Test Credential** button in the n8n credential configuration UI to verify that your OVH API credentials are valid before running workflows.

## Debug Node

Use the **Debug** node in n8n to inspect the raw request and response data:

- Check the request URL, method, and headers
- Verify the request body structure
- Inspect the full API response for debugging

## Testing Checklist

- [ ] Authentication works with valid credentials
- [ ] Authentication fails gracefully with invalid credentials
- [ ] Each operation returns the expected response type
- [ ] Required parameters are validated before API calls
- [ ] Optional parameters work correctly when omitted
- [ ] Error messages are descriptive and actionable
- [ ] Asynchronous tasks return task IDs that can be polled
- [ ] IAM permissions are correctly enforced

## Linting

Run the linter to catch code style and potential issues:

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix fixable issues
```
