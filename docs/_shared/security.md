# Security Considerations

## Endpoint Allow-listing

All credential endpoints are validated against a strict allow-list at construction time and on every `sign()` call. This prevents:

- **DNS rebinding / sub-domain suffix attacks**: `evil.eu.api.ovh.com` is rejected because only exact hostnames match.
- **Unexpected paths**: Only `''`, `'/'`, or paths starting with `/1.0` are accepted.
- **Port injection**: Any endpoint containing `:` (e.g. `eu.api.ovh.com:8443`) is rejected before URL parsing.

The seven allowed hosts are:

| Host                    | Region              |
| ----------------------- | ------------------- |
| `eu.api.ovh.com`        | Europe              |
| `ca.api.ovh.com`        | Canada              |
| `api.us.ovhcloud.com`   | USA                 |
| `eu.api.soyoustart.com` | Europe (SoYouStart) |
| `ca.api.soyoustart.com` | Canada (SoYouStart) |
| `eu.api.kimsufi.com`    | Europe (Kimsufi)    |
| `ca.api.kimsufi.com`    | Canada (Kimsufi)    |

## Credential-Scoped List-Search Cache Isolation

List-search results are cached per **credential scope** (`endpoint \| sha256(consumerKey)[:16]`) rather than globally. This guarantees that cached results from one credential never leak into another credential's dropdown, even when both credentials point to the same endpoint. The raw consumer key is never exposed in the scope string.

## Credential Handling

- **Never hardcode credentials**: Always use n8n's credential storage or environment variables.
- **Application Key & Secret**: Treat as sensitive data. Rotate regularly and revoke immediately if compromised.
- **Consumer Key**: This is the most sensitive credential — it grants access to OVHcloud resources. Revoke immediately if compromised.
- **Credential storage**: n8n encrypts credentials at rest. Do not export or log credential values.

## IAM Permissions & Least Privilege

- **Granular permissions**: Use specific IAM actions rather than broad wildcards (e.g., `vps:apiovh:get` instead of `vps:*`).
- **Scope consumer keys**: Limit consumer keys to only the API paths and HTTP methods required for your workflows.
- **Audit regularly**: Review which credentials have access to which resources and revoke unused credentials.
- **Separate credentials**: Use different API credentials for development, staging, and production environments.

## Data Sensitivity

- Some operations involve sensitive data (e.g., password changes, contact modifications, billing information).
- Avoid logging sensitive response fields in n8n workflows.
- Use n8n's expression syntax to mask sensitive values in workflow outputs.

## API Security

- **HTTPS only**: All OVHcloud API endpoints require HTTPS. Never use HTTP for API calls.
- **Request signing**: All requests are signed using the OVH signature algorithm (SHA1) with your Application Secret. This ensures request integrity and authenticity.
- **Rate limiting**: Respect API rate limits to avoid service disruption. Implement exponential backoff for `429` responses.

## Resource URNs (IAM v2)

- **Avoid wildcard URNs**: Use specific URNs where possible to prevent unintended access (e.g., `urn:ovh:vps:eu:123456` instead of `urn:ovh:vps:eu:*`).
- **Validate URNs**: Ensure URNs are valid and correctly formatted before making API calls.
- **Tag-based access**: Use IAM tags to organize and filter resources for more granular access control.

## Deprecated Endpoints

- Avoid using deprecated endpoints as they may pose security risks or be removed in future API versions.
- Check the deprecation status of endpoints before building workflows that depend on them.
