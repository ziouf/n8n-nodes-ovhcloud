# OVH Cloud Horizon View

> Manage OVHcloud Horizon View services via the `/horizonView` API v1

## Overview

This node provides **42 operations** covering the `/horizonView` API v1
endpoints for managing Horizon View services, access points, customer networks,
the dedicated Horizon component and domain trusts.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET/POST/DELETE /horizonView/*` and related IAM actions granted.

## Available Operations

### main

| Operation                                                              | Method | Endpoint                                        |
| ---------------------------------------------------------------------- | ------ | ----------------------------------------------- |
| [`list`](./resources/main/list.ts)                                     | GET    | `/horizonView`                                  |
| [`get`](./resources/main/get.ts)                                       | GET    | `/horizonView/{serviceName}`                    |
| [`confirmTerminationPost`](./resources/main/confirmTerminationPost.ts) | POST   | `/horizonView/{serviceName}/confirmTermination` |
| [`serviceInfosGet`](./resources/main/serviceInfosGet.ts)               | GET    | `/horizonView/{serviceName}/serviceInfos`       |
| [`terminatePost`](./resources/main/terminatePost.ts)                   | POST   | `/horizonView/{serviceName}/terminate`          |

### accessPoint

| Operation                                                                                               | Method | Endpoint                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| [`accessPointGet`](./resources/accessPoint/accessPointGet.ts)                                           | GET    | `/horizonView/{serviceName}/accessPoint`                                                     |
| [`accessPointPost`](./resources/accessPoint/accessPointPost.ts)                                         | POST   | `/horizonView/{serviceName}/accessPoint`                                                     |
| [`accessPointDetailGet`](./resources/accessPoint/accessPointDetailGet.ts)                               | GET    | `/horizonView/{serviceName}/accessPoint/{accessPointId}`                                     |
| [`accessPointDelete`](./resources/accessPoint/accessPointDelete.ts)                                     | DELETE | `/horizonView/{serviceName}/accessPoint/{accessPointId}`                                     |
| [`changeSessionTimeoutPost`](./resources/accessPoint/changeSessionTimeoutPost.ts)                       | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout`                |
| [`accessPointCustomerNetworkGet`](./resources/accessPoint/accessPointCustomerNetworkGet.ts)             | GET    | `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork`                     |
| [`accessPointCustomerNetworkPost`](./resources/accessPoint/accessPointCustomerNetworkPost.ts)           | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork`                     |
| [`accessPointCustomerNetworkDelete`](./resources/accessPoint/accessPointCustomerNetworkDelete.ts)       | DELETE | `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}` |
| [`accessPointCustomerNetworkDetailGet`](./resources/accessPoint/accessPointCustomerNetworkDetailGet.ts) | GET    | `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}` |
| [`disableTwoFAPost`](./resources/accessPoint/disableTwoFAPost.ts)                                       | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA`                        |
| [`enableTwoFAPost`](./resources/accessPoint/enableTwoFAPost.ts)                                         | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA`                         |
| [`disableWindowsUsernameOptionPost`](./resources/accessPoint/disableWindowsUsernameOptionPost.ts)       | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption`        |
| [`enableWindowsUsernameOptionPost`](./resources/accessPoint/enableWindowsUsernameOptionPost.ts)         | POST   | `/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption`         |

### customerNetwork

| Operation                                                                             | Method | Endpoint                                                         |
| ------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- |
| [`customerNetworkGet`](./resources/customerNetwork/customerNetworkGet.ts)             | GET    | `/horizonView/{serviceName}/customerNetwork`                     |
| [`customerNetworkPost`](./resources/customerNetwork/customerNetworkPost.ts)           | POST   | `/horizonView/{serviceName}/customerNetwork`                     |
| [`customerNetworkDetailGet`](./resources/customerNetwork/customerNetworkDetailGet.ts) | GET    | `/horizonView/{serviceName}/customerNetwork/{customerNetworkId}` |
| [`customerNetworkDelete`](./resources/customerNetwork/customerNetworkDelete.ts)       | DELETE | `/horizonView/{serviceName}/customerNetwork/{customerNetworkId}` |

### dedicatedHorizon

| Operation                                                                                          | Method | Endpoint                                                                             |
| -------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------ |
| [`dedicatedHorizonGet`](./resources/dedicatedHorizon/dedicatedHorizonGet.ts)                       | GET    | `/horizonView/{serviceName}/dedicatedHorizon`                                        |
| [`enableStorageAcceleratorPost`](./resources/dedicatedHorizon/enableStorageAcceleratorPost.ts)     | POST   | `/horizonView/{serviceName}/dedicatedHorizon/enableStorageAccelerator`               |
| [`disableStorageAcceleratorPost`](./resources/dedicatedHorizon/disableStorageAcceleratorPost.ts)   | POST   | `/horizonView/{serviceName}/dedicatedHorizon/disableStorageAccelerator`              |
| [`userGet`](./resources/dedicatedHorizon/userGet.ts)                                               | GET    | `/horizonView/{serviceName}/dedicatedHorizon/user`                                   |
| [`changePropertiesPost`](./resources/dedicatedHorizon/changePropertiesPost.ts)                     | POST   | `/horizonView/{serviceName}/dedicatedHorizon/user/changeProperties`                  |
| [`changePasswordPost`](./resources/dedicatedHorizon/changePasswordPost.ts)                         | POST   | `/horizonView/{serviceName}/dedicatedHorizon/user/changePassword`                    |
| [`customerUserGet`](./resources/dedicatedHorizon/customerUserGet.ts)                               | GET    | `/horizonView/{serviceName}/dedicatedHorizon/customerUser`                           |
| [`customerUserPost`](./resources/dedicatedHorizon/customerUserPost.ts)                             | POST   | `/horizonView/{serviceName}/dedicatedHorizon/customerUser`                           |
| [`customerUserDetailGet`](./resources/dedicatedHorizon/customerUserDetailGet.ts)                   | GET    | `/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}`                |
| [`customerUserDelete`](./resources/dedicatedHorizon/customerUserDelete.ts)                         | DELETE | `/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}`                |
| [`customerUserChangePasswordPost`](./resources/dedicatedHorizon/customerUserChangePasswordPost.ts) | POST   | `/horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword` |
| [`taskGet`](./resources/dedicatedHorizon/taskGet.ts)                                               | GET    | `/horizonView/{serviceName}/dedicatedHorizon/task`                                   |
| [`taskDetailGet`](./resources/dedicatedHorizon/taskDetailGet.ts)                                   | GET    | `/horizonView/{serviceName}/dedicatedHorizon/task/{taskId}`                          |

### domainTrust

| Operation                                                                               | Method | Endpoint                                                                         |
| --------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------- |
| [`domainTrustGet`](./resources/domainTrust/domainTrustGet.ts)                           | GET    | `/horizonView/{serviceName}/domainTrust`                                         |
| [`domainTrustPost`](./resources/domainTrust/domainTrustPost.ts)                         | POST   | `/horizonView/{serviceName}/domainTrust`                                         |
| [`domainTrustDetailGet`](./resources/domainTrust/domainTrustDetailGet.ts)               | GET    | `/horizonView/{serviceName}/domainTrust/{domainTrustId}`                         |
| [`addChildDomainPost`](./resources/domainTrust/addChildDomainPost.ts)                   | POST   | `/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain`          |
| [`addDomainControllerPost`](./resources/domainTrust/addDomainControllerPost.ts)         | POST   | `/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController`     |
| [`addDomainUserOnComposerPost`](./resources/domainTrust/addDomainUserOnComposerPost.ts) | POST   | `/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainUserOnComposer` |
| [`createTrustPost`](./resources/domainTrust/createTrustPost.ts)                         | POST   | `/horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust`             |

**Total:** 42 operations

## Notes

- The `serviceName` parameter of a Horizon View service (e.g. `service1`) can be
  picked from the list or entered manually.
- The `confirmTermination` operation requires the termination token sent by email
  to the admin contact; the `terminate` operation returns that token.
- Operations are grouped in category subfolders: `main`, `accessPoint`,
  `customerNetwork`, `dedicatedHorizon` and `domainTrust`.
