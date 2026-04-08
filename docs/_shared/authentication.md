# Authentication

All OVHcloud API operations require authentication via the **OVH API** credential type.

## Required Credentials

| Credential             | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| **Host**               | The OVHcloud API host (e.g., `api.ovh.com`)             |
| **Application Key**    | Your OVHcloud application key                           |
| **Application Secret** | Your OVHcloud application secret                        |
| **Consumer Key**       | Your OVHcloud consumer key (grants access to resources) |

## How It Works

- Credentials are used to sign requests using the **OVH signature algorithm (SHA1)**.
- All requests are authenticated by including the signed headers generated from these credentials.
- The `OvhCloudApiClient` wrapper handles signing automatically — you do not need to compute signatures manually.

## Obtaining Credentials

1. Create an OVHcloud API application at [https://eu.api.ovh.com/createApp/](https://eu.api.ovh.com/createApp/) to obtain your **Application Key** and **Application Secret**.
2. Generate a **Consumer Key** with the required access rules at [https://eu.api.ovh.com/auth/](https://eu.api.ovh.com/auth/).
3. Configure these credentials in n8n under the **OVH API** credential type.

## IAM Actions

Each operation requires specific IAM permissions. These are listed in the **IAM Actions** section for each operation. Ensure your API credentials have the necessary scopes before executing operations.

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/en/public-api/managing-consumer-key/)
- [Managing Consumer Keys](https://docs.ovh.com/en/public-api/managing-consumer-key/)
