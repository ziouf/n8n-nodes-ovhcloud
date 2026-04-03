# n8n OVHcloud vRack Node Documentation

## Overview

The **vRack** node allows you to interact with OVHcloud's vRack service, enabling you to manage and retrieve information about vRack instances, their associated services, and configurations. This node is designed to work with the [OVHcloud API](https://api.ovh.com/) and requires valid OVHcloud credentials.

---

## Node Properties

### Common Properties

| Property       | Type     | Description                                                                                 |
| -------------- | -------- | ------------------------------------------------------------------------------------------- |
| `svcOperation` | `string` | The operation to perform on the vRack service.                                              |
| `svcType`      | `string` | The type of service to interact with (e.g., `cloudProject`, `ip`, `ipLoadbalancing`, etc.). |

---

## Operations

### List Available Services

**Operation**: `List Available Services`

**Path**: `/vrack`

**HTTP Method**: `GET`

**Description**: List all services associated with a vRack.

**Parameters**:

| Parameter | Type                                  | Required | Description                         |
| --------- | ------------------------------------- | -------- | ----------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:get` (required: `true`)

---

### List Regions Available to Announce IP Blocks

**Operation**: `List Regions Available to Announce IP Blocks`

**Path**: `/vrack/publicRoutingRegion`

**HTTP Method**: `GET`

**Description**: Retrieve a list of regions where you can announce IP blocks.

**Parameters**:

| Parameter | Type     | Required | Description            |
| --------- | -------- | -------- | ---------------------- |
| `region`  | `string` | No       | Filter by region name. |

**Response Type**: `vrack.PublicRoutingRegion[]`

**IAM Actions**:

- None (no authentication required for this operation).

---

### Get vRack Properties

**Operation**: `Get vRack Properties`

**Path**: `/vrack/{serviceName}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `vrack.vrackWithIAM`

**IAM Actions**:

- `vrack:apiovh:get` (required: `true`)

---

### Alter vRack Properties

**Operation**: `Alter vRack Properties`

**Path**: `/vrack/{serviceName}`

**HTTP Method**: `PUT`

**Description**: Update the properties of a specific vRack.

**Parameters**:

| Parameter     | Type          | Required | Description                     |
| ------------- | ------------- | -------- | ------------------------------- |
| `serviceName` | `string`      | Yes      | The internal name of the vRack. |
| `vrack.vrack` | `vrack.vrack` | Yes      | New object properties to apply. |

**Response Type**: `void`

**IAM Actions**:

- `vrack:apiovh:put` (required: `true`)

---

### List Allowed Services in a vRack (Deprecated)

**Operation**: `List Allowed Services in a vRack`

**Path**: `/vrack/{serviceName}/allowedServices`

**HTTP Method**: `GET`

**Description**: List all services allowed in a specific vRack.
**Status**: Deprecated (will be removed on **2025-12-02**).

**Parameters**:

| Parameter       | Type                       | Required | Description                                                                             |
| --------------- | -------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `serviceName`   | `string`                   | Yes      | The internal name of the vRack.                                                         |
| `serviceFamily` | `vrack.AllowedServiceEnum` | No       | Filter by a specific service family (e.g., `dedicatedServer`, `ipLoadbalancing`, etc.). |

**Response Type**: `vrack.AllowedServices`

**IAM Actions**:

