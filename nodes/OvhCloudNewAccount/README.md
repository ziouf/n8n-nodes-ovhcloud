# OVH Cloud New Account

> Create and inspect OVHcloud identifiers (nichandles)

## Overview

This node provides **8 operations** covering the `/newAccount` API v1 endpoints for
creating OVHcloud identifiers and retrieving the areas, contracts, corporation
types, countries, legal forms and validation rules that govern identifier creation.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The requests
themselves do not require authentication, but the credential is still required to
sign and dispatch the calls through `ApiClient`.

## Available Operations

| Operation                                                   | Method | Endpoint                      |
| ----------------------------------------------------------- | ------ | ----------------------------- |
| [`newAccountPost`](./`resources/newAccountPost.ts`)         | POST   | `/newAccount`                 |
| [`areaGet`](./`resources/areaGet.ts`)                       | GET    | `/newAccount/area`            |
| [`contractsGet`](./`resources/contractsGet.ts`)             | GET    | `/newAccount/contracts`       |
| [`corporationTypeGet`](./`resources/corporationTypeGet.ts`) | GET    | `/newAccount/corporationType` |
| [`countriesGet`](./`resources/countriesGet.ts`)             | GET    | `/newAccount/countries`       |
| [`creationRulesPost`](./`resources/creationRulesPost.ts`)   | GET    | `/newAccount/creationRules`   |
| [`legalformGet`](./`resources/legalformGet.ts`)             | GET    | `/newAccount/legalform`       |
| [`rulesPost`](./`resources/rulesPost.ts`)                   | POST   | `/newAccount/rules`           |

**Total:** 8 operations

## Notes

- No `serviceName` is required: these operations are not scoped to a service.
- `newAccountPost` marks `country`, `email`, `legalform`, `ovhCompany` and
  `ovhSubsidiary` as required, matching the API contract.
- `creationRulesPost` is a GET endpoint (query parameters `country`, `legalform`,
  `ovhCompany`, `ovhSubsidiary`) despite its historical `Post` filename; the
  shared field definitions live in
  [`resources/newAccountCommon.ts`](./`resources/newAccountCommon.ts`).
- `rulesPost` shares the same identifier body fields (plus an optional `action`).
- `contractsGet` takes `company` and `subsidiary` query parameters.
