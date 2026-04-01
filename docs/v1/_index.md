# OVHcloud API Endpoints - v1

This document lists all available API endpoints for OVHcloud services in the **v1** API version. Each endpoint supports both **JSON** and **YAML** formats for requests and responses.

## Base Path

All endpoints in this API version are prefixed with the following base path:

```
https://eu.api.ovh.com/v1
```

## Available Endpoints

| **Endpoint Path**                 | **Supported Formats** | **Description** |
| --------------------------------- | --------------------- | --------------- |
| `/allDom`                         | `json`, `yaml`        |                 |
| `/auth`                           | `json`, `yaml`        |                 |
| `/cdn/dedicated`                  | `json`, `yaml`        |                 |
| `/cloud`                          | `json`, `yaml`        |                 |
| `/cluster/hadoop`                 | `json`, `yaml`        |                 |
| `/connectivity`                   | `json`, `yaml`        |                 |
| `/contact`                        | `json`, `yaml`        |                 |
| `/dbaas/logs`                     | `json`, `yaml`        |                 |
| `/dedicated/ceph`                 | `json`, `yaml`        |                 |
| `/dedicated/cluster`              | `json`, `yaml`        |                 |
| `/dedicated/housing`              | `json`, `yaml`        |                 |
| `/dedicated/installationTemplate` | `json`, `yaml`        |                 |
| `/dedicated/nasha`                | `json`, `yaml`        |                 |
| `/dedicated/server`               | `json`, `yaml`        |                 |
| `/dedicatedCloud`                 | `json`, `yaml`        |                 |
| `/domain`                         | `json`, `yaml`        |                 |
| `/email/domain`                   | `json`, `yaml`        |                 |
| `/email/exchange`                 | `json`, `yaml`        |                 |
| `/email/mxplan`                   | `json`, `yaml`        |                 |
| `/email/pro`                      | `json`, `yaml`        |                 |
| `/freefax`                        | `json`, `yaml`        |                 |
| `/horizonView`                    | `json`, `yaml`        |                 |
| `/hosting/privateDatabase`        | `json`, `yaml`        |                 |
| `/hosting/web`                    | `json`, `yaml`        |                 |
| `/ip`                             | `json`, `yaml`        |                 |
| `/ipLoadbalancing`                | `json`, `yaml`        |                 |
| `/license/cloudLinux`             | `json`, `yaml`        |                 |
| `/license/cpanel`                 | `json`, `yaml`        |                 |
| `/license/directadmin`            | `json`, `yaml`        |                 |
| `/license/hycu`                   | `json`, `yaml`        |                 |
| `/license/office`                 | `json`, `yaml`        |                 |
| `/license/officePrepaid`          | `json`, `yaml`        |                 |
| `/license/plesk`                  | `json`, `yaml`        |                 |
| `/license/redhat`                 | `json`, `yaml`        |                 |
| `/license/sqlserver`              | `json`, `yaml`        |                 |
| `/license/virtuozzo`              | `json`, `yaml`        |                 |
| `/license/windows`                | `json`, `yaml`        |                 |
| `/license/worklight`              | `json`, `yaml`        |                 |
| `/me`                             | `json`, `yaml`        |                 |
| `/metrics`                        | `json`, `yaml`        |                 |
| `/msServices`                     | `json`, `yaml`        |                 |
| `/newAccount`                     | `json`, `yaml`        |                 |
| `/nutanix`                        | `json`, `yaml`        |                 |
| `/order`                          | `json`, `yaml`        |                 |
| `/overTheBox`                     | `json`, `yaml`        |                 |
| `/ovhCloudConnect`                | `json`, `yaml`        |                 |
| `/pack/siptrunk`                  | `json`, `yaml`        |                 |
| `/pack/xdsl`                      | `json`, `yaml`        |                 |
| `/partner`                        | `json`, `yaml`        |                 |
| `/price`                          | `json`, `yaml`        |                 |
| `/saas/csp2`                      | `json`, `yaml`        |                 |
| `/secret`                         | `json`, `yaml`        |                 |
| `/service`                        | `json`, `yaml`        |                 |
| `/services`                       | `json`, `yaml`        |                 |
| `/sms`                            | `json`, `yaml`        |                 |
| `/ssl`                            | `json`, `yaml`        |                 |
| `/sslGateway`                     | `json`, `yaml`        |                 |
| `/stack/mis`                      | `json`, `yaml`        |                 |
| `/startup`                        | `json`, `yaml`        |                 |
| `/storage`                        | `json`, `yaml`        |                 |
| `/supply/mondialRelay`            | `json`, `yaml`        |                 |
| `/support`                        | `json`, `yaml`        |                 |
| `/telephony`                      | `json`, `yaml`        |                 |
| `/veeam/veeamEnterprise`          | `json`, `yaml`        |                 |
| `/veeamCloudConnect`              | `json`, `yaml`        |                 |
| `/vip`                            | `json`, `yaml`        |                 |
| `/vps`                            | `json`, `yaml`        |                 |
| `/vrack`                          | `json`, `yaml`        |                 |
| `/xdsl`                           | `json`, `yaml`        |                 |

---

## Notes

- **Endpoint Paths**: Each path is relative to the base path (`https://eu.api.ovh.com/v1`).
- **Formats**: All endpoints support both `json` and `yaml` formats.
- **Authentication**: Ensure you have valid OVHcloud API credentials configured before making requests to these endpoints.
- **Region**: The base path indicates the **EU** region. For other regions, check the OVHcloud API documentation.

## Usage Examples

### Example 1: Using JSON Format

```bash
curl -X GET "https://eu.api.ovh.com/v1/cloud" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE"
```

### Example 2: Using YAML Format

```bash
curl -X GET "https://eu.api.ovh.com/v1/domain" \
  -H "Accept: application/yaml" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE"
```

### Example 3: Making a POST Request in JSON Format

```bash
curl -X POST "https://eu.api.ovh.com/v1/order" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-KEY: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $SIGNATURE" \
  -d '{"orderId": "123456"}'
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

- **Base URL**: Use `https://eu.api.ovh.com/v1` as the base URL for API requests.
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

*Last updated: March 31, 2026*

*Generated from: `/workspaces/n8n-nodes-ovhcloud/api_docs/v1/_index.json`*
