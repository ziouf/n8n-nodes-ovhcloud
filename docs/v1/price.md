# OVHcloud Price API Documentation

This document describes the available endpoints in the OVHcloud Price API (v1) for retrieving pricing information across various OVHcloud services.

## Overview

The OVHcloud Price API provides a set of endpoints to retrieve pricing information for dedicated servers, dedicated cloud, and other OVHcloud services. The API is versioned as `1.0` and includes both production and deprecated endpoints.

---

## API Status

- **Stable Production Endpoints**: Marked as `PRODUCTION`
- **Deprecated Endpoints**: Marked as `DEPRECATED` with a `deprecatedDate` and `deletionDate`
  - These endpoints are scheduled for removal on the specified `deletionDate`.
  - Users should migrate to the recommended `replacement` endpoint.

---

## Endpoints

### Dedicated Servers

#### Anti-DDoS Pro Option

- **Path**: `/price/dedicated/server/antiDDoSPro/{commercialRange}`
- **Method**: `GET`
- **Description**: Get the price of the Anti-DDoS Pro option for dedicated servers.
- **Parameters**:
  - **commercialRange** (required, path parameter)
    - **Type**: `price.Dedicated.Server.AntiDDoSProEnum`
    - **Description**: The commercial range of your dedicated server.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Stable production version

---

#### Backup Storage

- **Path**: `/price/dedicated/server/backupStorage/{capacity}`
- **Method**: `GET`
- **Description**: Get the price of backup storage offers for dedicated servers.
- **Parameters**:
  - **capacity** (required, path parameter)
    - **Type**: `price.Dedicated.Server.BackupStorageEnum`
    - **Description**: The capacity in gigabytes of the backup storage offer.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Stable production version

---

#### Firewall Models

- **Path**: `/price/dedicated/server/firewall/{firewallModel}`
- **Method**: `GET`
- **Description**: Get the price of available firewall models for dedicated servers.
- **Parameters**:
  - **firewallModel** (required, path parameter)
    - **Type**: `price.Dedicated.Server.FirewallEnum`
    - **Description**: The model of the firewall.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Stable production version

---

#### IPs

- **Path**: `/price/dedicated/server/ip/{routedTo}`
- **Method**: `GET`
- **Description**: Get the price of IPs for dedicated servers.
- **Parameters**:
  - **routedTo** (required, path parameter)
    - **Type**: `price.Dedicated.Server.IpEnum`
    - **Description**: The IP address.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Stable production version

---

### Dedicated Cloud (2013v1)

#### Filer Hourly Resources

- **Path**: `/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Bhs1a.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Filer Monthly Resources

- **Path**: `/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Bhs1a.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Hourly Resources

- **Path**: `/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Bhs1a.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Monthly Resources

- **Path**: `/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Bhs1a.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Filer Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Rbx2a.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Filer Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Rbx2a.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Rbx2a.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Rbx2a.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Filer Hourly Resources (sbg1a)

- **Path**: `/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Sbg1a.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Filer Monthly Resources (sbg1a)

- **Path**: `/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources.
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Sbg1a.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Hourly Resources (sbg1a)

- **Path**: `/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Sbg1a.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Host Monthly Resources (sbg1a)

- **Path**: `/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources.
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2013v1.Sbg1a.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

### Dedicated Cloud (2014v1)

#### Enterprise Filer Hourly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (enterprise).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Filer Monthly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (enterprise).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Hourly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (enterprise).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Monthly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (enterprise).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Enterprise.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Hourly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (infrastructure).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Monthly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (infrastructure).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Hourly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (infrastructure).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Monthly Resources (bhs1a)

