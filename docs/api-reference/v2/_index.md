# OVHcloud API Endpoints - v2

This document lists all available API endpoints for OVHcloud services in the **v2** API version. Each endpoint supports both **JSON** and **YAML** formats for requests and responses.

## Base Path

All endpoints in this API version are prefixed with the following base path:

```
https://eu.api.ovh.com/v2
```

## Available Endpoints

| **Endpoint**          | **Path**               | **Description**                     |
| --------------------- | ---------------------- | ----------------------------------- |
| Backup Services       | `/backupServices`      | Backup services management          |
| Commercial Catalog    | `/commercialCatalog`   | Commercial catalog and pricing      |
| Domain                | `/domain`              | Domain management (v2)              |
| IAM                   | `/iam`                 | Identity and Access Management      |
| Location              | `/location`            | Datacenter location information     |
| Managed CMS           | `/managedCMS`          | Managed CMS services                |
| Network Defense       | `/networkDefense`      | Network defense and anti-DDoS       |
| Notification          | `/notification`        | Notification management             |
| OKMS                  | `/okms`                | OVH Key Management Service          |
| Public Cloud          | `/publicCloud`         | Public Cloud projects and resources |
| VMware Cloud Director | `/vmwareCloudDirector` | VMware Cloud Director               |
| vRack Services        | `/vrackServices`       | vRack Services                      |
| Web Hosting           | `/webhosting`          | Web hosting management              |
| Zimbra                | `/zimbra`              | Zimbra email services               |

---

## Notes

- **Endpoint Paths**: Each path is relative to the base path (`https://eu.api.ovh.com/v2`).
- **Formats**: All endpoints support both `json` and `yaml` formats.
- **Authentication**: Ensure you have valid OVHcloud API credentials configured before making requests to these endpoints.
- **Region**: The base path indicates the **EU** region. For other regions, check the OVHcloud API documentation.

## Usage Examples

### Example 1: Using JSON Format

```bash
curl -X GET "https://eu.api.ovh.com/v2/publicCloud.json" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE"
```

### Example 2: Using YAML Format

```bash
curl -X GET "https://eu.api.ovh.com/v2/domain.yaml" \
  -H "Accept: application/yaml" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE"
```

### Example 3: Making a POST Request in JSON Format

```bash
curl -X POST "https://eu.api.ovh.com/v2/iam.json" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE" \
  -d '{"action": "create", "resource": "/publicCloud/project123"}'
```

## Security Considerations

- **Authentication**: Always use valid credentials (`X-OVH-API-KEY`, `X-OVH-Application`, `X-OVH-Signature`) when making requests to OVHcloud APIs.
- **HTTPS**: Ensure all requests are made over HTTPS to encrypt data in transit.
- **Signature**: The `X-OVH-Signature` header must be generated using the OVHcloud signature algorithm (SHA1).
- **Rate Limiting**: Be aware of OVHcloud API rate limits to avoid being blocked.
- **Data Sensitivity**: Do not expose sensitive data (e.g., credentials, personal information) in logs or documentation.

## Error Handling

- **HTTP Status Codes**: Refer to the OVHcloud API documentation for specific status codes and their meanings.
- **Error Messages**: Ensure error messages are descriptive and include context for troubleshooting.
- **Retry Logic**: Implement retry logic for transient errors (e.g., rate limiting, server timeouts).

## API Client Pattern

- **Base URL**: Use `https://eu.api.ovh.com/v2` as the base URL for API requests.
- **Headers**: Include the required headers (`X-OVH-API-KEY`, `X-OVH-Application`, `X-OVH-Signature`) in every request.
- **Format Selection**: Choose the appropriate format (`json` or `yaml`) based on your application's needs or API requirements.

## Testing

- **Manual Testing**: Since no automated test framework is configured, test endpoints manually using an n8n instance or direct API calls.
- **n8n Development Mode**: For testing individual endpoints, use `npm run dev` and verify behavior in the n8n UI.

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n Node Development Guidelines](./AGENTS.md)
- [OVHcloud API Authentication Guide](https://docs.ovh.com/gb/en/api/general-api/api-overview/)

---

*Last updated: April 3, 2026*

*Generated from: `api_docs/v2/_index.json`*
