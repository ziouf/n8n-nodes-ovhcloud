# OVHcloud vRack Services Documentation

> **Version**: 1.0
> **Resource Path**: `/vrackServices`
> **Base URL**: `https://eu.api.ovh.com/v2`

## Overview

This documentation describes the vRack Services API endpoints, their parameters, responses, and associated IAM actions. vRack Services allows you to manage network segments (subnets) within a private network associated with a vRack, enabling seamless integration with OVHcloud managed services.

---

## API Endpoints

### 1. GET /vrackServices/reference/compatibleManagedServiceType

**Description**: List all managed service types that are compatible with vRack Services (IAM resource types).

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description       |
| ------------------- | ------ | ---------- | -------- | ----------------- |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor |
| X-Pagination-Size   | long   | header     | false    | Pagination size   |

#### Response

- **Type**: `string[]`
- **Description**: List of compatible managed service types represented by their IAM resource types.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### Long Description

The compatible managed service types are represented here by their IAM resource types.

---

### 2. GET /vrackServices/reference/region

**Description**: List all vRack Services regions.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description       |
| ------------------- | ------ | ---------- | -------- | ----------------- |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor |
| X-Pagination-Size   | long   | header     | false    | Pagination size   |

#### Response

- **Type**: `vrackServices.Region[]`
- **Description**: List of compatible regions for vRack Services.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

---

### 3. GET /vrackServices/resource

**Description**: List all vRack Services.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type                                | Param Type | Required | Description                  |
| ------------------- | ----------------------------------- | ---------- | -------- | ---------------------------- |
| X-Pagination-Cursor | string                              | header     | false    | Pagination cursor            |
| X-Pagination-Size   | long                                | header     | false    | Pagination size              |
| iamTags             | map[string][]iam.resource.TagFilter | query      | false    | Filter resources on IAM tags |

#### Response

- **Type**: `vrackServices.VrackServicesWithIAM[]`
- **Description**: List of vRack Services with IAM metadata.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### IAM Actions

| Name                                      | Required | Description                                                           |
| ----------------------------------------- | -------- | --------------------------------------------------------------------- |
| vrackServices:apiovh:resource/get         | true     | Retrieve vRack Services resources                                     |
| vrackServices:apiovh:storageNetApp/attach | false    | Required to add an Enterprise File Storage into the vRack Services    |
| vrackServices:apiovh:storageNetApp/detach | false    | Required to remove an Enterprise File Storage from the vRack Services |
| storageNetApp:apiovh:vrackServices/attach | false    | Attach an Enterprise File Storage service to a vRack Services         |

---

### 4. GET /vrackServices/resource/{vrackServicesId}

**Description**: Retrieve a specific vRack Services.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description                             |
| ------------------- | ------ | ---------- | -------- | --------------------------------------- |
| vrackServicesId     | string | path       | true     | Unique identifier of the vRack Services |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor                       |
| X-Pagination-Size   | long   | header     | false    | Pagination size                         |

#### Response

- **Type**: `vrackServices.VrackServicesWithIAM`
- **Description**: A vRack Services with its current state and IAM metadata.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### Errors

- **Error Codes**:
  - `Client::NotFound::VrackServicesNotFound`: The vRack Services does not exist.

#### IAM Actions

| Name                                      | Required | Description                                                                             |
| ----------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| vrackServices:apiovh:resource/get         | true     | Retrieve the vRack Services configuration                                               |
| vrackServices:apiovh:resource/edit        | true     | Update the vRack Services configuration                                                 |
| vrackServices:apiovh:storageNetApp/attach | false    | Required to add an Enterprise File Storage into the vRack Services                      |
| vrackServices:apiovh:storageNetApp/detach | false    | Required to remove an Enterprise File Storage from the vRack Services                   |
| storageNetApp:apiovh:vrackServices/attach | false    | Action required on an Enterprise File Storage service to be added into a vRack Services |

---

### 5. PUT /vrackServices/resource/{vrackServicesId}

**Description**: Update the vRack Services configuration.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: PUT

#### Parameters

