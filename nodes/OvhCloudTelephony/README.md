# OVH Cloud Telephony

> Manage telephony services — aliases, lines, trunks, numbers, accessories, offers, directories

## Overview

This node provides **63 operations** with **63 tests** for managing OVHcloud resources.

## Available Operations

### accessories

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`accessoriesGet`](./`accessories/accessoriesGet.ts`) | GET | `...` | 1 |

### aliases

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`aliasChangeContactPost`](./`aliases/aliasChangeContactPost.ts`) | POST | `...` | 1 |
| [`aliasGet`](./`aliases/aliasGet.ts`) | GET | `...` | 1 |
| [`aliasListGet`](./`aliases/aliasListGet.ts`) | GET | `...` | 1 |
| [`aliasServiceInfosGet`](./`aliases/aliasServiceInfosGet.ts`) | GET | `...` | 1 |
| [`aliasServiceInfosPut`](./`aliases/aliasServiceInfosPut.ts`) | PUT | `...` | 1 |

### directories

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`directoriesAvailableZipCodesGet`](./`directories/directoriesAvailableZipCodesGet.ts`) | GET | `...` | 1 |
| [`directoriesCitiesGet`](./`directories/directoriesCitiesGet.ts`) | GET | `...` | 1 |
| [`directoriesCountriesGet`](./`directories/directoriesCountriesGet.ts`) | GET | `...` | 1 |
| [`directoriesServicesGet`](./`directories/directoriesServicesGet.ts`) | GET | `...` | 1 |

### lines

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`linesChangeContactPost`](./`lines/linesChangeContactPost.ts`) | POST | `...` | 1 |
| [`linesGet`](./`lines/linesGet.ts`) | GET | `...` | 1 |
| [`linesHardwareListGet`](./`lines/linesHardwareListGet.ts`) | GET | `...` | 1 |
| [`linesHardwarePost`](./`lines/linesHardwarePost.ts`) | POST | `...` | 1 |
| [`linesListGet`](./`lines/linesListGet.ts`) | GET | `...` | 1 |
| [`linesNumberDelete`](./`lines/linesNumberDelete.ts`) | DELETE | `...` | 1 |
| [`linesNumberGet`](./`lines/linesNumberGet.ts`) | GET | `...` | 1 |
| [`linesNumberListGet`](./`lines/linesNumberListGet.ts`) | GET | `...` | 1 |
| [`linesNumberPost`](./`lines/linesNumberPost.ts`) | POST | `...` | 1 |
| [`linesNumberPut`](./`lines/linesNumberPut.ts`) | PUT | `...` | 1 |
| [`linesPortabilityDelete`](./`lines/linesPortabilityDelete.ts`) | DELETE | `...` | 1 |
| [`linesPortabilityGet`](./`lines/linesPortabilityGet.ts`) | GET | `...` | 1 |
| [`linesPortabilityListGet`](./`lines/linesPortabilityListGet.ts`) | GET | `...` | 1 |
| [`linesPortabilityPost`](./`lines/linesPortabilityPost.ts`) | POST | `...` | 1 |
| [`linesPortabilityPut`](./`lines/linesPortabilityPut.ts`) | PUT | `...` | 1 |
| [`linesServiceInfosGet`](./`lines/linesServiceInfosGet.ts`) | GET | `...` | 1 |
| [`linesServiceInfosPut`](./`lines/linesServiceInfosPut.ts`) | PUT | `...` | 1 |
| [`linesSimDelete`](./`lines/linesSimDelete.ts`) | DELETE | `...` | 1 |
| [`linesSimGet`](./`lines/linesSimGet.ts`) | GET | `...` | 1 |
| [`linesSimListGet`](./`lines/linesSimListGet.ts`) | GET | `...` | 1 |
| [`linesSimPost`](./`lines/linesSimPost.ts`) | POST | `...` | 1 |
| [`linesSimPut`](./`lines/linesSimPut.ts`) | PUT | `...` | 1 |

### misc

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`currentOrderIdsGet`](./`misc/currentOrderIdsGet.ts`) | GET | `...` | 1 |
| [`searchServicesGet`](./`misc/searchServicesGet.ts`) | GET | `...` | 1 |
| [`setDefaultSipDomainPost`](./`misc/setDefaultSipDomainPost.ts`) | POST | `...` | 1 |
| [`sipDomainsGet`](./`misc/sipDomainsGet.ts`) | GET | `...` | 1 |
| [`telephonyListGet`](./`misc/telephonyListGet.ts`) | GET | `...` | 1 |

### numbers

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`numbersDelete`](./`numbers/numbersDelete.ts`) | DELETE | `...` | 1 |
| [`numbersGet`](./`numbers/numbersGet.ts`) | GET | `...` | 1 |
| [`numbersListGet`](./`numbers/numbersListGet.ts`) | GET | `...` | 1 |
| [`numbersPortabilityDelete`](./`numbers/numbersPortabilityDelete.ts`) | DELETE | `...` | 1 |
| [`numbersPortabilityGet`](./`numbers/numbersPortabilityGet.ts`) | GET | `...` | 1 |
| [`numbersPortabilityListGet`](./`numbers/numbersPortabilityListGet.ts`) | GET | `...` | 1 |
| [`numbersPortabilityPost`](./`numbers/numbersPortabilityPost.ts`) | POST | `...` | 1 |
| [`numbersPortabilityPut`](./`numbers/numbersPortabilityPut.ts`) | PUT | `...` | 1 |
| [`numbersPost`](./`numbers/numbersPost.ts`) | POST | `...` | 1 |
| [`numbersPut`](./`numbers/numbersPut.ts`) | PUT | `...` | 1 |

### offers

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`faxOffersGet`](./`offers/faxOffersGet.ts`) | GET | `...` | 1 |
| [`lineOfferDetailsGet`](./`offers/lineOfferDetailsGet.ts`) | GET | `...` | 1 |
| [`lineOfferPhonesGet`](./`offers/lineOfferPhonesGet.ts`) | GET | `...` | 1 |
| [`lineOffersGet`](./`offers/lineOffersGet.ts`) | GET | `...` | 1 |

### trunks

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`trunksChangeContactPost`](./`trunks/trunksChangeContactPost.ts`) | POST | `...` | 1 |
| [`trunksGet`](./`trunks/trunksGet.ts`) | GET | `...` | 1 |
| [`trunksHardwareListGet`](./`trunks/trunksHardwareListGet.ts`) | GET | `...` | 1 |
| [`trunksHardwarePost`](./`trunks/trunksHardwarePost.ts`) | POST | `...` | 1 |
| [`trunksListGet`](./`trunks/trunksListGet.ts`) | GET | `...` | 1 |
| [`trunksNumberDelete`](./`trunks/trunksNumberDelete.ts`) | DELETE | `...` | 1 |
| [`trunksNumberGet`](./`trunks/trunksNumberGet.ts`) | GET | `...` | 1 |
| [`trunksNumberListGet`](./`trunks/trunksNumberListGet.ts`) | GET | `...` | 1 |
| [`trunksNumberPost`](./`trunks/trunksNumberPost.ts`) | POST | `...` | 1 |
| [`trunksNumberPut`](./`trunks/trunksNumberPut.ts`) | PUT | `...` | 1 |
| [`trunksServiceInfosGet`](./`trunks/trunksServiceInfosGet.ts`) | GET | `...` | 1 |
| [`trunksServiceInfosPut`](./`trunks/trunksServiceInfosPut.ts`) | PUT | `...` | 1 |

**Total:** 63 operations, 63 tests
