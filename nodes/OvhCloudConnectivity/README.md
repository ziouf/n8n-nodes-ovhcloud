# OVH Cloud Connectivity

> Manage OVHcloud connectivity eligibility, search and monitoring

## Overview

This node provides **28 operations** covering the API v1 endpoints for
managing OVHcloud resources.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
related IAM actions granted.

## Available Operations

### eligibilityRecall

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`recallGet`](./`resources/eligibilityRecall/recallGet.ts`) | GET    | `/connectivity/eligibility/recall` |
| [`recallPost`](./`resources/eligibilityRecall/recallPost.ts`) | POST   | `/connectivity/eligibility/recall` |
| [`recallDetailGet`](./`resources/eligibilityRecall/recallDetailGet.ts`) | GET    | `/connectivity/eligibility/recall/{id}` |
| [`recallUpdatePut`](./`resources/eligibilityRecall/recallUpdatePut.ts`) | PUT    | `/connectivity/eligibility/recall/{id}` |
| [`recallDelete`](./`resources/eligibilityRecall/recallDelete.ts`) | DELETE | `/connectivity/eligibility/recall/{id}` |

### eligibilityTest

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`testGet`](./`resources/eligibilityTest/testGet.ts`) | GET    | `/connectivity/eligibility/test` |
| [`testAddressPost`](./`resources/eligibilityTest/testAddressPost.ts`) | POST   | `/connectivity/eligibility/test/address` |
| [`testAddressPartnersPost`](./`resources/eligibilityTest/testAddressPartnersPost.ts`) | POST   | `/connectivity/eligibility/test/address/partners` |
| [`testBuildingPost`](./`resources/eligibilityTest/testBuildingPost.ts`) | POST   | `/connectivity/eligibility/test/building` |
| [`testBuildingPartnersPost`](./`resources/eligibilityTest/testBuildingPartnersPost.ts`) | POST   | `/connectivity/eligibility/test/building/partners` |
| [`testLinePost`](./`resources/eligibilityTest/testLinePost.ts`) | POST   | `/connectivity/eligibility/test/line` |
| [`testLinePartnersPost`](./`resources/eligibilityTest/testLinePartnersPost.ts`) | POST   | `/connectivity/eligibility/test/line/partners` |
| [`testOtpPost`](./`resources/eligibilityTest/testOtpPost.ts`) | POST   | `/connectivity/eligibility/test/otp` |
| [`testOtpPartnersPost`](./`resources/eligibilityTest/testOtpPartnersPost.ts`) | POST   | `/connectivity/eligibility/test/otp/partners` |

### eligibilitySearch

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`searchAddressesPost`](./`resources/eligibilitySearch/searchAddressesPost.ts`) | POST   | `/connectivity/eligibility/search/addresses` |
| [`searchBuildingDetailsPost`](./`resources/eligibilitySearch/searchBuildingDetailsPost.ts`) | POST   | `/connectivity/eligibility/search/buildingDetails` |
| [`searchBuildingsPost`](./`resources/eligibilitySearch/searchBuildingsPost.ts`) | POST   | `/connectivity/eligibility/search/buildings` |
| [`searchBuildingsByLinePost`](./`resources/eligibilitySearch/searchBuildingsByLinePost.ts`) | POST   | `/connectivity/eligibility/search/buildingsByLine` |
| [`searchCitiesPost`](./`resources/eligibilitySearch/searchCitiesPost.ts`) | POST   | `/connectivity/eligibility/search/cities` |
| [`searchLinesPost`](./`resources/eligibilitySearch/searchLinesPost.ts`) | POST   | `/connectivity/eligibility/search/lines` |
| [`searchMeetingsPost`](./`resources/eligibilitySearch/searchMeetingsPost.ts`) | POST   | `/connectivity/eligibility/search/meetings` |
| [`searchStreetNumbersPost`](./`resources/eligibilitySearch/searchStreetNumbersPost.ts`) | POST   | `/connectivity/eligibility/search/streetNumbers` |
| [`searchStreetNumbersDetailsPost`](./`resources/eligibilitySearch/searchStreetNumbersDetailsPost.ts`) | POST   | `/connectivity/eligibility/search/streetNumbers/details` |
| [`searchStreetsPost`](./`resources/eligibilitySearch/searchStreetsPost.ts`) | POST   | `/connectivity/eligibility/search/streets` |

### maintenanceMonitoring

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`workPlannedPublicGet`](./`resources/maintenanceMonitoring/workPlannedPublicGet.ts`) | GET    | `/connectivity/maintenance/workPlanned/public` |
| [`workPlannedPartnersGet`](./`resources/maintenanceMonitoring/workPlannedPartnersGet.ts`) | GET    | `/connectivity/maintenance/workPlanned/partners` |
| [`genericIncidentPublicGet`](./`resources/maintenanceMonitoring/genericIncidentPublicGet.ts`) | GET    | `/connectivity/monitoring/genericIncident/public` |
| [`genericIncidentPartnersGet`](./`resources/maintenanceMonitoring/genericIncidentPartnersGet.ts`) | GET    | `/connectivity/monitoring/genericIncident/partners` |

**Total:** 28 operations