- `vrack:apiovh:allowedServices/get` (required: `true`)
- `publicCloudProject:apiovh:vrack/attach` (required: `false`)
- `legacyVrack:apiovh:vrack/attach` (required: `false`)
- `ipLoadbalancing:apiovh:vrack/attach` (required: `false`)
- `ovhCloudConnect:apiovh:vrack/attach` (required: `false`)
- `dedicatedServer:apiovh:vrack/attach` (required: `false`)
- `pccVMware:apiovh:vrack/attach` (required: `false`)
- `vrackServices:apiovh:vrack/attach` (required: `false`)
- `ip:apiovh:vrack/attach` (required: `false`)
- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrack/attach` (required: `false`)

---

### Confirm vRack Termination

**Operation**: `Confirm vRack Termination`

**Path**: `/vrack/{serviceName}/confirmTermination`

**HTTP Method**: `POST`

**Description**: Confirm the termination of a vRack.

**Parameters**:

| Parameter     | Type                               | Required | Description                                                        |
| ------------- | ---------------------------------- | -------- | ------------------------------------------------------------------ |
| `serviceName` | `string`                           | Yes      | The internal name of the vRack.                                    |
| `commentary`  | `string`                           | No       | Commentary about the termination request.                          |
| `reason`      | `service.TerminationReasonEnum`    | No       | Reason for the termination (e.g., `ABANDONED`, `MIGRATION`, etc.). |
| `futureUse`   | `service.TerminationFutureUseEnum` | No       | What will happen after termination (e.g., `KEEP`, `REUSE`, etc.).  |
| `token`       | `string`                           | Yes      | The termination token sent by email to the admin contact.          |

**Response Type**: `string`

**IAM Actions**:

- `vrack:apiovh:confirmTermination` (required: `true`)

---

### List vRack Cloud Projects

**Operation**: `List vRack Cloud Projects`

**Path**: `/vrack/{serviceName}/cloudProject`

**HTTP Method**: `GET`

**Description**: List all public cloud projects associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:cloudProject/get` (required: `true`)

---

### Add a Cloud Project to a vRack

**Operation**: `Add a Cloud Project to a vRack`

**Path**: `/vrack/{serviceName}/cloudProject`

**HTTP Method**: `POST`

**Description**: Add a public cloud project to a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                      |
| ------------- | -------- | -------- | -------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack.  |
| `project`     | `string` | Yes      | The public cloud project to add. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:cloudProject/attach` (required: `true`)
- `publicCloudProject:apiovh:vrack/attach` (required: `true`)

---

### Remove a Cloud Project from a vRack

**Operation**: `Remove a Cloud Project from a vRack`

**Path**: `/vrack/{serviceName}/cloudProject/{project}`

**HTTP Method**: `DELETE`

**Description**: Remove a specific public cloud project from a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                         |
| ------------- | -------- | -------- | ----------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack.     |
| `project`     | `string` | Yes      | The public cloud project to remove. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:cloudProject/detach` (required: `true`)

---

### Get Cloud Project Properties

**Operation**: `Get Cloud Project Properties`

**Path**: `/vrack/{serviceName}/cloudProject/{project}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific public cloud project in a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack.       |
| `project`     | `string` | Yes      | The public cloud project to retrieve. |

**Response Type**: `vrack.cloudProject`

**IAM Actions**:

- `vrack:apiovh:cloudProject/get` (required: `true`)

---

### List vRack Dedicated Cloud (VMware) Services

**Operation**: `List vRack Dedicated Cloud (VMware) Services`

**Path**: `/vrack/{serviceName}/dedicatedCloud`

**HTTP Method**: `GET`

**Description**: List all VMware services associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:pccVMware/get` (required: `true`)

---

### Add a VMware Service to a vRack

**Operation**: `Add a VMware Service to a vRack`

**Path**: `/vrack/{serviceName}/dedicatedCloud`

**HTTP Method**: `POST`

**Description**: Add a VMware service to a vRack.

**Parameters**:

| Parameter        | Type     | Required | Description                     |
| ---------------- | -------- | -------- | ------------------------------- |
| `serviceName`    | `string` | Yes      | The internal name of the vRack. |
| `dedicatedCloud` | `string` | Yes      | The VMware service to add.      |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:pccVMware/attach` (required: `true`)
- `pccVMware:apiovh:vrack/attach` (required: `true`)

---

### List vRack Dedicated Cloud Datacenter Services

**Operation**: `List vRack Dedicated Cloud Datacenter Services`

**Path**: `/vrack/{serviceName}/dedicatedCloudDatacenter`

**HTTP Method**: `GET`

**Description**: List all dedicated cloud datacenter services associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedCloudDatacenter/get` (required: `true`)

