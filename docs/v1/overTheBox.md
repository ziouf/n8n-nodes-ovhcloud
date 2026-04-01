# OVHcloud OverTheBox Node Documentation

## Overview

The **OverTheBox** node is an n8n node designed to interact with the OVHcloud OverTheBox API. It provides a set of operations to manage OverTheBox services, hardware, devices, backups, logs, remote accesses, and migrations.

This documentation covers the **v1** API version of the OverTheBox node. The API is currently in **PRODUCTION** status, indicating a stable and reliable version for use.

---

## Prerequisites

### Credentials

Before using the OverTheBox node, you must configure the OVHcloud API credentials in n8n. These credentials include:

- **Host**: The OVHcloud API host URL (e.g., `api.ovh.com`)
- **Application Key**: Your OVHcloud application key
- **Application Secret**: Your OVHcloud application secret
- **Consumer Key**: Your OVHcloud consumer key

---

## Node Operations

### `/overTheBox`

#### Description

List available services.

#### HTTP Method

`GET`

#### Parameters

| Name      | Data Type                             | Param Type | Required | Description                  |
| --------- | ------------------------------------- | ---------- | -------- | ---------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | `query`    | No       | Filter resources on IAM tags |

#### IAM Actions

- `overTheBox:apiovh:get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/availableOffers`

#### Description

List the available offers for the new call.

#### HTTP Method

`GET`

#### Parameters

None

#### IAM Actions

- `account:apiovh:overTheBox/availableOffers/get` (Required)

#### Response Type

`price.OverTheBox.OfferEnum[]`

---

### `/overTheBox/devices`

#### Description

Get the list of devices connected from the same IP address.

#### HTTP Method

`POST`

#### Parameters

None

#### IAM Actions

- `account:apiovh:overTheBox/devices/create` (Required)

#### Response Type

`overTheBox.DeviceForRegistration[]`

---

### `/overTheBox/hardware`

#### Description

List available services.

#### HTTP Method

`GET`

#### Parameters

| Name      | Data Type                             | Param Type | Required | Description                  |
| --------- | ------------------------------------- | ---------- | -------- | ---------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | `query`    | No       | Filter resources on IAM tags |

#### IAM Actions

- `overTheBoxHardware:apiovh:get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/hardware/available`

#### Description

List hardware that can be linked to a service.

#### HTTP Method

`GET`

#### Parameters

None

#### IAM Actions

- `account:apiovh:overTheBoxHardware/available/get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/hardware/{hardwareName}`

#### Description

Hardware properties.

#### HTTP Method

`GET`

#### Parameters

| Name           | Data Type | Param Type | Required | Description                        |
| -------------- | --------- | ---------- | -------- | ---------------------------------- |
| `hardwareName` | `string`  | `path`     | Yes      | The internal name of your hardware |

#### IAM Actions

- `overTheBoxHardware:apiovh:get` (Required)

#### Response Type

`overTheBox.HardwareWithIAM`

---

### `/overTheBox/{serviceName}`

#### Description

Service.

#### HTTP Methods

##### `DELETE`

Resiliate a service.

| Name          | Data Type | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:delete` (Required)
- **Response Type**: `void`

---

##### `GET`

Get this object properties.

| Name          | Data Type | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:get` (Required)
- **Response Type**: `overTheBox.ServiceWithIAM`

---

##### `PUT`

Alter this object properties.

| Name          | Data Type            | Param Type | Required | Description                                |
| ------------- | -------------------- | ---------- | -------- | ------------------------------------------ |
| `service`     | `overTheBox.Service` | `body`     | Yes      | New object properties                      |
| `serviceName` | `string`             | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:put` (Required)
- **Response Type**: `void`

---

### `/overTheBox/{serviceName}/autoMTU`

#### Description

Change the value of autoMTU.

#### HTTP Method

`PUT`

#### Parameters

| Name          | Data Type                        | Param Type | Required | Description                                |
| ------------- | -------------------------------- | ---------- | -------- | ------------------------------------------ |
| `mtuAuto`     | `overTheBox.AvailableStatusEnum` | `body`     | Yes      | Enable or disable autoMTU                  |
| `serviceName` | `string`                         | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:autoMTU/edit` (Required)

#### Response Type

`void`

---

### `/overTheBox/{serviceName}/availableReleaseChannels`

#### Description

List available release channels for this service.

#### HTTP Method

`GET`

#### Parameters

| Name          | Data Type | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:availableReleaseChannels/get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/{serviceName}/backups`

#### Description

List the overTheBox.Backup objects.

#### HTTP Method

`GET`

#### Parameters

| Name          | Data Type | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:backups/get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/{serviceName}/backups/{backupId}`

#### Description

Backup.

#### HTTP Methods

##### `DELETE`

Delete a backup.

