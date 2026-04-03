# OVHcloud License Node Documentation

## Overview

The **OVHcloud License** node provides access to the OVHcloud License API endpoints for managing WorkLight licenses. This node allows you to:

- List available WorkLight licenses
- Retrieve orderable WorkLight versions
- Get or update license properties
- Check if a license can be moved to another IP
- Move a license to another IP
- Terminate a license
- Confirm license termination

---

## Node Properties

| Property         | Type     | Required | Description                                                                                                                                                                                 |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **svcOperation** | `string` | ✅ Yes   | The operation to perform. Possible values: `list`, `getOrderableVersions`, `get`, `update`, `allowedDestinationIp`, `canLicenseBeMovedTo`, `moveLicense`, `terminate`, `confirmTermination` |
| **svcType**      | `string` | ✅ Yes   | The type of license. Possible values: `dedicated`, `dedicatedCloud`, `dedicatedFailover`, `failover`, `vm`, `vps`, `vps_ceph`, `vps_classic`, `vps_cloud`, `vps_cloud_2016`, `vps_ssd`      |

---

## Credential Authentication

The node requires **OVH API** credentials to authenticate requests. Ensure you have configured the following in your n8n workflow:

- **Host**: OVHcloud API host (e.g., `api.ovh.com`)
- **Application Key**: Your OVHcloud application key
- **Application Secret**: Your OVHcloud application secret
- **Consumer Key**: Your OVHcloud consumer key

---

## Operations

### 1. `list`

**Description**: List available WorkLight licenses.

**HTTP Method**: `GET`

**Endpoint**: `/license/worklight`

**Parameters**:

| Parameter   | Type                                  | Required | Description                                                                     |
| ----------- | ------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| **iamTags** | `map[string][]iam.resource.TagFilter` | ❌ No    | Filter resources on IAM tags. Example: `{ "operator": "EQ", "value": "myTag" }` |

**Response Type**: `string[]`

**Example Response**:

```json
["license-1", "license-2"]
```

**IAM Actions**:

- `licenseWorklight:apiovh:get` (Required: ✅ Yes)

---

### 2. `getOrderableVersions`

**Description**: Get the orderable WorkLight versions.

**HTTP Method**: `GET`

**Endpoint**: `/license/worklight/orderableVersions`

**Parameters**:

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| **ip**    | `ipv4` | ✅ Yes   | Your license IP. Example: `123.45.67.89` |

**Response Type**: `license.WorkLightOrderConfiguration[]`

**Example Response**:

```json
[
    {
        "serviceType": "vps",
        "orderableVersions": [
            {
                "version": "VERSION-6.1U.1CPU"
            },
            {
                "version": "VERSION-6.1U.2CPU"
            }
        ]
    }
]
```

**IAM Actions**:

- `licenseWorklight/orderableVersions/get` (Required: ✅ Yes)

---

### 3. `get`

**Description**: Get license properties.

**HTTP Method**: `GET`

**Endpoint**: `/license/worklight/{serviceName}`

**Parameters**:

| Parameter       | Type     | Required | Description                                              |
| --------------- | -------- | -------- | -------------------------------------------------------- |
| **serviceName** | `string` | ✅ Yes   | The name of your WorkLight license. Example: `license-1` |

**Response Type**: `license.worklight.WorkLightWithIAM`

**Example Response**:

```json
{
    "domain": "license-1",
    "ip": "123.45.67.89",
    "status": "ok",
    "version": "VERSION-6.1U.1CPU",
    "licenseId": "12345678",
    "creation": "2024-01-01T00:00:00Z",
    "deleteAtExpiration": false,
    "iam": {
        "displayName": "My License",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": { "key": "value" },
        "urn": "license:licenseWorklight:license-1"
    }
}
```

**IAM Actions**:

- `licenseWorklight:apiovh:get` (Required: ✅ Yes)

---

### 4. `update`

**Description**: Alter license properties.

**HTTP Method**: `PUT`

**Endpoint**: `/license/worklight/{serviceName}`

**Parameters**:

| Parameter       | Type                          | Required | Description                                              |
| --------------- | ----------------------------- | -------- | -------------------------------------------------------- |
| **serviceName** | `string`                      | ✅ Yes   | The name of your WorkLight license. Example: `license-1` |
| **body**        | `license.worklight.WorkLight` | ✅ Yes   | New license properties. Example:                         |

```json
{
    "deleteAtExpiration": true,
    "version": "VERSION-6.2U.2CPU"
}
```

**Response Type**: `void`

**IAM Actions**:

- `licenseWorklight:apiovh:put` (Required: ✅ Yes)

---

### 5. `allowedDestinationIp`