| Name               | Type                             | Param Type | Required | Description                                                   |
| ------------------ | -------------------------------- | ---------- | -------- | ------------------------------------------------------------- |
| vrackServicesId    | string                           | path       | true     | Unique identifier of the vRack Services                       |
| VrackServicesInput | vrackServices.VrackServicesInput | body       | true     | Request Body containing the target specification and checksum |

#### Response

- **Type**: `vrackServices.VrackServices`
- **Description**: The updated vRack Services resource.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### Long Description

The request works as follows:

1. You define a new target specification in the request payload.
2. If the specification is validated, the resource is returned with updated `targetSpec` and `checksum` values.
3. The request is processed by one or several **asynchronous** tasks that reconcile the `currentState` with the `targetSpec`.

#### Asynchronous Processing

- To follow the processing, poll the vRack Services resource with `GET /vrackServices/resource/{vrackServicesId}`.
  - As soon as its `resourceStatus` is *READY*, the requested specification can be considered applied to the vRack Services.
  - The `checksum` helps detect concurrency cases: if the polled `checksum` differs from the one sent in the request, another update is in progress.
  - In case of processing errors (e.g., `resourceStatus` is *ERROR*), the current configuration remains active, but new update requests are refused until support intervention.
  - An overview of ongoing tasks is available via the `currentTasks` attribute.
  - More details on a task are provided by `GET /vrackServices/resource/{vrackServicesId}/task/{taskId}`.

#### Seamless Configuration Actions

The request can combine the following seamless actions (no service cut during updates):

- Create a Subnet
- Delete a Subnet without any Service Endpoint
- Update a Subnet:
  - Create one or several Service Endpoints

**Note**: A Subnet with several Service Endpoints can be created in the same payload.

#### Not Seamless Configuration Actions

Modifying the following Subnet characteristics **will** result in a service cut during the update:

- CIDR
- VLAN (if changing from or to a tagged state)
- Display name

#### Errors

- **Error Codes**:
  | Error Code | Description |
  |------------|-------------|
  | `Client::BadRequest::ChecksumBadFormat` | The provided checksum is not in the correct format |
  | `Client::BadRequest::InvalidJSON` | The request payload is not valid JSON |
  | `Client::BadRequest::ManagedServiceAlreadyAttached` | The managed service is already attached to this vRack Services |
  | `Client::BadRequest::ManagedServiceDuplicated` | The same managed service is specified multiple times |
  | `Client::BadRequest::ManagedServiceIncompatibleType` | The managed service type is not compatible with vRack Services |
  | `Client::BadRequest::ManagedServiceNotAvailable` | The managed service is not available in the specified region |
  | `Client::BadRequest::ManagedServiceRegionMismatch` | The managed service region does not match the vRack Services region |
  | `Client::BadRequest::ManagedServiceURNBadFormat` | The managed service URN is not in the correct format |
  | `Client::BadRequest::ServiceRangeCIDRNotInSubnetCIDR` | The Service Range CIDR is not within the Subnet CIDR |
  | `Client::BadRequest::ServiceRangeCIDRNotNetworkIP` | The Service Range CIDR is not a valid network IP |
  | `Client::BadRequest::ServiceRangeCIDRNotPrivateNetwork` | The Service Range CIDR is not a private network address (RFC1918) |
  | `Client::BadRequest::ServiceRangeCIDRPrefixLengthOutOfRange` | The Service Range CIDR prefix length is out of the authorized range (/27 to /29) |
  | `Client::BadRequest::ServiceRangeIPsCapacityExceeded` | The number of IPs in the Service Range exceeds the available capacity |
  | `Client::BadRequest::SubnetCIDRNotNetworkIP` | The Subnet CIDR is not a valid network IP |
  | `Client::BadRequest::SubnetCIDRNotPrivateNetwork` | The Subnet CIDR is not a private network address (RFC1918) |
  | `Client::BadRequest::SubnetCIDROverlap` | The Subnet CIDR overlaps with an existing subnet |
  | `Client::BadRequest::SubnetCIDRPrefixLengthIncorrect` | The Subnet CIDR prefix length is incorrect (must be between /16 and /24) |
  | `Client::BadRequest::SubnetDisplayNameBadFormat` | The Subnet display name format is incorrect (must follow `^[ a-zA-Z0-9-_.]{0,40}$`) |
  | `Client::BadRequest::SubnetLimitExceeded` | The maximum number of subnets (1) has been exceeded |
  | `Client::BadRequest::SubnetVLANOutOfRange` | The Subnet VLAN is out of the authorized range (2-4094 or null for untagged) |
  | `Client::NotFound::ManagedServiceNotFound` | The managed service does not exist |
  | `Client::NotFound::VrackServicesNotFound` | The vRack Services does not exist |
  | `Client::PreconditionFailed::ChecksumMismatch` | The provided checksum does not match the current vRack Services checksum |
  | `Client::Locked::ManagedServiceLocked` | The managed service is locked and cannot be modified |
  | `Client::Locked::VrackServicesLocked` | The vRack Services is locked and cannot be modified |