| Name          | Data Type | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `backupId`    | `string`  | `path`     | Yes      | The id of the backup                       |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:backups/delete` (Required)
- **Response Type**: `void`

---

##### `GET`

Get this object properties.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `backupId`    | `string` | `path`     | Yes      | The id of the backup                       |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:backups/get` (Required)
- **Response Type**: `overTheBox.Backup`

---

### `/overTheBox/{serviceName}/cancelResiliation`

#### Description

Cancel the resiliation of the Service.

#### HTTP Method

`POST`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:cancelResiliation` (Required)

#### Response Type

`void`

---

### `/overTheBox/{serviceName}/changeContact`

#### Description

Change the contacts of this service.

#### HTTP Method

`POST`

#### Parameters

| Name             | DataType                     | Param Type | Required | Description                                |
| ---------------- | ---------------------------- | ---------- | -------- | ------------------------------------------ |
| `contactAdmin`   | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as admin contact        |
| `contactBilling` | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as billing contact      |
| `contactTech`    | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as tech contact         |
| `serviceName`    | `string`                     | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:changeContact` (Required)

#### Response Type

`long[]`

---

### `/overTheBox/{serviceName}/device`

#### Description

Device.

#### HTTP Methods

##### `DELETE`

Unlink a device from a service.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:device/delete` (Required)
- **Response Type**: `void`

---

##### `GET`

Get this object properties.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:device/get` (Required)
- **Response Type**: `overTheBox.Device`

---

### `/overTheBox/{serviceName}/device/actions`

#### Description

List the overTheBox.DeviceAction objects.

#### HTTP Methods

##### `GET`

List of actions scheduled for this device.

| Name          | DataType                      | Param Type | Required | Description                                |
| ------------- | ----------------------------- | ---------- | -------- | ------------------------------------------ |
| `name`        | `string`                      | `query`    | No       | Filter the value of name property (=)      |
| `serviceName` | `string`                      | `path`     | Yes      | The internal name of your overTheBox offer |
| `status`      | `overTheBox.ActionStatusEnum` | `query`    | No       | Filter the value of status property (=)    |

- **IAM Actions**:
  - `overTheBox:apiovh:device/actions/get` (Required)
- **Response Type**: `string[]`

---

##### `POST`

Create a device action on the device.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `name`        | `string` | `body`     | Yes      | Name of the action                         |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:device/actions/create` (Required)
- **Response Type**: `overTheBox.DeviceAction`

---

### `/overTheBox/{serviceName}/device/actions/{actionId}`

#### Description

Device action.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `actionId`    | `string` | `path`     | Yes      | The id of the action                       |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/actions/get` (Required)

#### Response Type

`overTheBox.DeviceAction`

---

### `/overTheBox/{serviceName}/device/availableActions`

#### Description

List the available device actions.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/availableActions/get` (Required)

#### Response Type

`overTheBox.AvailableDeviceAction[]`

---

### `/overTheBox/{serviceName}/device/backup`

#### Description

Create a backup.

#### HTTP Method

`POST`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/backup/create` (Required)

#### Response Type

`overTheBox.DeviceAction`

---

### `/overTheBox/{serviceName}/device/hardware`

#### Description

Hardware properties.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/hardware/get` (Required)

#### Response Type

`overTheBox.Hardware`

---

### `/overTheBox/{serviceName}/device/logs`

#### Description

Generate a temporary URL to retrieve device logs.

#### HTTP Method

`POST`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/logs/create` (Required)

#### Response Type

`overTheBox.TemporaryLogsLink`

---

### `/overTheBox/{serviceName}/device/restoreBackup`

#### Description

Create a group of actions to restore a given backup.

#### HTTP Method

`POST`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `backupId`    | `string` | `body`     | Yes      | The id of the backup to restore            |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:device/restoreBackup` (Required)

#### Response Type

`overTheBox.DeviceAction[]`

---

### `/overTheBox/{serviceName}/ips`

#### Description

List IP assigned to an OverTheBox service.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:ips/get` (Required)

#### Response Type

`ip[]`

---

### `/overTheBox/{serviceName}/ips/{ip}`

#### Description

Get details IP assigned to an OverTheBox service.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |
| `ip`          | `ip`     | `path`     | Yes      | Ip                                         |

#### IAM Actions

- `overTheBox:apiovh:ips/get` (Required)

#### Response Type

`otb.service.ip`

---

### `/overTheBox/{serviceName}/ipv6`

#### Description

Change the status of IPv6 on this service.

#### HTTP Method

`PUT`

#### Parameters

| Name          | DataType  | Param Type | Required | Description                                |
| ------------- | --------- | ---------- | -------- | ------------------------------------------ |
| `enabled`     | `boolean` | `body`     | Yes      | Enabled/disabled IPv6                      |
| `serviceName` | `string`  | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:ipv6/edit` (Required)

#### Response Type

`overTheBox.Task`

---

### `/overTheBox/{serviceName}/linkDevice`

#### Description

Link a device to this service.

#### HTTP Method

`POST`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `deviceId`    | `string` | `body`     | Yes      | The id of the device                       |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:linkDevice` (Required)