---

### Get Dedicated Cloud Datacenter Properties

**Operation**: `Get Dedicated Cloud Datacenter Properties`

**Path**: `/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific dedicated cloud datacenter in a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                          |
| ------------- | -------- | -------- | ------------------------------------ |
| `serviceName` | `string` | Yes      | The internal name of the vRack.      |
| `datacenter`  | `string` | Yes      | The dedicated cloud datacenter name. |

**Response Type**: `vrack.pccDatacenter`

**IAM Actions**:

- `vrack:apiovh:dedicatedCloudDatacenter/get` (required: `true`)

---

### List Eligible Services for a vRack (Asynchronous)

**Operation**: `List Eligible Services for a vRack`

**Path**: `/vrack/{serviceName}/eligibleServices`

**HTTP Method**: `GET`

**Description**: Asynchronously list all eligible services for a vRack.

**Note**: This operation may return partial results while the status is `pending`. Once the status is `done`, all eligible services are returned.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `vrack.EligibleServicesResponse`

**Response Structure**:

```json
{
  "status": "pending" | "done",
  "errors": [
    {
      "serviceType": "string",
      "error": "string"
    }
  ],
  "services": [
    "string"
  ]
}
```

**IAM Actions**:

- `vrack:apiovh:eligibleServices/get` (required: `true`)
- `legacyVrack:apiovh:vrack/attach` (required: `false`)
- `ipLoadbalancing:apiovh:vrack/attach` (required: `false`)
- `ovhCloudConnect:apiovh:vrack/attach` (required: `false`)
- `dedicatedServer:apiovh:vrack/attach` (required: `false`)
- `pccVMware:apiovh:vrack/attach` (required: `false`)
- `vrackServices:apiovh:vrack/attach` (required: `false`)
- `ip:apiovh:vrack/attach` (required: `false`)
- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrack/attach` (required: `false`)

---

### List vRack IP Blocks

**Operation**: `List vRack IP Blocks`

**Path**: `/vrack/{serviceName}/ip`

**HTTP Method**: `GET`

**Description**: List all IP blocks associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `ipBlock[]`

**IAM Actions**:

- `vrack:apiovh:ip/get` (required: `true`)

---

### Add an IP Block to a vRack

**Operation**: `Add an IP Block to a vRack`

**Path**: `/vrack/{serviceName}/ip`

**HTTP Method**: `POST`

**Description**: Add an IP block to a vRack.

**Parameters**:

| Parameter     | Type      | Required | Description                             |
| ------------- | --------- | -------- | --------------------------------------- |
| `serviceName` | `string`  | Yes      | The internal name of the vRack.         |
| `block`       | `ipBlock` | Yes      | The IP block to add.                    |
| `region`      | `string`  | No       | The region in which to route the block. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:ip/attach` (required: `true`)
- `ip:apiovh:vrack/attach` (required: `true`)

---

### Remove an IP Block from a vRack

**Operation**: `Remove an IP Block from a vRack`

**Path**: `/vrack/{serviceName}/ip/{ip}`

**HTTP Method**: `DELETE`

**Description**: Remove a specific IP block from a vRack.

**Parameters**:

| Parameter     | Type      | Required | Description                     |
| ------------- | --------- | -------- | ------------------------------- |
| `serviceName` | `string`  | Yes      | The internal name of the vRack. |
| `ip`          | `ipBlock` | Yes      | The IP block to remove.         |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:ip/detach` (required: `true`)

---

### Get IP Block Properties

**Operation**: `Get IP Block Properties`