**Description**: Returns an array of IPs where the license can be moved to.

**HTTP Method**: `GET`

**Endpoint**: `/license/worklight/{serviceName}/allowedDestinationIp`

**Parameters**:

| Parameter       | Type     | Required | Description                                              |
| --------------- | -------- | -------- | -------------------------------------------------------- |
| **serviceName** | `string` | ✅ Yes   | The name of your WorkLight license. Example: `license-1` |

**Response Type**: `ipBlock[]`

**Example Response**:

```json
["192.168.1.1", "192.168.1.2"]
```

**IAM Actions**:

- `licenseWorklight:apiovh:allowedDestinationIp/get` (Required: ✅ Yes)

---

### 6. `canLicenseBeMovedTo`

**Description**: Check if the license can be moved to another IP.

**HTTP Method**: `GET`

**Endpoint**: `/license/worklight/{serviceName}/canLicenseBeMovedTo`

**Parameters**:

| Parameter         | Type     | Required | Description                                                          |
| ----------------- | -------- | -------- | -------------------------------------------------------------------- |
| **destinationIp** | `ipv4`   | ✅ Yes   | The IP on which you want to move the license. Example: `192.168.1.1` |
| **serviceName**   | `string` | ✅ Yes   | The name of your WorkLight license. Example: `license-1`             |

**Response Type**: `license.ChangeIpStatus`

**Example Response**:

```json
{
    "success": true,
    "message": "OK"
}
```

**IAM Actions**:

- `licenseWorklight:apiovh:canLicenseBeMovedTo/get` (Required: ✅ Yes)

---

### 7. `moveLicense`

**Description**: Move a license to another IP.

**HTTP Method**: `POST`

**Endpoint**: `/license/worklight/{serviceName}/changeIp`

**Parameters**:

| Parameter         | Type     | Required | Description                                                          |
| ----------------- | -------- | -------- | -------------------------------------------------------------------- |
| **destinationIp** | `ipv4`   | ✅ Yes   | The IP on which you want to move the license. Example: `192.168.1.1` |
| **serviceName**   | `string` | ✅ Yes   | The name of your WorkLight license. Example: `license-1`             |

**Response Type**: `license.Task`

**Example Response**:

```json
{
    "taskId": 123456,
    "name": "changeIp",
    "status": "todo",
    "todoDate": "2024-01-01T00:00:00Z",
    "lastUpdate": "2024-01-01T00:00:00Z",
    "action": "changeIp",
    "doneDate": null
}
```

**IAM Actions**:

- `licenseWorklight:apiovh:changeIp` (Required: ✅ Yes)

---

### 8. `terminate`

**Description**: Ask for the termination of your license.

**HTTP Method**: `POST`

**Endpoint**: `/license/worklight/{serviceName}/terminate`

**Parameters**:

| Parameter       | Type     | Required | Description                                              |
| --------------- | -------- | -------- | -------------------------------------------------------- |
| **serviceName** | `string` | ✅ Yes   | The name of your WorkLight license. Example: `license-1` |

**Response Type**: `string`

**Example Response**:

```json
"Termination request sent. Admin contact will receive a token by email."
```

**IAM Actions**:

- `licenseWorklight:apiovh:terminate` (Required: ✅ Yes)

---

### 9. `confirmTermination`

**Description**: Confirm license termination.

**HTTP Method**: `POST`

**Endpoint**: `/license/worklight/{serviceName}/confirmTermination`

**Parameters**:

| Parameter       | Type                               | Required | Description                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **serviceName** | `string`                           | ✅ Yes   | The name of your WorkLight license. Example: `license-1`                                                                                                                                                                                                                                                                                                                          |
| **commentary**  | `string`                           | ❌ No    | Commentary about the termination request. Example: `"No longer needed"`                                                                                                                                                                                                                                                                                                           |
| **futureUse**   | `service.TerminationFutureUseEnum` | ❌ No    | What will happen after termination. Possible values: `NOT_REPLACING_SERVICE`, `OTHER`, `SUBSCRIBE_AN_OTHER_SERVICE`, `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR`, `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR`                                                                                                                                                               |
| **reason**      | `service.TerminationReasonEnum`    | ❌ No    | Reason for termination. Possible values: `FEATURES_DONT_SUIT_ME`, `LACK_OF_PERFORMANCES`, `MIGRATED_TO_ANOTHER_OVH_PRODUCT`, `MIGRATED_TO_COMPETITOR`, `NOT_ENOUGH_RECOGNITION`, `NOT_NEEDED_ANYMORE`, `NOT_RELIABLE`, `NO_ANSWER`, `OTHER`, `PRODUCT_DIMENSION_DONT_SUIT_ME`, `PRODUCT_TOOLS_DONT_SUIT_ME`, `TOO_EXPENSIVE`, `TOO_HARD_TO_USE`, `UNSATIFIED_BY_CUSTOMER_SUPPORT` |
| **token**       | `string`                           | ✅ Yes   | The termination token sent by email to the admin contact. Example: `"abc123"`                                                                                                                                                                                                                                                                                                     |