- **Path**: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (infrastructure).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Filer Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (enterprise, rbx2a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Filer Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (enterprise, rbx2a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (enterprise, rbx2a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:01+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (enterprise, rbx2a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Enterprise.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (infrastructure, rbx2a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (infrastructure, rbx2a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Hourly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (infrastructure, rbx2a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Monthly Resources (rbx2a)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (infrastructure, rbx2a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Filer Hourly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (enterprise, rbx2b).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Filer Monthly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (enterprise, rbx2b).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **DeletionDate**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Hourly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (enterprise, rbx2b).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Enterprise Host Monthly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (enterprise, rbx2b).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Enterprise.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Hourly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (infrastructure, rbx2b).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Filer Monthly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (infrastructure, rbx2b).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Hourly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (infrastructure, rbx2b).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### Infrastructure Host Monthly Resources (rbx2b)

- **Path**: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (infrastructure, rbx2b).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Enterprise Filer Hourly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (enterprise, sbg1a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Enterprise Filer Monthly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (enterprise, sbg1a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Enterprise Host Hourly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (enterprise, sbg1a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Enterprise Host Monthly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (enterprise, sbg1a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Enterprise.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Infrastructure Filer Hourly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly filer resources (infrastructure, sbg1a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Infrastructure Filer Monthly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly filer resources (infrastructure, sbg1a).
- **Parameters**:
  - **filerProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Infrastructure Host Hourly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud hourly host resources (infrastructure, sbg1a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.HourlyEnum`
    - **Description**: The type of the hourly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

#### SBG1a Infrastructure Host Monthly

- **Path**: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}`
- **Method**: `GET`
- **Description**: Get the price of dedicated Cloud monthly host resources (infrastructure, sbg1a).
- **Parameters**:
  - **hostProfile** (required, path parameter)
    - **Type**: `price.DedicatedCloud.2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum`
    - **Description**: The type of the monthly resources you want to order.
- **Response Type**: `order.Price`
- **Authentication**: Required
- **API Status**: Deprecated, will be removed
  - **Deprecated Date**: `2024-11-01T00:00:00+01:00`
  - **Deletion Date**: `2025-02-01T00:00:00+01:00`
  - **Replacement**: `/order/catalog/public/privateCloud`

---

## Summary of API Status

### Stable Production Endpoints

- **Dedicated Servers**:
  - Anti-DDoS Pro: `/price/dedicated/server/antiDDoSPro/{commercialRange}`
  - Backup Storage: `/price/dedicated/server/backupStorage/{capacity}`
  - Firewall: `/price/dedicated/server/firewall/{firewallModel}`
  - IPs: `/price/dedicated/server/ip/{routedTo}`

---

### Deprecated Endpoints (Scheduled for Removal)

All deprecated endpoints are scheduled for removal on **2025-02-01T00:00:00+01:00**.
They were deprecated on **2024-11-01T00:00:00+01:00** and should be replaced with:

- **Replacement Path**: `/order/catalog/public/privateCloud`

---

#### Dedicated Cloud (2013v1) Deprecated Endpoints

- **BHS1a**:
  - Filer Hourly: `/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}`
  - Filer Monthly: `/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}`
  - Host Hourly: `/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}`
  - Host Monthly: `/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}`
- **RBX2a**:
  - Filer Hourly: `/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}`
  - Filer Monthly: `/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}`
  - Host Hourly: `/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}`
  - Host Monthly: `/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}`
- **SBG1a**:
  - Filer Hourly: `/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}`
  - Filer Monthly: `/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}`
  - Host Hourly: `/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}`
  - Host Monthly: `/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}`

---

#### Dedicated Cloud (2014v1) Deprecated Endpoints

- **BHS1a**:
  - Enterprise Filer Hourly: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}`
  - Enterprise Filer Monthly: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}`
  - Enterprise Host Hourly: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}`
  - Enterprise Host Monthly: `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}`
  - Infrastructure Filer Hourly: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}`
  - Infrastructure Filer Monthly: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}`
  - Infrastructure Host Hourly: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}`
  - Infrastructure Host Monthly: `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}`
- **RBX2a**:
  - Enterprise Filer Hourly: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}`
  - Enterprise Filer Monthly: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}`
  - Enterprise Host Hourly: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}`
  - Enterprise Host Monthly: `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}`
  - Infrastructure Filer Hourly: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}`
  - Infrastructure Filer Monthly: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}`
  - Infrastructure Host Hourly: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}`
  - Infrastructure Host Monthly: `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}`
- **RBX2b**:
  - Enterprise Filer Hourly: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}`
  - Enterprise Filer Monthly: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}`
  - Enterprise Host Hourly: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}`
  - Enterprise Host Monthly: `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}`
  - Infrastructure Filer Hourly: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}`
  - Infrastructure Filer Monthly: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}`
  - Infrastructure Host Hourly: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}`
  - Infrastructure Host Monthly: `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}`
- **SBG1a**:
  - Enterprise Filer Hourly: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}`
  - Enterprise Filer Monthly: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}`
  - Enterprise Host Hourly: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}`
  - Enterprise Host Monthly: `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}`
  - Infrastructure Filer Hourly: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}`
  - Infrastructure Filer Monthly: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}`
  - Infrastructure Host Hourly: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}`
  - Infrastructure Host Monthly: `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}`

---

## Notes

- **Authentication**: All endpoints require authentication unless explicitly marked as `noAuthentication: false`.
- **Response Type**: All endpoints return an `order.Price` object.
- **HTTP Method**: All endpoints use the `GET` method.
- **Deprecation**: Users should migrate from deprecated endpoints to the recommended replacement path before the deletion date.