**Path**: `/vrack/{serviceName}/ip/{ip}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific IP block in a vRack.

**Parameters**:

| Parameter     | Type      | Required | Description                     |
| ------------- | --------- | -------- | ------------------------------- |
| `serviceName` | `string`  | Yes      | The internal name of the vRack. |
| `ip`          | `ipBlock` | Yes      | The IP block to retrieve.       |

**Response Type**: `vrack.ip`

**IAM Actions**:

- `vrack:apiovh:ip/get` (required: `true`)

---

### List vRack IP Loadbalancing (IPLB) Services

**Operation**: `List vRack IP Loadbalancing (IPLB) Services`

**Path**: `/vrack/{serviceName}/ipLoadbalancing`

**HTTP Method**: `GET`

**Description**: List all IP loadbalancing services associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:ipLoadbalancing/get` (required: `true`)

---

### Add an IP Loadbalancing Service to a vRack

**Operation**: `Add an IP Loadbalancing Service to a vRack`

**Path**: `/vrack/{serviceName}/ipLoadbalancing`

**HTTP Method**: `POST`

**Description**: Add an IP loadbalancing service to a vRack.

**Parameters**:

| Parameter         | Type     | Required | Description                          |
| ----------------- | -------- | -------- | ------------------------------------ |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.      |
| `ipLoadbalancing` | `string` | Yes      | The IP loadbalancing service to add. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:ipLoadbalancing/attach` (required: `true`)
- `ipLoadbalancing:apiovh:vrack/attach` (required: `true`)

---

### Remove an IP Loadbalancing Service from a vRack

**Operation**: `Remove an IP Loadbalancing Service from a vRack`

**Path**: `/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}`

**HTTP Method**: `DELETE`

**Description**: Remove a specific IP loadbalancing service from a vRack.

**Parameters**:

| Parameter         | Type     | Required | Description                             |
| ----------------- | -------- | -------- | --------------------------------------- |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.         |
| `ipLoadbalancing` | `string` | Yes      | The IP loadbalancing service to remove. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:ipLoadbalancing/detach` (required: `true`)

---

### Get IP Loadbalancing Service Properties

**Operation**: `Get IP Loadbalancing Service Properties`

**Path**: `/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific IP loadbalancing service in a vRack.

**Parameters**:

| Parameter         | Type     | Required | Description                               |
| ----------------- | -------- | -------- | ----------------------------------------- |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.           |
| `ipLoadbalancing` | `string` | Yes      | The IP loadbalancing service to retrieve. |

**Response Type**: `vrack.iplb`

**IAM Actions**:

- `vrack:apiovh:ipLoadbalancing/get` (required: `true`)

---

### List vRack IP v6 Blocks

**Operation**: `List vRack IP v6 Blocks`

**Path**: `/vrack/{serviceName}/ipv6`

**HTTP Method**: `GET`

**Description**: List all IPv6 blocks associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `ipv6Block[]`

**IAM Actions**:

- `vrack:apiovh:ipv6/get` (required: `true`)

---

### List vRack Dedicated Connect Services

**Operation**: `List vRack Dedicated Connect Services`

**Path**: `/vrack/{serviceName}/dedicatedConnect`

**HTTP Method**: `GET`

**Description**: List all dedicated connect services associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedConnect/get` (required: `true`)

---

### Get Dedicated Connect Service Properties

**Operation**: `Get Dedicated Connect Service Properties`

