# OVH Cloud Pack Xdsl

> Manage OVHcloud xDSL packs — addresses, domains, email services, exchanges and migrations

## Overview

This node provides **33 operations** covering the `/pack/xdsl` API v1 endpoints for
managing OVHcloud xDSL packs.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /pack/xdsl`, `POST /pack/xdsl/*`, `PUT /pack/xdsl/*`, `DELETE /pack/xdsl/*`
and related IAM actions granted.

## Available Operations

### main

| Operation                                                                  | Method | Endpoint                                     |
| -------------------------------------------------------------------------- | ------ | -------------------------------------------- |
| [`list`](./`resources/main/list.ts`)                                       | GET    | `/pack/xdsl`                                 |
| [`get`](./`resources/main/get.ts`)                                         | GET    | `/pack/xdsl/{packName}`                      |
| [`updatePut`](./`resources/main/updatePut.ts`)                             | PUT    | `/pack/xdsl/{packName}`                      |
| [`canCancelResiliationGet`](./`resources/main/canCancelResiliationGet.ts`) | GET    | `/pack/xdsl/{packName}/canCancelResiliation` |
| [`cancelResiliationPost`](./`resources/main/cancelResiliationPost.ts`)     | POST   | `/pack/xdsl/{packName}/cancelResiliation`    |
| [`changeContactPost`](./`resources/main/changeContactPost.ts`)             | POST   | `/pack/xdsl/{packName}/changeContact`        |
| [`contactOwnerGet`](./`resources/main/contactOwnerGet.ts`)                 | GET    | `/pack/xdsl/{packName}/contactOwner`         |

### addressMove

| Operation                                                                                         | Method | Endpoint                                                        |
| ------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------- |
| [`moveOfferPost`](./`resources/addressMove/moveOfferPost.ts`)                                     | POST   | `/pack/xdsl/{packName}/addressMove/moveOffer`                   |
| [`offersPost`](./`resources/addressMove/offersPost.ts`)                                           | POST   | `/pack/xdsl/{packName}/addressMove/offers`                      |
| [`servicesToDeleteUnpackTermsPost`](./`resources/addressMove/servicesToDeleteUnpackTermsPost.ts`) | POST   | `/pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms` |

### domain

| Operation                                                  | Method | Endpoint                                    |
| ---------------------------------------------------------- | ------ | ------------------------------------------- |
| [`optionsTldsGet`](./`resources/domain/optionsTldsGet.ts`) | GET    | `/pack/xdsl/{packName}/domain/options/tlds` |
| [`servicesGet`](./`resources/domain/servicesGet.ts`)       | GET    | `/pack/xdsl/{packName}/domain/services`     |
| [`servicesPost`](./`resources/domain/servicesPost.ts`)     | POST   | `/pack/xdsl/{packName}/domain/services`     |

### emailPro

| Operation                                                                            | Method | Endpoint                                                  |
| ------------------------------------------------------------------------------------ | ------ | --------------------------------------------------------- |
| [`optionsDomainsGet`](./`resources/emailPro/optionsDomainsGet.ts`)                   | GET    | `/pack/xdsl/{packName}/emailPro/options/domains`          |
| [`optionsIsEmailAvailableGet`](./`resources/emailPro/optionsIsEmailAvailableGet.ts`) | GET    | `/pack/xdsl/{packName}/emailPro/options/isEmailAvailable` |
| [`servicesGet`](./`resources/emailPro/servicesGet.ts`)                               | GET    | `/pack/xdsl/{packName}/emailPro/services`                 |
| [`servicesPost`](./`resources/emailPro/servicesPost.ts`)                             | POST   | `/pack/xdsl/{packName}/emailPro/services`                 |

### exchange

| Operation                                                                                                                | Method | Endpoint                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------- |
| [`exchangeAccountServicesGet`](./`resources/exchange/exchangeAccountServicesGet.ts`)                                     | GET    | `/pack/xdsl/{packName}/exchangeAccount/services`                    |
| [`exchangeAccountServicesDomainGet`](./`resources/exchange/exchangeAccountServicesDomainGet.ts`)                         | GET    | `/pack/xdsl/{packName}/exchangeAccount/services/{domain}`           |
| [`exchangeIndividualOptionsDomainsGet`](./`resources/exchange/exchangeIndividualOptionsDomainsGet.ts`)                   | GET    | `/pack/xdsl/{packName}/exchangeIndividual/options/domains`          |
| [`exchangeIndividualOptionsIsEmailAvailableGet`](./`resources/exchange/exchangeIndividualOptionsIsEmailAvailableGet.ts`) | GET    | `/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable` |
| [`exchangeOrganizationServicesGet`](./`resources/exchange/exchangeOrganizationServicesGet.ts`)                           | GET    | `/pack/xdsl/{packName}/exchangeOrganization/services`               |

### hostedEmail

| Operation                                                                                           | Method | Endpoint                                                             |
| --------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------- |
| [`optionsDomainsGet`](./`resources/hostedEmail/optionsDomainsGet.ts`)                               | GET    | `/pack/xdsl/{packName}/hostedEmail/options/domains`                  |
| [`servicesGet`](./`resources/hostedEmail/servicesGet.ts`)                                           | GET    | `/pack/xdsl/{packName}/hostedEmail/services`                         |
| [`servicesPost`](./`resources/hostedEmail/servicesPost.ts`)                                         | POST   | `/pack/xdsl/{packName}/hostedEmail/services`                         |
| [`servicesDomainGet`](./`resources/hostedEmail/servicesDomainGet.ts`)                               | GET    | `/pack/xdsl/{packName}/hostedEmail/services/{domain}`                |
| [`servicesDomainDelete`](./`resources/hostedEmail/servicesDomainDelete.ts`)                         | DELETE | `/pack/xdsl/{packName}/hostedEmail/services/{domain}`                |
| [`servicesDomainAccountGet`](./`resources/hostedEmail/servicesDomainAccountGet.ts`)                 | GET    | `/pack/xdsl/{packName}/hostedEmail/services/{domain}/account`        |
| [`servicesDomainChangePasswordPost`](./`resources/hostedEmail/servicesDomainChangePasswordPost.ts`) | POST   | `/pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword` |
| [`servicesDomainConfigurationGet`](./`resources/hostedEmail/servicesDomainConfigurationGet.ts`)     | GET    | `/pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration`  |

### migration

| Operation                                                                                       | Method | Endpoint                                                      |
| ----------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------- |
| [`migratePost`](./`resources/migration/migratePost.ts`)                                         | POST   | `/pack/xdsl/{packName}/migration/migrate`                     |
| [`offersPost`](./`resources/migration/offersPost.ts`)                                           | POST   | `/pack/xdsl/{packName}/migration/offers`                      |
| [`servicesToDeleteUnpackTermsPost`](./`resources/migration/servicesToDeleteUnpackTermsPost.ts`) | POST   | `/pack/xdsl/{packName}/migration/servicesToDeleteUnpackTerms` |

**Total:** 33 operations

## Notes

- All service-scoped operations use a `packName` resource locator with an
  "From List" mode populated via the `getPackXdslServices` list-search method
  (`GET /pack/xdsl`), and a "By Name" mode (e.g. `packabcd-ovh`).
- The `packName` is always URL-encoded before being interpolated into the
  request path.
- JSON array parameters (e.g. `options`, `subServicesToDelete`,
  `subServicesToKeep`) are entered as JSON strings and parsed before being
  sent in the request body.