**Response Type**: `string`

**Example Response**:

```json
"License terminated successfully"
```

**IAM Actions**:

- `licenseWorklight:apiovh:confirmTermination` (Required: ✅ Yes)

---

## Error Handling

The node uses `NodeApiError` for n8n-specific errors and validates inputs before making API calls. If an API error occurs, it will be caught and displayed with a meaningful message in the n8n UI.

---

## Examples

### Example 1: List All Available Licenses

```json
{
    "svcOperation": "list",
    "svcType": "vps"
}
```

**Expected Output**:

```json
["license-1", "license-2"]
```

---

### Example 2: Get Orderable WorkLight Versions for an IP

```json
{
    "svcOperation": "getOrderableVersions",
    "svcType": "vps",
    "ip": "123.45.67.89"
}
```

**Expected Output**:

```json
[
    {
        "serviceType": "vps",
        "orderableVersions": [
            {
                "version": "VERSION-6.1U.1CPU"
            },
            {
                "version": "VERSION-6.2U.2CPU"
            }
        ]
    }
]
```

---

### Example 3: Get License Properties

```json
{
    "svcOperation": "get",
    "svcType": "vps",
    "serviceName": "license-1"
}
```

**Expected Output**:

```json
{
    "domain": "license-1",
    "ip": "123.45.67.89",
    "status": "ok",
    "version": "VERSION-6.1U.1CPU",
    "licenseId": "12345678",
    "creation": "2024-01-01T00:00:00Z",
    "deleteAtExpiration": false,
    "iam": {
        "displayName": "My License",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": { "key": "value" },
        "urn": "license:licenseWorklight:license-1"
    }
}
```

---

### Example 4: Update License Properties

```json
{
    "svcOperation": "update",
    "svcType": "vps",
    "serviceName": "license-1",
    "body": {
        "deleteAtExpiration": true,
        "version": "VERSION-6.2U.2CPU"
    }
}
```

**Expected Output**: None (void response)

---

### Example 5: Check if License Can Be Moved to Another IP

```json
{
    "svcOperation": "canLicenseBeMovedTo",
    "svcType": "vps",
    "serviceName": "license-1",
    "destinationIp": "192.168.1.1"
}
```

**Expected Output**:

```json
{
    "success": true,
    "message": "OK"
}
```

---

### Example 6: Move License to Another IP

```json
{
    "svcOperation": "moveLicense",
    "svcType": "vps",
    "destinationIp": "192.168.1.1",
    "serviceName": "license-1"
}
```

**Expected Output**:

```json
{
    "taskId": 123456,
    "name": "changeIp",
    "status": "todo",
    "todoDate": "2024-01-01T00:00:00Z",
    "lastUpdate": "2024-01-01T00:00:00Z",
    "action": "changeIp",
    "doneDate": null
}
```

---

### Example 7: Terminate License

```json
{
    "svcOperation": "terminate",
    "svcType": "vps",
    "serviceName": "license-1"
}
```

**Expected Output**:

```json
"Termination request sent. Admin contact will receive a token by email."
```

---

### Example 8: Confirm License Termination

```json
{
    "svcOperation": "confirmTermination",
    "svcType": "vps",
    "serviceName": "license-1",
    "token": "abc123",
    "commentary": "No longer needed",
    "futureUse": "NOT_REPLACING_SERVICE",
    "reason": "NOT_NEEDED_ANYMORE"
}
```

**Expected Output**:

```json
"License terminated successfully"
```

---

## Notes

- Ensure you have valid **OVH API** credentials before using this node.
- The `serviceName` parameter is required for most operations and must be the name of an existing WorkLight license.
- For termination operations, the admin contact will receive a token by email. You must use this token to confirm the termination.
- The `svcType` parameter determines the type of license you are working with. Ensure it matches the license type in the OVHcloud API.

---

## References

- [OVHcloud License API Documentation](https://eu.api.ovh.com/v1)
- [n8n Node API Error Documentation](https://docs.n8n.io/)
- [IAM Resource Metadata Documentation](https://api.ovh.com/v1/)
- [License Task State Enum Documentation](https://api.ovh.com/v1/)
- [License Change IP Status Documentation](https://api.ovh.com/v1/)