**Path**: `/vrack/{serviceName}/dedicatedConnect/{name}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific dedicated connect service in a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                         |
| ------------- | -------- | -------- | ----------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack.     |
| `name`        | `string` | Yes      | The dedicated connect service name. |

**Response Type**: `vrack.dedicatedConnect`

**IAM Actions**:

- `vrack:apiovh:dedicatedConnect/get` (required: `true`)

---

### Alter Dedicated Connect Service Properties

**Operation**: `Alter Dedicated Connect Service Properties`

**Path**: `/vrack/{serviceName}/dedicatedConnect/{name}`

**HTTP Method**: `PUT`

**Description**: Update properties of a specific dedicated connect service in a vRack.

**Parameters**:

| Parameter          | Type                     | Required | Description                         |
| ------------------ | ------------------------ | -------- | ----------------------------------- |
| `serviceName`      | `string`                 | Yes      | The internal name of the vRack.     |
| `name`             | `string`                 | Yes      | The dedicated connect service name. |
| `dedicatedConnect` | `vrack.dedicatedConnect` | Yes      | New object properties to apply.     |

**Response Type**: `void`

**IAM Actions**:

- `vrack:apiovh:dedicatedConnect/edit` (required: `true`)

---

### List vRack Dedicated Server Services (Legacy)

**Operation**: `List vRack Dedicated Server Services`

**Path**: `/vrack/{serviceName}/dedicatedServer`

**HTTP Method**: `GET`

**Description**: List all dedicated server services associated with a vRack.
**Status**: Legacy (may be removed in future versions).

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedServer/get` (required: `true`)

---

### Add a Dedicated Server Service to a vRack (Legacy)

**Operation**: `Add a Dedicated Server Service to a vRack`

**Path**: `/vrack/{serviceName}/dedicatedServer`

**HTTP Method**: `POST`

**Description**: Add a dedicated server service to a vRack.
**Status**: Legacy (may be removed in future versions).

**Parameters**:

| Parameter         | Type     | Required | Description                          |
| ----------------- | -------- | -------- | ------------------------------------ |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.      |
| `dedicatedServer` | `string` | Yes      | The dedicated server service to add. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:dedicatedServer/attach` (required: `true`)
- `dedicatedServer:apiovh:vrack/attach` (required: `true`)

---

### Remove a Dedicated Server Service from a vRack (Legacy)

**Operation**: `Remove a Dedicated Server Service from a vRack`

**Path**: `/vrack/{serviceName}/dedicatedServer/{dedicatedServer}`

**HTTP Method**: `DELETE`

**Description**: Remove a specific dedicated server service from a vRack.
**Status**: Legacy (may be removed in future versions).

**Parameters**:

| Parameter         | Type     | Required | Description                             |
| ----------------- | -------- | -------- | --------------------------------------- |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.         |
| `dedicatedServer` | `string` | Yes      | The dedicated server service to remove. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:dedicatedServer/detach` (required: `true`)

---

### Get Dedicated Server Service Properties (Legacy)

**Operation**: `Get Dedicated Server Service Properties`

**Path**: `/vrack/{serviceName}/dedicatedServer/{dedicatedServer}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific dedicated server service in a vRack.
**Status**: Legacy (may be removed in future versions).

**Parameters**:

| Parameter         | Type     | Required | Description                               |
| ----------------- | -------- | -------- | ----------------------------------------- |
| `serviceName`     | `string` | Yes      | The internal name of the vRack.           |
| `dedicatedServer` | `string` | Yes      | The dedicated server service to retrieve. |

**Response Type**: `vrack.dedicatedServer`

**IAM Actions**:

- `vrack:apiovh:dedicatedServer/get` (required: `true`)

---

### List vRack Dedicated Server Interface Services

**Operation**: `List vRack Dedicated Server Interface Services`

**Path**: `/vrack/{serviceName}/dedicatedServerInterface`

**HTTP Method**: `GET`

**Description**: List all dedicated server interface services associated with a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedServerInterface/get` (required: `true`)

---

### Add a Dedicated Server Interface Service to a vRack

**Operation**: `Add a Dedicated Server Interface Service to a vRack`

**Path**: `/vrack/{serviceName}/dedicatedServerInterface`

**HTTP Method**: `POST`

**Description**: Add a dedicated server interface service to a vRack.

**Parameters**:

