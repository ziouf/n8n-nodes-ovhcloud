# Getting Started with n8n-nodes-ovhcloud

This guide walks you through everything you need to start automating your OVHcloud infrastructure with n8n. You will learn how to install the community node, configure your OVH API credentials, and build your first workflow.

---

## Table of Contents

- [What You Need](#what-you-need)
- [Installation](#installation)
- [Configuration](#configuration)
- [Your First Workflow](#your-first-workflow)
- [Next Steps](#next-steps)

---

## What You Need

Before you begin, make sure you have the following:

| Requirement          | Details                                                               |
| -------------------- | --------------------------------------------------------------------- |
| **OVHcloud Account** | A valid OVHcloud account with API access enabled                      |
| **API Credentials**  | Application Key, Application Secret, and Consumer Key (created below) |
| **n8n Installation** | n8n version **1.60.0 or higher** (self-hosted or cloud)               |

> **Note**: If you do not yet have API credentials, follow the [Authentication Guide](./authentication-guide.md) for step-by-step instructions on creating an OVH API application and generating your keys.

---

## Installation

There are three ways to install the `n8n-nodes-ovhcloud` community node. Choose the method that best fits your environment.

### Method 1: Install via n8n UI (Recommended)

This is the simplest method for most users.

1. Open your n8n instance and navigate to **Settings** > **Community Nodes**.
2. Click the **Install** button.
3. Search for `n8n-nodes-ovhcloud`.
4. Click **Install** on the node package.
5. **Restart n8n** when prompted for the changes to take effect.

### Method 2: Manual Installation via npm

If you manage your n8n installation directly (e.g., Docker, bare metal), install the node with npm:

```bash
# Navigate to your n8n installation directory
cd /path/to/your/n8n

# Install the community node
npm install n8n-nodes-ovhcloud
```

After installation, **restart your n8n instance** so the new node is registered.

### Method 3: Development Installation

For contributors or developers who want to modify the node source code:

```bash
# Clone the repository
git clone https://github.com/cyril-marin/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud

# Install dependencies
npm install

# Build the project
npm run build
```

Once built, link or copy the node into your n8n installation's `custom` directory. Then restart n8n.

> **Tip**: During development, use `npm run dev` for hot-reload support. See the [Development section](#next-steps) below for more details.

---

## Configuration

After installing the node, you must configure your OVH API credentials so the node can communicate with the OVHcloud API.

### Step 1: Create an OVH API Application

1. Visit the [OVH API Console](https://api.ovh.com/console/).
2. Click **Create Application**.
3. Fill in the required fields:
   - **Application Name**: A descriptive name (e.g., `n8n-integration`).
   - **Application Description**: A brief description of how the application will be used.
   - **Access Rights**: Select the permissions your workflows will need. For full functionality, grant `GET` access to all relevant resource paths (see the [Authentication Guide](./authentication-guide.md) for a complete list).
4. Click **Create Application**.
5. **Save your credentials** immediately -- you will need:
   - `Application Key`
   - `Application Secret`

### Step 2: Authorize Your Application and Get a Consumer Key

1. In the application details page, click **Create a Consumer Key**.
2. Select the desired permissions (matching the access rights you chose in Step 1).
3. Click **Create**.
4. A validation URL will be generated. Open it in your browser and **authorize the request**.
5. Once authorized, **save your Consumer Key**.

### Step 3: Add Credentials in n8n

1. In n8n, go to **Settings** > **Credentials** > **New**.
2. Search for and select **OVH API**.
3. Fill in the credential fields:

   | Field                  | Example Value        | Description                |
   | ---------------------- | -------------------- | -------------------------- |
   | **Endpoint**           | `eu.api.ovh.com/1.0` | Your OVHcloud API endpoint |
   | **Application Key**    | `xxxxxxxxxxxxxxxx`   | From Step 1                |
   | **Application Secret** | `xxxxxxxxxxxxxxxx`   | From Step 1                |
   | **Consumer Key**       | `xxxxxxxxxxxxxxxx`   | From Step 2                |

4. Click **Save**.

### Choosing the Right Endpoint

Select the endpoint that matches your OVH account region:

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

## Your First Workflow

Now that the node is installed and configured, let us build a simple workflow to list all your VPS services.

### Step-by-Step

1. **Create a new workflow** in n8n.
2. Add a **Manual Trigger** node (or any trigger of your choice).
3. Add the **OVH Cloud** node and connect it to the trigger.
4. Configure the node:
   - **Resource**: `VPS`
   - **Operation**: `List`
   - **Credential**: Select the OVH API credentials you created earlier.
5. Click **Execute Node**.

### Expected Output

If everything is configured correctly, you will receive a list of your VPS instances similar to this:

```json
[
    {
        "json": {
            "serviceId": "vps1234567",
            "displayName": "vps-display-name",
            "cloudProject": "project-name",
            "state": "running",
            "plan": "vps-2024-virtual-2"
        }
    },
    {
        "json": {
            "serviceId": "vps8901234",
            "displayName": "vps-second",
            "cloudProject": "project-name",
            "state": "stopped",
            "plan": "vps-2024-virtual-4"
        }
    }
]
```

Congratulations -- your first OVHcloud workflow is working!

---

## Next Steps

Now that you have a working setup, explore the following resources:

- **[Examples Guide](./examples.md)** -- Ready-to-use workflow examples for common tasks like creating snapshots, listing email domains, and filtering bills.
- **[Authentication Guide](./authentication-guide.md)** -- Deep dive into OVH API authentication, permissions, and security best practices.
- **[Troubleshooting Guide](./troubleshooting.md)** -- Solutions for common errors and debugging tips.
- **[OVH API Console](https://api.ovh.com/console/)** -- Interactive API documentation for exploring all available endpoints.

For development and contribution information, see the [project README](../README.md).