---

### 6. GET /vrackServices/resource/{vrackServicesId}/eligibleManagedService

**Description**: List every managed service eligible to the requested vRack Services.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description                             |
| ------------------- | ------ | ---------- | -------- | --------------------------------------- |
| vrackServicesId     | string | path       | true     | Unique identifier of the vRack Services |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor                       |
| X-Pagination-Size   | long   | header     | false    | Pagination size                         |

#### Response

- **Type**: `vrackServices.EligibleManagedService[]`
- **Description**: List of managed services eligible for attachment to the vRack Services.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### IAM Actions

| Name                                                     | Required | Description                                                                             |
| -------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| vrackServices:apiovh:resource/eligibleManagedService/get | true     | Retrieve eligible managed services                                                      |
| vrackServices:apiovh:storageNetApp/attach                | false    | Required to add an Enterprise File Storage into the vRack Services                      |
| storageNetApp:apiovh:vrackServices/attach                | false    | Action required on an Enterprise File Storage service to be added into a vRack Services |

---

### 7. GET /vrackServices/resource/{vrackServicesId}/task

**Description**: List all asynchronous operations related to the vRack Services.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description                             |
| ------------------- | ------ | ---------- | -------- | --------------------------------------- |
| vrackServicesId     | string | path       | true     | Unique identifier of the vRack Services |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor                       |
| X-Pagination-Size   | long   | header     | false    | Pagination size                         |

#### Response

- **Type**: `common.Task[]`
- **Description**: List of asynchronous tasks related to the vRack Services.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### IAM Actions

| Name                                   | Required | Description                   |
| -------------------------------------- | -------- | ----------------------------- |
| vrackServices:apiovh:resource/task/get | true     | Retrieve vRack Services tasks |

---

### 8. GET /vrackServices/resource/{vrackServicesId}/task/{taskId}

**Description**: Get the details of a specific task related to the vRack Services.

**API Status**: Stable production version (`PRODUCTION`)

**HTTP Method**: GET

#### Parameters

| Name                | Type   | Param Type | Required | Description                             |
| ------------------- | ------ | ---------- | -------- | --------------------------------------- |
| vrackServicesId     | string | path       | true     | Unique identifier of the vRack Services |
| taskId              | uuid   | path       | true     | Unique identifier of the task           |
| X-Pagination-Cursor | string | header     | false    | Pagination cursor                       |
| X-Pagination-Size   | long   | header     | false    | Pagination size                         |

#### Response

- **Type**: `common.Task`
- **Description**: Details of the specific task.

#### Authentication

- **Required**: Yes
- **No Authentication**: false

#### Errors

- **Error Codes**:
  - `Client::BadRequest::VrackServicesNotFound`: The vRack Services does not exist.

#### IAM Actions

| Name                                   | Required | Description           |
| -------------------------------------- | -------- | --------------------- |
| vrackServices:apiovh:resource/task/get | true     | Retrieve task details |

---

## Models

### vrackServices.Region

**Description**: A vRack Services compatible localization.

**Properties**:

| Property | Type   | Description |
| -------- | ------ | ----------- |
| name     | string | Region name |

---

### vrackServices.EligibleManagedService

**Description**: List of managed services eligible to the requested vRack Services.

**Properties**:

| Property           | Type     | Description                                                                                                       |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| managedServiceType | string   | IAM resource type. Compatible managed service types are listed by `/reference/compatibleManagedServiceType` call. |
| managedServiceURNs | string[] | List of IAM resource URNs                                                                                         |

---

### vrackServices.VrackServicesWithIAM