| Parameter                  | Type     | Required | Description                                    |
| -------------------------- | -------- | -------- | ---------------------------------------------- |
| `serviceName`              | `string` | Yes      | The internal name of the vRack.                |
| `dedicatedServerInterface` | `string` | Yes      | The dedicated server interface service to add. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:dedicatedServerInterface/attach` (required: `true`)
- `dedicatedServer:apiovh:vrack/attach` (required: `true`)

---

### Remove a Dedicated Server Interface Service from a vRack

**Operation**: `Remove a Dedicated Server Interface Service from a vRack`

**Path**: `/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}`

**HTTP Method**: `DELETE`

**Description**: Remove a specific dedicated server interface service from a vRack.

**Parameters**:

| Parameter                  | Type     | Required | Description                                       |
| -------------------------- | -------- | -------- | ------------------------------------------------- |
| `serviceName`              | `string` | Yes      | The internal name of the vRack.                   |
| `dedicatedServerInterface` | `string` | Yes      | The dedicated server interface service to remove. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:dedicatedServerInterface/detach` (required: `true`)

---

### Get Dedicated Server Interface Service Properties

**Operation**: `Get Dedicated Server Interface Service Properties`

**Path**: `/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}`

**HTTP Method**: `GET`

**Description**: Retrieve properties of a specific dedicated server interface service in a vRack.

**Parameters**:

| Parameter                  | Type     | Required | Description                                         |
| -------------------------- | -------- | -------- | --------------------------------------------------- |
| `serviceName`              | `string` | Yes      | The internal name of the vRack.                     |
| `dedicatedServerInterface` | `string` | Yes      | The dedicated server interface service to retrieve. |

**Response Type**: `vrack.dedicatedServerInterface`

**IAM Actions**:

- `vrack:apiovh:dedicatedServerInterface/get` (required: `true`)

---

### List Details for Dedicated Server Interfaces

**Operation**: `List Details for Dedicated Server Interfaces`

**Path**: `/vrack/{serviceName}/dedicatedServerInterfaceDetails`

**HTTP Method**: `GET`

**Description**: Retrieve details for all dedicated server interfaces in a vRack.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `vrack.AllowedDedicatedServerInterfaces[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedServerInterfaceDetails/get` (required: `true`)

---

### List vRack Eligible Services (Asynchronous)

**Operation**: `List vRack Eligible Services`

**Path**: `/vrack/{serviceName}/eligibleServices`

**HTTP Method**: `GET`

**Description**: Asynchronously list all eligible services for a vRack.

**Note**: This operation may return partial results while the status is `pending`. Once the status is `done`, all eligible services are returned.

**Parameters**:

| Parameter     | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of the vRack. |

**Response Type**: `vrack.EligibleServicesResponse`

**Response Structure**:

```json
{
  "status": "pending" | "done",
  "errors": [
    {
      "datacenter": "string",
      "error": "string"
    }
  ],
  "services": [
    "string"
  ]
}
```

**IAM Actions**:

- `vrack:apiovh:eligibleServices/get` (required: `true`)

---

### List vRack Allowed Services for Dedicated Cloud Datacenters

**Operation**: `List vRack Allowed Services for Dedicated Cloud Datacenters`

**Path**: `/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack`

**HTTP Method**: `GET`

**Description**: Retrieve a list of vRacks allowed for a specific dedicated cloud datacenter.

**Parameters**:

| Parameter     | Type     | Required | Description                          |
| ------------- | -------- | -------- | ------------------------------------ |
| `serviceName` | `string` | Yes      | The internal name of the vRack.      |
| `datacenter`  | `string` | Yes      | The dedicated cloud datacenter name. |

**Response Type**: `string[]`

**IAM Actions**:

- `vrack:apiovh:dedicatedCloudDatacenter/allowedVrack/get` (required: `true`)

---

### Move Dedicated Cloud Datacenter to Another vRack

**Operation**: `Move Dedicated Cloud Datacenter to Another vRack`

**Path**: `/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move`

