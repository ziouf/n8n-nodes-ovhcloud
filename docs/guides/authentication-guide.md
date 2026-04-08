# OVH API Authentication Guide

This guide provides a comprehensive overview of authenticating with the OVHcloud API for use with the `n8n-nodes-ovhcloud` community node. You will learn how to create an API application, generate credentials, configure them in n8n, and follow security best practices.

---

## Table of Contents

- [How OVH API Authentication Works](#how-ovh-api-authentication-works)
- [Creating an OVH API Application](#creating-an-ovh-api-application)
- [Authorizing Your Application and Getting a Consumer Key](#authorizing-your-application-and-getting-a-consumer-key)
- [Configuring Credentials in n8n](#configuring-credentials-in-n8n)
- [Available API Endpoints](#available-api-endpoints)
- [Required Permissions](#required-permissions)
- [Security Best Practices](#security-best-practices)
- [Testing Your Credentials](#testing-your-credentials)

---

## How OVH API Authentication Works

The OVHcloud API uses a three-key authentication system based on OAuth-like signatures:

1. **Application Key** -- Identifies your application.
2. **Application Secret** -- Proves the identity of your application (never shared in requests).
3. **Consumer Key** -- Identifies the end user and their granted permissions.

Each API request is signed using the **SHA1** algorithm. The `n8n-nodes-ovhcloud` node handles request signing automatically through its `OvhCloudApiClient`, so you only need to provide the three keys -- no manual signing is required.

---

## Creating an OVH API Application

### Step-by-Step

1. Navigate to the [OVH API Console](https://api.ovh.com/console/).
2. Click **Create Application**.
3. Fill in the following fields:

   | Field                       | Guidance                                                                                       |
   | --------------------------- | ---------------------------------------------------------------------------------------------- |
   | **Application Name**        | Use a clear, descriptive name (e.g., `n8n-integration`, `n8n-automation`)                      |
   | **Application Description** | Briefly describe the purpose (e.g., "Automated infrastructure management via n8n")             |
   | **Access Rights**           | Select the permissions your workflows need (see [Required Permissions](#required-permissions)) |

4. Click **Create Application**.
5. **Immediately save** the two credentials displayed:
   - **Application Key** (alphanumeric string)
   - **Application Secret** (alphanumeric string)

> **Important**: The Application Secret is shown only once during creation. If you lose it, you must create a new application.

---

## Authorizing Your Application and Getting a Consumer Key

The Consumer Key links your application to a specific OVH account and defines what the application is allowed to do.

### Step-by-Step

1. Open your application details in the [OVH API Console](https://api.ovh.com/console/).
2. Click **Create a Consumer Key**.
3. Select the permissions you want to grant. These should match (or be a subset of) the access rights you defined for the application.
4. Click **Create**.
5. A **validation URL** is generated. Open this URL in your browser.
6. Log in to your OVH account (if not already logged in) and **authorize the request**.
7. After authorization, you will see your **Consumer Key**. Save it securely.

### Consumer Key Properties

| Property        | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| **Expiration**  | Consumer Keys can be set to expire. Check the expiration date.        |
| **Allowed IPs** | You can restrict the key to specific IP addresses for added security. |
| **Permissions** | Defines which API paths and HTTP methods the key can access.          |
| **Revocation**  | You can revoke a Consumer Key at any time from the API console.       |

---

## Configuring Credentials in n8n

Once you have all three keys, configure them in n8n:

1. In n8n, navigate to **Settings** > **Credentials** > **New**.
2. Search for and select **OVH API**.
3. Fill in the fields:

   | Field                  | Description                               | Example              |
   | ---------------------- | ----------------------------------------- | -------------------- |
   | **Endpoint**           | The OVHcloud API endpoint for your region | `eu.api.ovh.com/1.0` |
   | **Application Key**    | From the application creation step        | `xxxxxxxxxxxxxxxx`   |
   | **Application Secret** | From the application creation step        | `xxxxxxxxxxxxxxxx`   |
   | **Consumer Key**       | From the authorization step               | `xxxxxxxxxxxxxxxx`   |

4. Click **Save**.

You can now use these credentials in any OVH Cloud node within your workflows.

---

## Available API Endpoints

Choose the endpoint that corresponds to your OVH account region and brand:

| Endpoint                    | Region / Brand           |
| --------------------------- | ------------------------ |
| `eu.api.ovh.com/1.0`        | OVH Europe               |
| `ca.api.ovh.com/1.0`        | OVH Canada               |
| `api.us.ovhcloud.com/1.0`   | OVH USA                  |
| `eu.api.soyoustart.com/1.0` | SoYouStart Europe        |
| `ca.api.soyoustart.com/1.0` | SoYouStart North America |
| `eu.api.kimsufi.com/1.0`    | Kimsufi Europe           |
| `ca.api.kimsufi.com/1.0`    | Kimsufi North America    |

> **Note**: The correct endpoint is critical. Using the wrong endpoint will result in `401 Unauthorized` or `404 Not Found` errors, even with valid credentials.

---

## Required Permissions

For full functionality of the `n8n-nodes-ovhcloud` node, the following permissions are recommended:

### Account and Billing

```text
GET /me
GET /me/bill
GET /me/bill/*
GET /me/debtAccount
GET /me/order
GET /me/order/*
```

### Services

```text
GET /services
GET /services/*
```

### Email

```text
GET /email/domain
GET /email/domain/*
```

### VPS

```text
GET /vps
GET /vps/*
GET /vps/*/snapshot
POST /vps/*/snapshot
GET /vps/*/disks
GET /vps/*/disks/*
```

### Domains

```text
GET /domain
GET /domain/*
```

### Dedicated Servers

```text
GET /dedicated/server
GET /dedicated/server/*
```

### IP Load Balancing

```text
GET /ipLoadbalancing
GET /ipLoadbalancing/*
```

### IP Blocks

```text
GET /ip
GET /ip/*
```

### vRack

```text
GET /vrack
GET /vrack/*
```

### SMS

```text
GET /sms
GET /sms/*
```

### SSL

```text
GET /ssl
GET /ssl/*
```

### Hosting

```text
GET /hosting/privateDatabase
GET /hosting/privateDatabase/*
```

### Dedicated Cloud

```text
GET /dedicatedCloud
GET /dedicatedCloud/*
```

### DBaaS Logs

```text
GET /dbaas/logs
GET /dbaas/logs/*
```

> **Tip**: You do not need to grant all permissions upfront. Start with the minimum set required for your workflows and add more as needed.

---

## Security Best Practices

Follow these guidelines to keep your OVH API credentials secure.

### Principle of Least Privilege

- Grant **only the permissions** your workflows actually need.
- Avoid using `*` wildcards unless absolutely necessary.
- Prefer specific paths (e.g., `GET /vps/*`) over broad ones (e.g., `GET /*`).

### Credential Storage

- **Never commit** API secrets to version control.
- Use n8n's built-in credential encryption for storing keys.
- Rotate your Consumer Key periodically, especially if it may have been exposed.

### IP Restrictions

- When creating a Consumer Key, restrict it to **specific IP addresses** if your n8n instance has a static IP.
- This prevents the key from being used from unauthorized locations.

### Key Expiration

- Set an **expiration date** on your Consumer Key for time-limited projects.
- Monitor expiration dates and rotate keys before they expire to avoid workflow disruptions.

### Revocation

- If a credential is compromised, **revoke it immediately** from the OVH API Console.
- Generate a new Consumer Key and update your n8n credentials.

### Separate Keys per Environment

- Use **different API applications and Consumer Keys** for development, staging, and production environments.
- This limits the blast radius if a development key is compromised.

---

## Testing Your Credentials

After configuring your credentials in n8n, verify they work correctly:

1. Go to **Settings** > **Credentials** in n8n.
2. Find your **OVH API** credential entry.
3. Click the **Test** button (if available) or use a simple workflow:
   - Add an **OVH Cloud** node.
   - Set **Resource** to `Me` and **Operation** to `Get My Info`.
   - Execute the node.
4. If you receive your account information (email, country, currency), your credentials are working correctly.

If the test fails, refer to the [Troubleshooting Guide](./troubleshooting.md) for common error codes and solutions.

---

## Additional Resources

- [OVH API Console](https://api.ovh.com/console/) -- Create applications and manage keys.
- [Manage OVHcloud API Tokens](https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784) -- Official OVH documentation.
- [OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/) -- Comprehensive API reference.
- [Getting Started Guide](./getting-started.md) -- Installation and first workflow.
- [Troubleshooting Guide](./troubleshooting.md) -- Common errors and debugging.