**Description**: A vRack Services with IAM metadata.

**Properties**:

| Property       | Type                                    | Description                                                    |
| -------------- | --------------------------------------- | -------------------------------------------------------------- |
| id             | string                                  | Unique identifier of the vRack Services                        |
| iam            | iam.ResourceMetadata                    | IAM resource metadata                                          |
| checksum       | string                                  | Computed hash used to control concurrent modification requests |
| createdAt      | datetime                                | Date of the vRack Services delivery                            |
| updatedAt      | datetime                                | Date of the last vRack Services update                         |
| resourceStatus | vrackServices.ResourceStatusEnum        | Reflects the readiness of the vRack Services                   |
| currentState   | vrackServices.VrackServicesCurrentState | Current configuration applied to the vRack Services            |
| targetSpec     | vrackServices.VrackServicesTargetSpec   | Last target specification of the vRack Services                |
| currentTasks   | common.CurrentTask[]                    | Asynchronous operations ongoing on the vRack Services          |

---

### iam.ResourceMetadata

**Description**: IAM resource metadata embedded in services models.

**Properties**:

| Property | Type                           | Description                                                                |
| -------- | ------------------------------ | -------------------------------------------------------------------------- |
| id       | uuid                           | Unique identifier of the resource                                          |
| state    | iam.ResourceMetadata.StateEnum | Resource state                                                             |
| tags     | map[string]string              | Resource tags. Tags that were internally computed are prefixed with `ovh:` |
| urn      | string                         | Unique resource name used in policies                                      |

---

### iam.ResourceMetadata.StateEnum

**Description**: Resource state.

**Enum Values**:

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### vrackServices.VrackServices

**Description**: A vRack Services.

**Properties**:

| Property       | Type                                    | Description                                                                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| id             | string                                  | Unique identifier                                                                                                 |
| checksum       | string                                  | Computed hash used to control concurrent modification requests. Represents the current target specification value |
| createdAt      | datetime                                | Date of the vRack Services delivery                                                                               |
| updatedAt      | datetime                                | Date of the last vRack Services update                                                                            |
| resourceStatus | vrackServices.ResourceStatusEnum        | Reflects the readiness of the vRack Services                                                                      |
| targetSpec     | vrackServices.VrackServicesTargetSpec   | Last target specification of the vRack Services                                                                   |
| currentState   | vrackServices.VrackServicesCurrentState | Current configuration applied to the vRack Services                                                               |
| currentTasks   | common.CurrentTask[]                    | Asynchronous operations ongoing on the vRack Services                                                             |

---

### vrackServices.VrackServicesCurrentState

**Description**: Current state of the vRack Services.

**Properties**:

| Property      | Type                            | Description                                                                                        |
| ------------- | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| productStatus | vrackServices.ProductStatusEnum | Product status of the vRack Services                                                               |
| region        | string                          | Region of the vRack Services. List of compatible regions can be retrieved from `/reference/region` |
| subnets       | vrackServices.Subnet[]          | Subnets of the current vRack Services                                                              |
| vrackId       | string                          | vRack associated to the vRack Services                                                             |

---

### vrackServices.ProductStatusEnum

**Description**: Product status of the vRack Services.

**Enum Values**:

- `ACTIVE`
- `DRAFT`
- `SUSPENDED`

---

### vrackServices.Subnet

**Description**: A network segment of the associated vRack. Represents an IP addressing scheme inside the private network.

**Properties**:

| Property         | Type                            | Description                                                    |
| ---------------- | ------------------------------- | -------------------------------------------------------------- |
| cidr             | ipv4Block                       | IP address range of the subnet in CIDR format                  |
| displayName      | string                          | Display name of the subnet                                     |
| serviceEndpoints | vrackServices.ServiceEndpoint[] | Service endpoints of the subnet                                |
| serviceRange     | vrackServices.ServiceRange      | Defines a smaller subnet dedicated to the managed services IPs |
| vlan             | long                            | Unique inner VLAN that allows subnets segregation              |

---

### vrackServices.ServiceEndpoint

**Description**: A Service Endpoint provides access to managed services directly from one or several private IPs in the associated vRack.

**Properties**:

| Property          | Type                     | Description                                                                                                                             |
| ----------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| endpoints         | vrackServices.Endpoint[] | Endpoints representing the IPs assigned to the managed services                                                                         |
| managedServiceURN | string                   | IAM Resource URN of the managed service. Compatible managed service types are listed by `/reference/compatibleManagedServiceType` call. |

---

### vrackServices.Endpoint

**Description**: Endpoint holding a managed service IP.

**Properties**:

| Property    | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| ip          | ipv4   | IP address assigned by OVHcloud               |
| description | string | IP description defined in the managed service |

---

### vrackServices.ServiceRange

**Description**: Definition of the range dedicated to the subnet's services.

**Properties**:

| Property     | Type      | Description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| cidr         | ipv4Block | CIDR dedicated to the subnet's services                      |
| usedIps      | long      | Number of service range IPs assigned to the managed services |
| reservedIps  | long      | Number of service range IPs reserved by OVHcloud             |
| remainingIps | long      | Number of remaining IPs in the service range                 |

---

### vrackServices.ResourceStatusEnum

**Description**: Reflects the readiness of the vRack Services. A new target specification request will be accepted only in `READY` status.

**Enum Values**:

- `CREATING`
- `DELETING`
- `ERROR`
- `READY`
- `UPDATING`

---

### vrackServices.VrackServicesTargetSpec

**Description**: Target specification of the vRack Services.

**Properties**:

| Property | Type                         | Description                                                                |
| -------- | ---------------------------- | -------------------------------------------------------------------------- |
| subnets  | vrackServices.TargetSubnet[] | Target specification of the subnets. Maximum one subnet per vRack Services |

---

### vrackServices.TargetSubnet

**Description**: Target specification of a subnet.

**Properties**:

| Property         | Type                                  | Description                                                                                                                                |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| cidr             | ipv4Block                             | IP address range of the subnet in CIDR format. Must be a private network address (RFC1918). Authorized range for prefix length: /16 to /24 |
| displayName      | string                                | Display name of the subnet. Format must follow `^[ a-zA-Z0-9-_.]{0,40}$`                                                                   |
| serviceEndpoints | vrackServices.TargetServiceEndpoint[] | Target specification of the Service Endpoints                                                                                              |
| serviceRange     | vrackServices.TargetServiceRange      | Defines a smaller subnet dedicated to the managed service IPs                                                                              |
| vlan             | long                                  | Unique inner VLAN that allows subnets segregation. Authorized values: [2 - 4094] and `null` (untagged traffic)                             |

---

### vrackServices.TargetServiceEndpoint

**Description**: Target specification of a Service Endpoint.

**Properties**:

| Property          | Type   | Description                                                                                                                                                                                     |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| managedServiceURN | string | IAM Resource URN of the managed service. Managed service Region must match vRack Services Region. Compatible managed service types are listed by `/reference/compatibleManagedServiceType` call |

---

### vrackServices.TargetServiceRange

**Description**: Target specification of the range dedicated to the subnet's services.

**Properties**:

| Property | Type      | Description                                                                                                                                                                                          |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cidr     | ipv4Block | IP address range dedicated to the subnet's services in CIDR format. Must be a private network address (RFC1918). Must be a sub-network of the subnet. Authorized range for prefix length: /27 to /29 |

---

### common.Task

**Description**: Asynchronous operation.

**Properties**:

| Property   | Type                  | Description                                  |
| ---------- | --------------------- | -------------------------------------------- |
| id         | uuid                  | Identifier of the task                       |
| type       | string                | Type of the task                             |
| status     | common.TaskStatusEnum | Current global status of the task            |
| message    | string                | Description of the task                      |
| progress   | common.TaskProgress[] | Progress steps of the asynchronous operation |
| startedAt  | datetime              | Starting date of the task                    |
| finishedAt | datetime              | Ending date of the task                      |
| errors     | common.TaskError[]    | Errors that occurred on the task             |
| link       | string                | Link to the related resource                 |

---

### common.TaskStatusEnum

**Description**: Current global status of a task.

**Enum Values**:

- `DONE`
- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### common.TaskError

**Description**: Errors that occurred on the task.

**Properties**:

| Property | Type   | Description       |
| -------- | ------ | ----------------- |
| message  | string | Error description |