**HTTP Method**: `POST`

**Description**: Move a dedicated cloud datacenter from one vRack to another.

**Parameters**:

| Parameter           | Type     | Required | Description                            |
| ------------------- | -------- | -------- | -------------------------------------- |
| `serviceName`       | `string` | Yes      | The internal name of the source vRack. |
| `datacenter`        | `string` | Yes      | The dedicated cloud datacenter name.   |
| `targetServiceName` | `string` | Yes      | The internal name of the target vRack. |

**Response Type**: `vrack.Task`

**IAM Actions**:

- `vrack:apiovh:dedicatedCloudDatacenter/move` (required: `true`)

---

## Authentication

The vRack node requires valid OVHcloud credentials to interact with the API. Ensure you have the following credentials configured in your n8n instance:

- **Application Key** (`applicationKey`)
- **Application Secret** (`applicationSecret`)
- **Consumer Key** (`consumerKey`)
- **Host** (`host`)

These credentials are typically obtained from the [OVHcloud API Console](https://eu.api.ovh.com/).

---

## Error Handling

### Common Errors

| Error Type                          | Description                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| `NodeApiError`                      | Thrown when the API request fails due to invalid credentials or missing parameters. |
| `vrack:apiovh:eligibleServices/get` | Required for async operations. If not provided, the operation may fail.             |

---

## Examples

### Example 1: List All Services in a vRack

**Input**:

```json
{
    "svcOperation": "List Available Services",
    "svcType": "vrack"
}
```

**Expected Output**:

```json
["cloudProject", "ip", "ipLoadbalancing", "dedicatedServer"]
```

---

### Example 2: Add an IP Block to a vRack

**Input**:

```json
{
    "svcOperation": "Add an IP Block to a vRack",
    "svcType": "ip",
    "serviceName": "my-vrack",
    "block": "192.168.1.0/24",
    "region": "eu-west-2"
}
```

**Expected Output**:

```json
{
    "id": "task-id",
    "state": "pending",
    "errors": []
}
```

---

### Example 3: Confirm vRack Termination

**Input**:

```json
{
    "svcOperation": "Confirm vRack Termination",
    "svcType": "confirmTermination",
    "serviceName": "my-vrack",
    "commentary": "Migration to a different vRack",
    "reason": "MIGRATION",
    "futureUse": "REUSE",
    "token": "123456789"
}
```

**Expected Output**:

```json
"Termination confirmed"
```

---

### Example 4: List All Eligible Services for a vRack (Async)

**Input**:

```json
{
    "svcOperation": "List Eligible Services for a vRack",
    "svcType": "eligibleServices",
    "serviceName": "my-vrack"
}
```

**Expected Output (Partial)**:

```json
{
    "status": "pending",
    "errors": [],
    "services": ["cloudProject", "ip"]
}
```

**Expected Output (Complete)**:

```json
{
    "status": "done",
    "errors": [],
    "services": ["cloudProject", "ip", "ipLoadbalancing", "dedicatedServer"]
}
```

---

## Notes

- **Legacy Operations**: Some operations (e.g., dedicated server services) are marked as **Legacy** and may be removed in future versions. Use them with caution.
- **Deprecated Operations**: The `/vrack/{serviceName}/allowedServices` operation is deprecated and will be removed on **2025-12-02**. Use alternative methods for listing allowed services.
- **Async Operations**: Operations like `eligibleServices` may return partial results. Ensure you handle the `status` field to determine if the operation is complete.
- **IAM Actions**: Some operations require specific IAM actions. Ensure these are configured in your OVHcloud account to avoid permission errors.

---

## References

- [OVHcloud vRack API Documentation](https://api.ovh.com/)
- [OVHcloud API Console](https://eu.api.ovh.com/)
- [n8n Node Development Guide](https://docs.n8n.io/integrations/core-nodes/)
- [n8n Workflow Documentation](https://docs.n8n.io/workflows/)
