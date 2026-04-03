# Workflow Examples

Real-world examples of using the OVH Cloud node in n8n workflows.

---

## Example 1: List All VPS Services

**Use Case**: Automatically discover your VPS instances for monitoring or backup workflows.

### Configuration

1. **Node**: Add "OVH Cloud" node to workflow
2. **Resource**: `VPS`
3. **Operation**: `List`
4. **Credentials**: Select your OVH API credentials

### Expected Output

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
    }
]
```

---

## Example 2: Get VPS Details and Create Snapshot

**Use Case**: Create daily snapshots of critical VPS instances.

### Configuration

1. **Node**: `OVH Cloud` > `VPS` > `Get`
   - **Service Name**: Select from list (e.g., `vps1234567`)
2. **Node**: `OVH Cloud` > `VPS` > `Snapshot` > `Create`
   - **Service Name**: Use expression `={{ $json.serviceId }}`
   - **Description**: `Daily backup - {{ $datetime.now().toISODate() }}`

---

## Example 3: List All Email Domains

**Use Case**: Audit email domains owned by your OVH account.

### Configuration

1. **Node**: `OVH Cloud` > `Email` > `List Domains`
2. **Credentials**: OVH API credentials

---

## Example 4: Get Your OVH Account Information

**Use Case**: Retrieve account details for notifications or monitoring.

### Configuration

1. **Node**: `OVH Cloud` > `Me` > `My Account` > `Get My Info`
2. **Credentials**: OVH API credentials

---

## Example 5: List All Bills with Filtering

**Use Case**: Create monthly expense reports.

### Configuration

1. **Node**: `OVH Cloud` > `Me` > `Bills` > `List Bills`
2. **Filters**:
   - **Category**: `purchase-web`
   - **Date From**: `2026-03-01`
   - **Date To**: `2026-03-31`

---

## Example 6: List Services by Route

**Use Case**: Find all hosting web services for maintenance.

### Configuration

1. **Node**: `OVH Cloud` > `Services` > `List Services`
2. **Filters**:
   - **Route**: `/hosting/web`
   - **Sort By**: `serviceId`
