# OVHcloud IP Load Balancing API Documentation

This document describes the available operations for managing **IP Load Balancing** services in the OVHcloud API. These operations allow you to interact with load balancing configurations, including farms, frontends, routes, and related settings.

---

## Table of Contents

- [Overview](#overview)
- [Operations](#operations)
  - [List Load Balancing IPs](#list-load-balancing-ips)
  - [Available Zones](#available-zones)
  - [Service Operations](#service-operations)
    - [Get Service Properties](#get-service-properties)
    - [Update Service Properties](#update-service-properties)
    - [Terminate Service](#terminate-service)
    - [Confirm Service Termination](#confirm-service-termination)
  - [Farms](#farms)
    - [List HTTP Farms](#list-http-farms)
    - [Add HTTP Farm](#add-http-farm)
    - [Delete HTTP Farm](#delete-http-farm)
    - [Get HTTP Farm Properties](#get-http-farm-properties)
    - [Update HTTP Farm Properties](#update-http-farm-properties)
    - [List HTTP Farm's Servers](#list-http-farms-servers)
    - [Add Server to HTTP Farm](#add-server-to-http-farm)
    - [Delete Server from HTTP Farm](#delete-server-from-http-farm)
    - [Get Server Properties](#get-server-properties)
    - [Update Server Properties](#update-server-properties)
  - [Frontends](#frontends)
    - [List HTTP Frontends](#list-http-frontends)
    - [Add HTTP Frontend](#add-http-frontend)
    - [Delete HTTP Frontend](#delete-http-frontend)
    - [Get Frontend Properties](#get-frontend-properties)
    - [Update Frontend Properties](#update-frontend-properties)
  - [Routes](#routes)
    - [List HTTP Routes](#list-http-routes)
    - [Add HTTP Route](#add-http-route)
    - [Get Route Properties](#get-route-properties)
    - [Update Route Properties](#update-route-properties)
  - [Probes](#probes)
    - [List Available Farm Probes](#list-available-farm-probes)
    - [List Available Frontend Probes](#list-available-frontend-probes)
    - [List Available Route Actions](#list-available-route-actions)
    - [List Available Route Rules](#list-available-route-rules)
  - [Frontend Types](#frontend-types)
  - [Failover Operations](#failover-operations)
  - [Free Certificate Operations](#free-certificate-operations)

---

## Overview

The **IP Load Balancing** API provides endpoints for managing load balancing configurations and related resources. It is designed to work with the OVHcloud API infrastructure and requires proper authentication.

---

## Operations

### List Load Balancing IPs

**Path:** `/ipLoadbalancing`

**Method:** `GET`

**Description:** List of your load balancing IPs.

**Authentication:** Required (`loadbalancer:apiovh:get`)

**Parameters:**

| Name      | Type                                  | Param Type | Required | Description                  |
| --------- | ------------------------------------- | ---------- | -------- | ---------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | `query`    | `false`  | Filter resources on IAM tags |

**Response Type:** `string[]`

---

### Available Zones

**Path:** `/ipLoadbalancing/availableZones`

**Method:** `GET`

**Description:** List of zones available for an IP load balancing.

**Authentication:** Required (`account:apiovh:loadbalancer/availableZones/get`)

**Parameters:** None

**Response Type:** `string[]`

> ⚠️ **Deprecated:** This operation is deprecated and will be removed in the future. The last stable version was available until **2018-05-10**, and deletion is planned for **2018-06-11**.

---

### Service Operations

#### Get Service Properties

**Path:** `/ipLoadbalancing/{serviceName}`

**Method:** `GET`

**Description:** Get the properties of a specific IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `ipLoadbalancing.IpWithIAM`

---

#### Update Service Properties

**Path:** `/ipLoadbalancing/{serviceName}`

**Method:** `PUT`

**Description:** Alter the properties of a specific IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:put`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name             | Type                         | Param Type | Required | Description                           |
| ---------------- | ---------------------------- | ---------- | -------- | ------------------------------------- |
| `contactAdmin`   | `coreTypes.AccountId:string` | `body`     | `false`  | The contact to set as admin contact   |
| `contactBilling` | `coreTypes.AccountId:string` | `body`     | `false`  | The contact to set as billing contact |
| `contactTech`    | `coreTypes.AccountId:string` | `body`     | `false`  | The contact to set as tech contact    |

**Response Type:** `void`

---

#### Terminate Service

**Path:** `/ipLoadbalancing/{serviceName}`

**Method:** `POST`

**Description:** Terminate an IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:terminate`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name         | Type                               | Param Type | Required | Description                                              |
| ------------ | ---------------------------------- | ---------- | -------- | -------------------------------------------------------- |
| `commentary` | `string`                           | `body`     | `false`  | Commentary about your termination request                |
| `futureUse`  | `service.TerminationFutureUseEnum` | `body`     | `false`  | What to do after your termination request                |
| `reason`     | `service.TerminationReasonEnum`    | `body`     | `false`  | Reason for your termination request                      |
| `token`      | `string`                           | `body`     | `true`   | The termination token sent by email to the admin contact |

**Response Type:** `string`

---

### Farms

#### List HTTP Farms

**Path:** `/ipLoadbalancing/{serviceName}/http/farm`

**Method:** `GET`

**Description:** List HTTP farms for this IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/get`)

**Parameters:**

| Name             | Type     | Param Type | Required | Description                                         |
| ---------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName`    | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `vrackNetworkId` | `long`   | `query`    | `false`  | Filter by the value of vrackNetworkId property (=)  |
| `zone`           | `string` | `query`    | `false`  | Filter by the value of zone property (=)            |

**Response Type:** `long[]`

---

#### Add HTTP Farm

**Path:** `/ipLoadbalancing/{serviceName}/http/farm`

**Method:** `POST`

**Description:** Add a new HTTP farm to your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/create`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name             | Type                                 | Param Type | Required | Description                                                                                                                                    |
| ---------------- | ------------------------------------ | ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `balance`        | `ipLoadbalancing.BalanceHTTPEnum`    | `body`     | `false`  | Load balancing algorithm. Defaults to `roundrobin` if null                                                                                     |
| `displayName`    | `string`                             | `body`     | `false`  | Human-readable name for your backend                                                                                                           |
| `port`           | `long`                               | `body`     | `false`  | Port attached to your farm ([1..49151]). Inherited from frontend if null                                                                       |
| `probe`          | `ipLoadbalancing.BackendProbe`       | `body`     | `false`  | Probe used to determine if a backend is alive and can handle requests                                                                          |
| `stickiness`     | `ipLoadbalancing.StickinessHTTPEnum` | `body`     | `false`  | Stickiness type. No stickiness if null                                                                                                         |
| `vrackNetworkId` | `long`                               | `body`     | `false`  | Internal Load Balancer identifier of the vRack private network to attach to your farm. Mandatory if your Load Balancer is attached to a vRack. |
| `zone`           | `string`                             | `body`     | `true`   | Zone of your farm                                                                                                                              |

**Response Type:** `ipLoadbalancing.backendHttp.BackendHttp`

---

#### Delete HTTP Farm

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}`

**Method:** `DELETE`

**Description:** Delete an HTTP farm from your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/delete`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |

**Response Type:** `void`

---

#### Get HTTP Farm Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}`

**Method:** `GET`

**Description:** Retrieve the properties of a specific HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |

**Response Type:** `ipLoadbalancing.backendHttp.BackendHttp`

---

#### Update HTTP Farm Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}`

**Method:** `PUT`

**Description:** Modify the properties of an existing HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/edit`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |

**Body Parameters:**

| Name                  | Type                                      | Param Type | Required | Description                    |
| --------------------- | ----------------------------------------- | ---------- | -------- | ------------------------------ |
| `newObjectProperties` | `ipLoadbalancing.backendHttp.BackendHttp` | `body`     | `true`   | New object properties to apply |

**Response Type:** `void`

---

### Servers

#### List HTTP Farm's Servers

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server`

**Method:** `GET`

**Description:** Retrieve the list of servers associated with an HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/server/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |

**Query Parameters:**

| Name      | Type                                              | Param Type | Required | Description                                   |
| --------- | ------------------------------------------------- | ---------- | -------- | --------------------------------------------- |
| `address` | `ipv4`                                            | `query`    | `false`  | Filter by the value of address property (=)   |
| `cookie`  | `string`                                          | `query`    | `false`  | Filter by the value of cookie property (like) |
| `status`  | `ipLoadbalancing.BackendCustomerServerStatusEnum` | `query`    | `false`  | Filter by the value of status property (=)    |

**Response Type:** `long[]`

---

#### Add Server to HTTP Farm

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server`

**Method:** `POST`

**Description:** Add a new server to an HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/server/create`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |

**Body Parameters:**

| Name                   | Type                                              | Param Type | Required | Description                                                                                                     |
| ---------------------- | ------------------------------------------------- | ---------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `address`              | `ipv4`                                            | `body`     | `true`   | IP address of your server                                                                                       |
| `backup`               | `boolean`                                         | `body`     | `false`  | Set server as backup. Defaults to `false`                                                                       |
| `cookie`               | `string`                                          | `body`     | `false`  | Set the cookie value used when 'cookie' stickiness is set. Auto-generated if null and required.                 |
| `displayName`          | `string`                                          | `body`     | `false`  | Human-readable name for your server                                                                             |
| `onMarkedDown`         | `ipLoadbalancing.OnMarkedDownEnum`                | `body`     | `false`  | Enable action when backend is marked down. No action if null.                                                   |
| `port`                 | `long`                                            | `body`     | `false`  | Port attached to your server ([1..49151]). Inherited from farm if null.                                         |
| `probe`                | `boolean`                                         | `body`     | `false`  | Enable/disable probe. Defaults to `false`.                                                                      |
| `proxyProtocolVersion` | `ipLoadbalancing.ProxyProtocolVersionEnum`        | `body`     | `false`  | Send PROXY protocol header. Disabled if null. Requires a compatible server.                                     |
| `ssl`                  | `boolean`                                         | `body`     | `false`  | Enable SSL ciphering. Probes will also be sent ciphered. Defaults to `false`.                                   |
| `status`               | `ipLoadbalancing.BackendCustomerServerStatusEnum` | `body`     | `true`   | Enable or disable your server                                                                                   |
| `weight`               | `long`                                            | `body`     | `false`  | Set weight on the server [1..256]. 0 if not used, 1 if left null. Servers with higher weight get more requests. |

**Response Type:** `ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer`

---

#### Delete Server from HTTP Farm

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}`

**Method:** `DELETE`

**Description:** Remove a server from an HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/server/delete`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |
| `serverId`    | `long`   | `path`     | `true`   | ID of your server                                   |

**Response Type:** `void`

---

#### Get Server Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}`

**Method:** `GET`

**Description:** Retrieve the properties of a specific server in an HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/server/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |
| `serverId`    | `long`   | `path`     | `true`   | ID of your server                                   |

**Response Type:** `ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer`

---

#### Update Server Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}`

**Method:** `PUT`

**Description:** Modify the properties of an existing server in an HTTP farm.

**Authentication:** Required (`loadbalancer:apiovh:http/farm/server/edit`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `farmId`      | `long`   | `path`     | `true`   | ID of your farm                                     |
| `serverId`    | `long`   | `path`     | `true`   | ID of your server                                   |

**Body Parameters:**

| Name                  | Type                                                          | Param Type | Required | Description                    |
| --------------------- | ------------------------------------------------------------- | ---------- | -------- | ------------------------------ |
| `newObjectProperties` | `ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer` | `body`     | `true`   | New object properties to apply |

**Response Type:** `void`

---

### Frontends

#### List HTTP Frontends

**Path:** `/ipLoadbalancing/{serviceName}/http/frontend`

**Method:** `GET`

**Description:** Retrieve the list of HTTP frontends for this IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/frontend/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Query Parameters:**

| Name            | Type     | Param Type | Required | Description                                       |
| --------------- | -------- | ---------- | -------- | ------------------------------------------------- |
| `defaultFarmId` | `long`   | `query`    | `false`  | Filter by the value of defaultFarmId property (=) |
| `defaultSslId`  | `long`   | `query`    | `false`  | Filter by the value of defaultSslId property (=)  |
| `port`          | `string` | `query`    | `false`  | Filter by the value of port property (like)       |
| `zone`          | `string` | `query`    | `false`  | Filter by the value of zone property (=)          |

**Response Type:** `long[]`

---

#### Add HTTP Frontend

**Path:** `/ipLoadbalancing/{serviceName}/http/frontend`

**Method:** `POST`

**Description:** Add a new HTTP frontend to your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/frontend/create`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name               | Type        | Param Type | Required | Description                                                                                                                                                                               |
| ------------------ | ----------- | ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedSource`    | `ipBlock[]` | `body`     | `false`  | Restrict IP load balancing access to these IP blocks. No restriction if null. Cannot be used with `deniedSource` at the same time.                                                        |
| `dedicatedIpfo`    | `ipBlock[]` | `body`     | `false`  | Only attach frontend to these IPs. No restriction if null.                                                                                                                                |
| `defaultFarmId`    | `long`      | `body`     | `false`  | Default HTTP farm for your frontend                                                                                                                                                       |
| `defaultSslId`     | `long`      | `body`     | `false`  | Default SSL served to your customer                                                                                                                                                       |
| `deniedSource`     | `ipBlock[]` | `body`     | `false`  | Deny IP load balancing access to these IP blocks. No restriction if null. Cannot be used with `allowedSource` at the same time.                                                           |
| `disabled`         | `boolean`   | `body`     | `false`  | Disable your frontend. Defaults to `false`.                                                                                                                                               |
| `displayName`      | `string`    | `body`     | `false`  | Human-readable name for your frontend                                                                                                                                                     |
| `hsts`             | `boolean`   | `body`     | `false`  | Enable HTTP Strict Transport Security. Defaults to `false`.                                                                                                                               |
| `httpHeader`       | `string[]`  | `body`     | `false`  | Add headers to your frontend. Useful variables: `%ci` (client IP), `%cp` (client port)                                                                                                    |
| `port`             | `string`    | `body`     | `true`   | Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports), or comma-separated list. Each port must be in the [1..49151] range. |
| `redirectLocation` | `string`    | `body`     | `false`  | HTTP redirection target (e.g., `https://www.ovh.com`)                                                                                                                                     |
| `serviceName`      | `string`    | `path`     | `true`   | The internal name of your IP load balancing service                                                                                                                                       |
| `ssl`              | `boolean`   | `body`     | `false`  | Enable SSL deciphering. Defaults to `false`.                                                                                                                                              |
| `zone`             | `string`    | `body`     | `true`   | Zone of your frontend. Use `"all"` for all owned zones.                                                                                                                                   |

**Response Type:** `ipLoadbalancing.frontendHttp.FrontendHttp`

---

#### Delete HTTP Frontend

**Path:** `/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}`

**Method:** `DELETE`

**Description:** Delete an HTTP frontend from your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/frontend/delete`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `frontendId`  | `long`   | `path`     | `true`   | ID of your frontend                                 |

**Response Type:** `void`

---

#### Get Frontend Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}`

**Method:** `GET`

**Description:** Retrieve the properties of a specific HTTP frontend.

**Authentication:** Required (`loadbalancer:apiovh:http/frontend/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `frontendId`  | `long`   | `path`     | `true`   | ID of your frontend                                 |

**Response Type:** `ipLoadbalancing.frontendHttp.FrontendHttp`

---

#### Update Frontend Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}`

**Method:** `PUT`

**Description:** Modify the properties of an existing HTTP frontend.

**Authentication:** Required (`loadbalancer:apiovh:http/frontend/edit`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `frontendId`  | `long`   | `path`     | `true`   | ID of your frontend                                 |

**Body Parameters:**

| Name                  | Type                                        | Param Type | Required | Description                    |
| --------------------- | ------------------------------------------- | ---------- | -------- | ------------------------------ |
| `newObjectProperties` | `ipLoadbalancing.frontendHttp.FrontendHttp` | `body`     | `true`   | New object properties to apply |

**Response Type:** `void`

---

### Routes

#### List HTTP Routes

**Path:** `/ipLoadbalancing/{serviceName}/http/route`

**Method:** `GET`

**Description:** Retrieve the list of HTTP routes for this IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/route/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Query Parameters:**

| Name         | Type   | Param Type | Required | Description                                    |
| ------------ | ------ | ---------- | -------- | ---------------------------------------------- |
| `frontendId` | `long` | `query`    | `false`  | Filter by the value of frontendId property (=) |

**Response Type:** `long[]`

---

#### Add HTTP Route

**Path:** `/ipLoadbalancing/{serviceName}/http/route`

**Method:** `POST`

**Description:** Add a new HTTP route to your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/route/create`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name          | Type                              | Param Type | Required | Description                           |
| ------------- | --------------------------------- | ---------- | -------- | ------------------------------------- |
| `action`      | `ipLoadbalancing.RouteHttpAction` | `body`     | `true`   | Action triggered when all rules match |
| `displayName` | `string`                          | `body`     | `false`  | Human-readable name for your route    |
| `frontendId`  | `long`                            | `body`     | `false`  | Route traffic for this frontend       |
| `weight`      | `long`                            | `body`     | `false`  | Set the weight of your route          |

**Response Type:** `ipLoadbalancing.RouteHttp`

---

#### Get Route Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/route/{routeId}`

**Method:** `GET`

**Description:** Retrieve the properties of a specific HTTP route.

**Authentication:** Required (`loadbalancer:apiovh:http/route/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `routeId`     | `long`   | `path`     | `true`   | ID of your route                                    |

**Response Type:** `ipLoadbalancing.RouteHttp`

---

#### Update Route Properties

**Path:** `/ipLoadbalancing/{serviceName}/http/route/{routeId}`

**Method:** `PUT`

**Description:** Modify the properties of an existing HTTP route.

**Authentication:** Required (`loadbalancer:apiovh:http/route/edit`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |
| `routeId`     | `long`   | `path`     | `true`   | ID of your route                                    |

**Body Parameters:**

| Name                  | Type                        | Param Type | Required | Description                    |
| --------------------- | --------------------------- | ---------- | -------- | ------------------------------ |
| `newObjectProperties` | `ipLoadbalancing.RouteHttp` | `body`     | `true`   | New object properties to apply |

**Response Type:** `void`

---

### Probes

#### List Available Farm Probes

**Path:** `/ipLoadbalancing/{serviceName}/availableFarmProbes`

**Method:** `GET`

**Description:** Retrieve the list of available probes for health checks in HTTP farms.

**Authentication:** Required (`loadbalancer:apiovh:availableFarmProbes/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `ipLoadbalancing.FarmAvailableProbe[]`

---

#### List Available Frontend Probes

**Path:** `/ipLoadbalancing/{serviceName}/availableFrontendType`

**Method:** `GET`

**Description:** Retrieve the list of available frontend types for your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:availableFrontendType/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `string[]`

---

#### List Available Route Actions

**Path:** `/ipLoadbalancing/{serviceName}/availableRouteActions`

**Method:** `GET`

**Description:** Retrieve the list of available route actions for your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:availableRouteActions/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `ipLoadbalancing.RouteAvailableAction[]`

---

#### List Available Route Rules

**Path:** `/ipLoadbalancing/{serviceName}/availableRouteRules`

**Method:** `GET`

**Description:** Retrieve the list of available route match rules for your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:http/availableRouteRules/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `ipLoadbalancing.RouteAvailableRule[]`

---

### Frontend Types

**Path:** `/ipLoadbalancing/{serviceName}/availableFrontendType`

**Method:** `GET`

**Description:** Retrieve the list of available frontend types for your IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:availableFrontendType/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `string[]`

---

### Failover Operations

**Path:** `/ipLoadbalancing/{serviceName}/failover`

**Method:** `GET`

**Description:** List all failover IPs routed to this IP load balancing service.

**Authentication:** Required (`loadbalancer:apiovh:failover/get`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Response Type:** `ipBlock[]`

---

### Free Certificate Operations

**Path:** `/ipLoadbalancing/{serviceName}/freeCertificate`

**Method:** `POST`

**Description:** Order a free certificate for your IP load balancing service. A DCV (Domain Control Validation) HTTP request will be made to `http://your_domain.abc`. Ensure the domain resolves to your IP load balancing IP before ordering.

**Authentication:** Required (`loadbalancer:apiovh:freeCertificate/order`)

**Parameters:**

| Name          | Type     | Param Type | Required | Description                                         |
| ------------- | -------- | ---------- | -------- | --------------------------------------------------- |
| `serviceName` | `string` | `path`     | `true`   | The internal name of your IP load balancing service |

**Body Parameters:**

| Name   | Type       | Param Type | Required | Description                                                                                                                     |
| ------ | ---------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `fqdn` | `string[]` | `body`     | `true`   | The FQDN for which you want a free certificate. Ensure domain exists and resolves to your IP load balancing IP before ordering. |

**Response Type:** `ipLoadbalancing.Task.Task`

---

## Authentication

All operations require authentication via the **OVH API** credential type. Ensure you have the following credentials configured:

- `host`
- `applicationKey`
- `applicationSecret`
- `consumerKey`

Sign requests using the OVH signature algorithm (SHA1).

---

## Error Handling

- Use `NodeApiError` for n8n-specific errors.
- Throw descriptive error messages with context.
- Validate inputs before API calls.
- Handle API errors gracefully with meaningful messages.
- Catch blocks use `unknown` type (disabled `useUnknownInCatchVariables`).

---

## Notes

- **API Status:\*\*** All operations are marked as `PRODUCTION` unless explicitly deprecated.
- **Deprecated Operations:\*\*** `/ipLoadbalancing/availableZones` is deprecated and will be removed.
- **Stability:\*\*** Most operations are stable production versions with no immediate plans for changes.
- **IAM Actions:\*\*** Some operations require specific IAM actions for authorization.

---

## Versioning

This documentation is based on the **API v1.0** schema. Ensure compatibility with your n8n node implementation.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com)
- [n8n Workflow Documentation](https://docs.n8n.io)
- [Conventional Commits](https://www.conventionalcommits.org)

---

## Troubleshooting

### Common Issues

#### Authentication Failures

- **Symptoms:** API calls return `401 Unauthorized` errors.
- **Possible Causes:**
  - Missing or invalid `consumerKey`.
  - Incorrect `applicationKey` or `applicationSecret`.
  - Expired or revoked API credentials.
- **Solutions:**
  - Regenerate your `consumerKey` via the OVHcloud API.
  - Verify your credentials in the n8n credential configuration.
  - Ensure your credentials are still valid and not expired.

#### Input Validation Errors

- **Symptoms:** API calls return `400 Bad Request` errors.
- **Possible Causes:**
  - Invalid parameter types (e.g., passing a string where a number is expected).
  - Missing required parameters.
  - Out-of-range values (e.g., port numbers outside [1..49151]).
- **Solutions:**
  - Review parameter types and ensure correct data is passed.
  - Check required parameters and provide all necessary values.
  - Validate ranges and ensure values are within expected bounds.

#### Resource Not Found Errors

- **Symptoms:** API calls return `404 Not Found` errors.
- **Possible Causes:**
  - Incorrect `serviceName` or `farmId`/`frontendId`/`routeId`.
  - Resource does not exist or has been deleted.
- **Solutions:**
  - Verify the resource exists via the OVHcloud API or n8n UI.
  - Check spelling and ensure correct path parameters are used.

---

## Security Considerations

- **DCV Validation:\*\*** Ensure domains resolve to your IP load balancing service before ordering free certificates.
- **IP Restrictions:\*\*** Use `allowedSource` and `deniedSource` carefully to avoid misconfiguring access restrictions.
- **SSL Configuration:\*\*** Enable SSL deciphering (`ssl`) only if your backend supports it.
- **Proxy Protocol:\*\*** Use `proxyProtocolVersion` only with compatible servers to avoid man-in-the-middle attacks.

---

## Examples

### Example 1: List All Load Balancing IPs

```bash
curl -X GET "https://api.ovh.com/1.0/ipLoadbalancing" \
  -H "X-Ovh-Application: $applicationKey" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: $consumerKey" \
  -H "Content-Type: application/json"
```

### Example 2: Add an HTTP Frontend

```bash
curl -X POST "https://api.ovh.com/1.0/ipLoadbalancing/$serviceName/http/frontend" \
  -H "X-Ovh-Application: $applicationKey" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: $consumerKey" \
  -H "Content-Type: application/json" \
  -d '{
    "port": "80",
    "zone": "all",
    "displayName": "My HTTP Frontend"
  }'
```

### Example 3: Add a Server to an HTTP Farm

```bash
curl -X POST "https://api.ovh.com/1.0/ipLoadbalancing/$serviceName/http/farm/$farmId/server" \
  -H "X-Ovh-Application: $applicationKey" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: $consumerKey" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "192.168.1.100",
    "port": "80",
    "status": "enabled",
    "weight": "1"
  }'
```

---

*Documentation generated from OVHcloud API schema for n8n nodes compatibility.*

*Last updated: **2026-03-31**.*