---

### common.TaskProgress

**Description**: Detailed information about an asynchronous operation progress steps.

**Properties**:

| Property | Type                  | Description                         |
| -------- | --------------------- | ----------------------------------- |
| name     | string                | Progress step name                  |
| status   | common.TaskStatusEnum | Current status of the progress step |

---

## IAM Actions Overview

vRack Services operations require specific IAM (Identity and Access Management) permissions depending on the action being performed. Below is a summary of the required IAM actions for each endpoint:

- **GET /vrackServices/reference/compatibleManagedServiceType**: `vrackServices:apiovh:resource/get`
- **GET /vrackServices/reference/region**: `vrackServices:apiovh:resource/get`
- **GET /vrackServices/resource**: `vrackServices:apiovh:resource/get`
- **GET /vrackServices/resource/{vrackServicesId}**: `vrackServices:apiovh:resource/get`
- **PUT /vrackServices/resource/{vrackServicesId}**: `vrackServices:apiovh:resource/edit` (required for all updates)
- **GET /vrackServices/resource/{vrackServicesId}/eligibleManagedService**: `vrackServices:apiovh:resource/eligibleManagedService/get`
- **GET /vrackServices/resource/{vrackServicesId}/task**: `vrackServices:apiovh:resource/task/get`
- **GET /vrackServices/resource/{vrackServicesId}/task/{taskId}**: `vrackServices:apiovh:resource/task/get`

Additional IAM actions may be required depending on the specific operations being performed, such as attaching or detaching Enterprise File Storage services.

---

## Usage Notes

### Pagination

All list operations support pagination via `X-Pagination-Cursor` and `X-Pagination-Size` headers. These allow you to navigate through large result sets efficiently.

### Concurrency Control

The `checksum` field is used to control concurrent modifications. Always check the current `checksum` before sending an update request, and include it in the request payload to ensure no other updates are in progress.

### Service Status

The `resourceStatus` field indicates the readiness of the vRack Services:

- `READY`: The vRack Services is stable and ready for updates.
- `CREATING`: The vRack Services is being created.
- `DELETING`: The vRack Services is being deleted.
- `UPDATING`: The vRack Services is being updated.
- `ERROR`: The vRack Services encountered an error.

### Asynchronous Tasks

vRack Services updates are processed asynchronously. Use the task endpoints to monitor progress and check for errors:

- `GET /vrackServices/resource/{vrackServicesId}/task` to list all tasks
- `GET /vrackServices/resource/{vrackServicesId}/task/{taskId}` to get task details
- Poll the vRack Services resource until `resourceStatus` is `READY`

### Error Handling

When errors occur during asynchronous processing:

- The current vRack Services configuration remains active
- New update requests are refused until support intervention
- Errors are listed in the `errors` field of the task

---

## Best Practices

1. **Always Check Resource Status**: Before sending an update request, ensure the vRack Services `resourceStatus` is `READY`.
2. **Use Concurrency Control**: Include the current `checksum` in update requests to prevent concurrent modifications.
3. **Monitor Asynchronous Tasks**: Use the task endpoints to monitor progress and handle errors appropriately.
4. **Validate IAM Permissions**: Ensure you have the required IAM permissions before attempting operations.
5. **Private Network Addresses**: Always use private network addresses (RFC1918) for subnets and service ranges.
6. **Authorized Ranges**: Follow the authorized CIDR prefix length ranges for subnets (/16 to /24) and service ranges (/27 to /29).
7. **Display Name Formats**: Ensure display names follow the required format patterns.
8. **Single Subnet**: Remember that vRack Services supports only one subnet at a time.

---

## Support

For issues that require support intervention:

- The vRack Services remains in a stable state (no configuration changes are applied)
- Errors are listed in the task details
- Contact OVHcloud support with the task ID for further assistance

The task must be resolved before new update requests can be processed.

---

## References

- [OVHcloud API Overview](https://api.ovh.com/)
- [IAM Documentation](https://docs.ovh.com/en/public/iam/)
- [vRack Documentation](https://docs.ovh.com/en/public/network/vrack/)
- [Managed Services Documentation](https://docs.ovh.com/en/public/managed-services/)

---

## Version History

- **v1.0**: Initial stable production version