#### Response Type

`void`

---

### `/overTheBox/{serviceName}/linkHardware`

#### Description

Link an available hardware to this service.

#### HTTP Method

`POST`

#### Parameters

| Name           | DataType | Param Type | Required | Description                                |
| -------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `hardwareName` | `string` | `body`     | Yes      | The internal name of your hardware         |
| `serviceName`  | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:linkHardware` (Required)

#### Response Type

`void`

---

### `/overTheBox/{serviceName}/log/kind`

#### Description

Access to available log kind.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:log/kind/get` (Required)

#### Response Type

`string[]`

---

### `/overTheBox/{serviceName}/log/kind/{name}`

#### Description

Access to available log kind.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |
| `name`        | `string` | `path`     | Yes      | Name                                       |

#### IAM Actions

- `overTheBox:apiovh:log/kind/get` (Required)

#### Response Type

`dbaas.logs.LogKind`

---

### `/overTheBox/{serviceName}/log/subscription`

#### Description

Create a subscription from overthebox logs to a pre-existing LDP stream.

#### HTTP Methods

##### `GET`

List subscription IDs for a cluster.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |
| `kind`        | `string` | `query`    | No       | Filter on a specific kind (e.g., audit)    |

- **IAM Actions**:
  - `overTheBox:apiovh:log/subscription/get` (Required)
- **Response Type**: `uuid[]`

---

##### `POST`

Create a subscription from logs to a pre-existing LDP stream.

| Name                      | DataType                             | Param Type | Required | Description                                |
| ------------------------- | ------------------------------------ | ---------- | -------- | ------------------------------------------ |
| `serviceName`             | `string`                             | `path`     | Yes      | The internal name of your overTheBox offer |
| `LogSubscriptionCreation` | `dbaas.logs.LogSubscriptionCreation` | `body`     | Yes      | Request Body                               |

- **IAM Actions**:
  - `overTheBox:apiovh:log/subscription/create` (Required)
  - `ldp:apiovh:output/graylog/stream/forwardTo` (Required on the targeted LDP service)
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`

---

### `/overTheBox/{serviceName}/log/subscription/{subscriptionId}`

#### Description

Create a subscription from overthebox logs to a pre-existing LDP stream.

#### HTTP Methods

##### `DELETE`

Delete a subscription.

| Name             | DataType | Param Type | Required | Description                                |
| ---------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName`    | `string` | `path`     | Yes      | The internal name of your overTheBox offer |
| `subscriptionId` | `uuid`   | `path`     | Yes      | Subscription ID                            |

- **IAM Actions**:
  - `overTheBox:apiovh:log/subscription/delete` (Required)
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`

---

##### `GET`

Get subscription details.

| Name             | DataType | Param Type | Required | Description                                |
| ---------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName`    | `string` | `path`     | Yes      | The internal name of your overTheBox offer |
| `subscriptionId` | `uuid`   | `path`     | Yes      | Subscription ID                            |

- **IAM Actions**:
  - `overTheBox:apiovh:log/subscription/get` (Required)
- **Response Type**: `dbaas.logs.LogSubscription`

---

### `/overTheBox/{serviceName}/log/url`

#### Description

Generate a temporary URL to retrieve logs.

#### HTTP Method

`POST`

#### Parameters

| Name             | DataType                    | Param Type | Required | Description                                |
| ---------------- | --------------------------- | ---------- | -------- | ------------------------------------------ |
| `serviceName`    | `string`                    | `path`     | Yes      | The internal name of your overTheBox offer |
| `LogUrlCreation` | `dbaas.logs.LogUrlCreation` | `body`     | Yes      | Request Body                               |

#### IAM Actions

- `overTheBox:apiovh:log/url/create` (Required)

#### Response Type

`dbaas.logs.TemporaryLogsLink`

---

### `/overTheBox/{serviceName}/migration/changeOffers`

#### Description

Migrate to the selected overTheBox offer.

#### HTTP Method

`POST`

#### Parameters

| Name                | DataType | Param Type | Required | Description                                                     |
| ------------------- | -------- | ---------- | -------- | --------------------------------------------------------------- |
| `hardwareName`      | `string` | `body`     | No       | Name of the hardware                                            |
| `offer`             | `string` | `body`     | Yes      | Offer name to migrate to                                        |
| `serviceName`       | `string` | `path`     | Yes      | The internal name of your overTheBox offer                      |
| `shippingContactID` | `string` | `body`     | No       | In case of hardware and if a shipping custom address is desired |

#### IAM Actions

