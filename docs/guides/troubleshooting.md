# Troubleshooting Guide

This guide helps you diagnose and resolve common issues when using the `n8n-nodes-ovhcloud` community node. It covers error codes, debugging techniques, rate limiting, and where to find additional help.

---

## Table of Contents

- [Common Errors](#common-errors)
- [Debug Tips](#debug-tips)
- [API Rate Limits](#api-rate-limits)
- [Testing Your Credentials](#testing-your-credentials)
- [Where to Find Help](#where-to-find-help)

---

## Common Errors

The following table lists the most frequent errors you may encounter, their likely causes, and recommended solutions.

| Error                         | Cause                                        | Solution                                                                                                                                                                                           |
| ----------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`401 Unauthorized`**        | Invalid or expired credentials               | Regenerate your API credentials in the OVH API Console and update them in n8n. Verify the endpoint matches your account region.                                                                    |
| **`403 Forbidden`**           | Insufficient permissions on the Consumer Key | Add the required permissions to your API application and generate a new Consumer Key. See the [Authentication Guide](./authentication-guide.md#required-permissions) for a full list.              |
| **`404 Not Found`**           | The requested service ID does not exist      | Verify the service ID is correct and that the service is active in your OVH account. Check that you are using the correct API endpoint for your region.                                            |
| **`429 Too Many Requests`**   | API rate limit exceeded                      | Add **Wait** nodes between API calls (recommended: 100ms+). Use batching to group similar operations. Implement retry logic for transient failures. See [API Rate Limits](#api-rate-limits) below. |
| **`503 Service Unavailable`** | OVH API maintenance or outage                | Retry after some time. Check the [OVH Status Page](https://status.ovhcloud.com/) for known outages or scheduled maintenance.                                                                       |

### Additional Error Scenarios

| Symptom                                     | Likely Cause                                         | Solution                                                                   |
| ------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| Node does not appear in n8n                 | Node not installed or n8n not restarted              | Reinstall the node and restart your n8n instance.                          |
| Dropdown lists are empty                    | Credentials lack `GET` permissions for that resource | Update your Consumer Key permissions and re-authorize.                     |
| Workflow executes but returns empty results | No services of that type exist in your account       | Verify the service exists in your OVH account and the endpoint is correct. |
| Signature validation errors                 | Clock skew between your server and OVH servers       | Ensure your server's system clock is synchronized (use NTP).               |

---

## Debug Tips

### 1. Enable Node Debugging

Use n8n's built-in debugging features to inspect data flowing through your workflow:

- Add a **Debug Node** (or use the node's output panel) to inspect intermediate outputs.
- Check the **Execution Data** tab in the workflow editor to see the full request and response payloads.
- Enable **n8n debug logging** by setting the `N8N_LOG_LEVEL=debug` environment variable.

### 2. Test Your Credentials

Before building complex workflows, verify your credentials work with a simple request:

1. Create a new workflow with a **Manual Trigger**.
2. Add an **OVH Cloud** node.
3. Set **Resource** to `Me` and **Operation** to `Get My Info`.
4. Execute the node.
5. If you receive your account details (email, country, currency), your credentials are valid.

If this test fails, the issue is with your credentials or endpoint -- not the workflow logic.

### 3. Check OVH API Status

Before troubleshooting further, verify that the OVH API is operational:

- Visit the [OVH Status Page](https://status.ovhcloud.com/) for real-time service status.
- Check for scheduled maintenance announcements that might affect API availability.

### 4. Review Your Permissions

If a specific operation fails with `403 Forbidden`:

1. Go to the [OVH API Console](https://api.ovh.com/console/).
2. Open your application settings.
3. Verify that the required API paths and HTTP methods are listed under **Access Rights**.
4. If permissions are missing, add them and create a new Consumer Key.
5. Update the Consumer Key in your n8n credentials.

### 5. Verify the Endpoint

Using the wrong endpoint is a common source of `401` and `404` errors. Double-check that your endpoint matches your account region:

| Endpoint                    | Region                   |
| --------------------------- | ------------------------ |
| `eu.api.ovh.com/1.0`        | OVH Europe               |
| `ca.api.ovh.com/1.0`        | OVH Canada               |
| `api.us.ovhcloud.com/1.0`   | OVH USA                  |
| `eu.api.soyoustart.com/1.0` | SoYouStart Europe        |
| `ca.api.soyoustart.com/1.0` | SoYouStart North America |
| `eu.api.kimsufi.com/1.0`    | Kimsufi Europe           |
| `ca.api.kimsufi.com/1.0`    | Kimsufi North America    |

---

## API Rate Limits

The OVHcloud API enforces rate limits to ensure fair usage. Exceeding these limits results in `429 Too Many Requests` errors.

### Understanding Rate Limits

- OVH applies rate limits per API application and per Consumer Key.
- Limits may vary depending on the endpoint and current server load.
- The API returns a `429` status code when the limit is exceeded.

### Strategies to Handle Rate Limits

#### 1. Add Wait Nodes

Insert **Wait** nodes between API calls to space out requests:

- Recommended minimum delay: **100ms** between calls.
- For bulk operations, consider delays of **500ms--1s**.

#### 2. Use Batching

Group similar operations together to reduce the total number of API calls:

- Instead of calling the API once per service, retrieve a list and process items in batches.
- Use n8n's **Split In Batches** node to control concurrency.

#### 3. Implement Retry Logic

Configure automatic retries for transient failures:

- Set the node's **Retry on Fail** option (if available).
- Use exponential backoff: start with a short delay and increase it with each retry.
- Limit the maximum number of retries to avoid infinite loops.

#### 4. Cache Results

For data that does not change frequently (e.g., service lists, account info):

- Cache the results using n8n's built-in caching or an external store.
- Set a reasonable TTL (time-to-live) based on how often the data changes.

---

## Testing Your Credentials

A quick way to validate your setup is to run a minimal workflow:

1. Create a new workflow.
2. Add a **Manual Trigger** node.
3. Add an **OVH Cloud** node with the following configuration:
   - **Resource**: `Me`
   - **Operation**: `Get My Info`
   - **Credential**: Your OVH API credentials
4. Execute the workflow.

### Expected Success Response

```json
{
    "json": {
        "email": "user@example.com",
        "country": "fr",
        "currency": "eur",
        "lang": "fr"
    }
}
```

### Expected Failure Responses

| Error Code | What It Means                                          |
| ---------- | ------------------------------------------------------ |
| `401`      | Credentials are invalid, expired, or endpoint is wrong |
| `403`      | Consumer Key lacks permission for `/me`                |
| `503`      | OVH API is temporarily unavailable                     |

---

## Where to Find Help

If you cannot resolve your issue using this guide, consult the following resources:

### OVHcloud Resources

- **[OVH Status Page](https://status.ovhcloud.com/)** -- Real-time service status and incident reports.
- **[OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/)** -- Official API reference and guides.
- **[OVH API Console](https://api.ovh.com/console/)** -- Interactive API explorer for testing endpoints.
- **[Manage OVHcloud API Tokens](https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784)** -- Official guide for token management.

### n8n Resources

- **[n8n Community Forum](https://community.n8n.io/)** -- Ask questions and share workflows with other users.
- **[n8n Documentation](https://docs.n8n.io/)** -- Comprehensive n8n platform documentation.
- **[n8n Community Nodes](https://docs.n8n.io/integrations/#community-nodes)** -- Information about community node development.

### Project Resources

- **[GitHub Repository](https://github.com/cyril-marin/n8n-nodes-ovhcloud)** -- Source code, issues, and discussions.
- **[Getting Started Guide](./getting-started.md)** -- Installation and configuration.
- **[Authentication Guide](./authentication-guide.md)** -- API credential setup and security.
- **[Examples Guide](./examples.md)** -- Ready-to-use workflow examples.

---

## Reporting Issues

When reporting a bug or requesting help, include the following information:

1. **n8n version** (e.g., `1.60.0`)
2. **Node version** (check `package.json` or the n8n Community Nodes page)
3. **Error message** (full error output from the node)
4. **Endpoint** you are using (e.g., `eu.api.ovh.com/1.0`)
5. **Resource and Operation** that failed
6. **Steps to reproduce** the issue

This information helps maintainers diagnose and resolve issues faster.