- `overTheBox:apiovh:migration/changeOffers` (Required)

#### Response Type

`overTheBox.OrderMigration`

---

### `/overTheBox/{serviceName}/migration/offers`

#### Description

List all available offers one can migrate to.

#### HTTP Method

`GET`

#### Parameters

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:migration/offers/get` (Required)

#### Response Type

`overTheBox.AvailableMigrationOffer[]`

---

### `/overTheBox/{serviceName}/remoteAccesses`

#### Description

List the overTheBox.RemoteAccess objects.

#### HTTP Methods

##### `GET`

List of remote accesses for the service.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:remoteAccesses/get` (Required)
- **Response Type**: `string[]`

---

##### `POST`

Create a new remote access for the service.

| Name             | DataType   | Param Type | Required | Description                                                                                                     |
| ---------------- | ---------- | ---------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `allowedIp`      | `ipBlock`  | `body`     | No       | IP block from which the remote access will be allowed (the default value is the IP from which the call is made) |
| `expirationDate` | `datetime` | `body`     | No       | The expirationDate of the remote access (default 1 day)                                                         |
| `exposedPort`    | `long`     | `body`     | Yes      | The port that the device will expose                                                                            |
| `publicKey`      | `string`   | `body`     | No       | The remote user public key authorized on the device (for SSH purpose)                                           |
| `serviceName`    | `string`   | `path`     | Yes      | The internal name of your overTheBox offer                                                                      |

- **IAM Actions**:
  - `overTheBox:apiovh:remoteAccesses/create` (Required)
- **Response Type**: `overTheBox.RemoteAccess`

---

### `/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}`

#### Description

If authorized, a remote access will expose a port, allowing an access to the device remotely.

#### HTTP Methods

##### `DELETE`

Delete a remote access.

| Name             | DataType | Param Type | Required | Description                                |
| ---------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `remoteAccessId` | `string` | `path`     | Yes      | The id of the remote access                |
| `serviceName`    | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:remoteAccesses/delete` (Required)
- **Response Type**: `void`

---

##### `GET`

Get this object properties.

| Name             | DataType | Param Type | Required | Description                                |
| ---------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `remoteAccessId` | `string` | `path`     | Yes      | The id of the remote access                |
| `serviceName`    | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:remoteAccesses/get` (Required)
- **Response Type**: `overTheBox.RemoteAccess`

---

### `/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize`

#### Description

Authorize the remote access.

#### HTTP Method

`POST`

#### Parameters

| Name             | DataType | Param Type | Required | Description                                |
| ---------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `remoteAccessId` | `string` | `path`     | Yes      | The id of the remote access                |
| `serviceName`    | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

#### IAM Actions

- `overTheBox:apiovh:remoteAccesses/authorize` (Required)

#### Response Type

`void`

---

### `/overTheBox/{serviceName}/serviceInfos`

#### Description

Get service information.

#### HTTP Methods

##### `GET`

Get service information.

| Name          | DataType | Param Type | Required | Description                                |
| ------------- | -------- | ---------- | -------- | ------------------------------------------ |
| `serviceName` | `string` | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:serviceInfos/get` (Required)
- **Response Type**: `services.Service`

---

##### `PUT`

Update service information.

| Name          | DataType           | Param Type | Required | Description                                |
| ------------- | ------------------ | ---------- | -------- | ------------------------------------------ |
| `service`     | `services.Service` | `body`     | Yes      | New object properties                      |
| `serviceName` | `string`           | `path`     | Yes      | The internal name of your overTheBox offer |

- **IAM Actions**:
  - `overTheBox:apiovh:serviceInfos/edit` (Required)
- **Response Type**: `void`

---

## API Status

All operations in this API version are marked as **PRODUCTION** status, indicating they are stable and suitable for use in production environments.

---

## Authentication

All operations require authentication via the OVHcloud API credentials configured in n8n. The credentials are used to sign requests with the OVHcloud signature algorithm (SHA1).

---

## Error Handling

- Use `NodeApiError` for n8n-specific errors.
- Validate inputs before making API calls.
- Handle API errors gracefully with meaningful messages.
- Throw descriptive error messages with context.

---

## Usage Notes

- Ensure you have configured the OVHcloud API credentials in n8n before using this node.
- Follow the IAM action requirements for each operation.
- Use the appropriate HTTP method and parameters for the desired operation.
- Refer to the response type documentation to understand the expected output format.

---

## Support & Troubleshooting

- For issues or questions, refer to the [OVHcloud API Documentation](https://api.ovh.com/).
- Ensure your credentials are valid and have the required permissions.
- Validate all inputs before making API calls to avoid errors.
- Handle API errors gracefully and provide meaningful messages to users.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n Node Documentation](https://docs.n8n.io/)
- [n8n Workflow Documentation](https://docs.n8n.io/workflows/)
