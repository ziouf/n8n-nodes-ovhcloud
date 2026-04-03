# OVHcloud Pack xDSL Node Documentation

This document describes the **OVHcloud Pack xDSL** node operations available in the OVHcloud API for managing xDSL packs. It is intended for **developers** and **operators** who need to integrate with OVHcloud's xDSL services.

---

## Overview

The **OVHcloud Pack xDSL** node provides operations to manage OVHcloud xDSL packs, including listing services, retrieving pack details, modifying pack properties, and handling address moves or migrations.

All operations require authentication via the **OVH API** credential type unless explicitly marked as `noAuthentication: true`.

---

## Authentication

To use these operations, you must authenticate with the OVHcloud API using the following credential type:

```
OvhCloudApi (OVH API)
```

The authentication is handled via the **OVH API** credential type, which requires:

- `applicationKey`
- `applicationSecret`
- `consumerKey`
- `host` (e.g., `api.ovh.com`)

---

## Node Operations

### 1. List Available Services

**Path:** `/pack/xdsl`

**HTTP Method:** `GET`

**Description:** List available services for the xDSL pack.

**Parameters:**

| Name      | Data Type                             | Param Type | Required | Description                   |
| --------- | ------------------------------------- | ---------- | -------- | ----------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | `query`    | No       | Filter resources on IAM tags. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:get
```

**Example:**

```typescript
// List all services in the pack
const services = await ovhCloudApiClient.httpGet('/pack/xdsl', {
    packName: 'myPackName',
    iamTags: {},
});

console.log(services); // Output: ['service1', 'service2', ...]
```

---

### 2. Get Pack Details

**Path:** `/pack/xdsl/{packName}`

**HTTP Method:** `GET`

**Description:** Retrieve details of a specific xDSL pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.PackAdslWithIAM`

**IAM Actions:**

```
packXdsl:apiovh:get
```

**Example:**

```typescript
// Get details of a pack named 'myPackName'
const packDetails = await ovhCloudApiClient.httpGet('/pack/xdsl/{packName}', {
    packName: 'myPackName',
});

console.log(packDetails); // Output: { ... }
```

---

### 3. Alter Pack Properties

**Path:** `/pack/xdsl/{packName}`

**HTTP Method:** `PUT`

**Description:** Update the properties of a specific xDSL pack.

**Parameters:**

| Name       | Data Type            | Param Type | Required | Description                     |
| ---------- | -------------------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`             | `path`     | Yes      | The internal name of your pack. |
| `PackAdsl` | `pack.xdsl.PackAdsl` | `body`     | Yes      | New object properties.          |

**Response Type:** `void`

**IAM Actions:**

```
packXdsl:apiovh:put
```

**Example:**

```typescript
// Update the pack properties
const updatedProperties = await ovhCloudApiClient.httpPut('/pack/xdsl/{packName}', {
    packName: 'myPackName',
    PackAdsl: {
        // New properties here
    },
});

console.log(updatedProperties); // Output: None (void)
```

---

### 4. Move Access to Another Address

**Path:** `/pack/xdsl/{packName}/addressMove/moveOffer`

**HTTP Method:** `POST`

**Description:** Move the access to another address.

**Parameters:**

| Name                   | Data Type                                       | Param Type | Required | Description                                                                                                                                             |
| ---------------------- | ----------------------------------------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptContracts`      | `boolean`                                       | `body`     | Yes      | You explicitly accept the terms of the contract corresponding to your new offer.                                                                        |
| `building`             | `string`                                        | `body`     | No       | Building identifier, "null" if no identifier is available.                                                                                              |
| `buildingReference`    | `string`                                        | `body`     | No       | Building reference for FTTH and FTTE offers.                                                                                                            |
| `contactPhone`         | `string`                                        | `body`     | No       | Customer contact phone number.                                                                                                                          |
| `door`                 | `string`                                        | `body`     | No       | Door identifier, "null" if no identifier is available.                                                                                                  |
| `eligibilityReference` | `string`                                        | `body`     | Yes      | Eligibility reference.                                                                                                                                  |
| `engageMonths`         | `long`                                          | `body`     | No       | Number of months of re-engagement.                                                                                                                      |
| `floor`                | `string`                                        | `body`     | No       | Floor identifier, "null" if no identifier is available.                                                                                                 |
| `installationType`     | `connectivity.eligibility.InstallationTypeEnum` | `body`     | No       | Installation type, only on FTTH technology.                                                                                                             |
| `keepCurrentNumber`    | `boolean`                                       | `body`     | Yes      | Whether or not the current number should be kept.                                                                                                       |
| `meeting`              | `xdsl.eligibility.BookMeetingSlot`              | `body`     | No       | Data to book a meeting slot.                                                                                                                            |
| `modem`                | `pack.xdsl.ModemOptionEnum`                     | `body`     | Yes      | Modem choice.                                                                                                                                           |
| `mondialRelayId`       | `long`                                          | `body`     | No       | Mondial relay ID if a shipping is needed.                                                                                                               |
| `moveOutDate`          | `datetime`                                      | `body`     | No       | The date when the customer is no longer at the current address. Must be between now and +30 days. The default date will be the one in 30 days from now. |
| `nicShipping`          | `string`                                        | `body`     | No       | nicShipping if a shipping is needed.                                                                                                                    |
| `offerName`            | `string`                                        | `body`     | Yes      | Reference of the new offer.                                                                                                                             |
| `ontShippingContact`   | `string`                                        | `body`     | No       | Allows you to personalize a delivery address for the ONT. If empty, the address will be that of the installation.                                       |
| `options`              | `pack.xdsl.migration.OfferOption[]`             | `body`     | No       | Options wanted in the new offer.                                                                                                                        |
| `otp`                  | `boolean`                                       | `body`     | Yes      | Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?                                                                       |
| `otpReference`         | `string`                                        | `body`     | No       | Reference of the Optical Termination Point.                                                                                                             |
| `packName`             | `string`                                        | `path`     | Yes      | The internal name of your pack.                                                                                                                         |
| `productCode`          | `string`                                        | `body`     | Yes      | Product code, an unique identifier for the product from addressMove/offer.                                                                              |
| `residence`            | `string`                                        | `body`     | No       | Residence identifier, "null" if no identifier is available.                                                                                             |
| `stair`                | `string`                                        | `body`     | No       | Stair identifier, "null" if no identifier is available.                                                                                                 |
| `subServicesToDelete`  | `pack.xdsl.migration.OfferServiceToDelete[]`    | `body`     | No       | List of domains of services to delete if needed.                                                                                                        |
| `subServicesToKeep`    | `pack.xdsl.migration.OfferServiceToKeep[]`      | `body`     | No       | List of domains of services to keep if needed.                                                                                                          |

**Response Type:** `pack.xdsl.AsyncTask<long>`

**IAM Actions:**

```
packXdsl:apiovh:addressMove/moveOffer
```

**Example:**

```typescript
// Move access to a new address
const moveOfferTask = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/addressMove/moveOffer',
    {
        packName: 'myPackName',
        acceptContracts: true,
        eligibilityReference: 'eligibilityRef123',
        keepCurrentNumber: true,
        offerName: 'newOfferName',
        productCode: 'productCode123',
        otp: true,
        // Other optional parameters
    },
);

console.log(moveOfferTask); // Output: { taskId: 12345 }
```

---

### 5. Get Address Move Offers

**Path:** `/pack/xdsl/{packName}/addressMove/offers`

**HTTP Method:** `POST`

**Description:** Get the possibilities of address move offers available.

**Parameters:**

| Name                   | Data Type | Param Type | Required | Description                     |
| ---------------------- | --------- | ---------- | -------- | ------------------------------- |
| `eligibilityReference` | `string`  | `body`     | Yes      | Eligibility reference.          |
| `packName`             | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>`

**IAM Actions:**

```
packXdsl:apiovh:addressMove/offers/create
```

**Example:**

```typescript
// Get available address move offers
const offersTask = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/addressMove/offers', {
    packName: 'myPackName',
    eligibilityReference: 'eligibilityRef123',
});

console.log(offersTask); // Output: { taskId: 12345 }
```

---

### 6. Calculate Services to Delete with Unpack Terms

**Path:** `/pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms`

**HTTP Method:** `POST`

**Description:** Calculate services to delete with unpack terms for a new offer.

**Parameters:**

| Name        | Data Type                           | Param Type | Required | Description                      |
| ----------- | ----------------------------------- | ---------- | -------- | -------------------------------- |
| `offerName` | `string`                            | `body`     | Yes      | Reference of the new offer.      |
| `options`   | `pack.xdsl.migration.OfferOption[]` | `body`     | No       | Options wanted in the new offer. |
| `packName`  | `string`                            | `path`     | Yes      | The internal name of your pack.  |

**Response Type:** `pack.xdsl.migration.SubServicesDetailsToDelete[]`

**IAM Actions:**

```
packXdsl:apiovh:addressMove/servicesToDeleteUnpackTerms/create
```

**Example:**

```typescript
// Calculate services to delete
const servicesToDelete = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms',
    {
        packName: 'myPackName',
        offerName: 'newOfferName',
        options: [{ optionName: 'option1' }],
    },
);

console.log(servicesToDelete); // Output: { ... }
```

---

### 7. Check if Resiliation Can Be Cancelled

**Path:** `/pack/xdsl/{packName}/canCancelResiliation`

**HTTP Method:** `GET`

**Description:** Check if the resiliation can be cancelled.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `boolean`

**IAM Actions:**

```
packXdsl:apiovh:canCancelResiliation/get
```

**Example:**

```typescript
// Check if resiliation can be cancelled
const canCancel = await ovhCloudApiClient.httpGet('/pack/xdsl/{packName}/canCancelResiliation', {
    packName: 'myPackName',
});

console.log(canCancel); // Output: true or false
```

---

### 8. Cancel Ongoing Resiliation

**Path:** `/pack/xdsl/{packName}/cancelResiliation`

**HTTP Method:** `POST`

**Description:** Cancel the ongoing resiliation.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `void`

**IAM Actions:**

```
packXdsl:apiovh:cancelResiliation/create
```

**Example:**

```typescript
// Cancel resiliation
const cancelResiliation = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/cancelResiliation',
    {
        packName: 'myPackName',
    },
);

console.log(cancelResiliation); // Output: None (void)
```

---

### 9. Change Contacts for the Pack

**Path:** `/pack/xdsl/{packName}/changeContact`

**HTTP Method:** `POST`

**Description:** Change the admin, billing, or tech contacts for the pack.

**Parameters:**

| Name             | Data Type                    | Param Type | Required | Description                            |
| ---------------- | ---------------------------- | ---------- | -------- | -------------------------------------- |
| `contactAdmin`   | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as admin contact.   |
| `contactBilling` | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as billing contact. |
| `contactTech`    | `coreTypes.AccountId:string` | `body`     | No       | The contact to set as tech contact.    |
| `packName`       | `string`                     | `path`     | Yes      | The internal name of your pack.        |

**Response Type:** `long[]`

**IAM Actions:**

```
packXdsl:apiovh:changeContact
```

**Example:**

```typescript
// Change contacts
const contactChanges = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/changeContact', {
    packName: 'myPackName',
    contactAdmin: 'admin123',
    contactBilling: 'billing123',
    contactTech: 'tech123',
});

console.log(contactChanges); // Output: [123, 456, 789]
```

---

### 10. Get Contact Information for the Owner

**Path:** `/pack/xdsl/{packName}/contactOwner`

**HTTP Method:** `GET`

**Description:** Get contact information about the owner of the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.ContactInfos`

**IAM Actions:**

```
packXdsl:apiovh:contactOwner/get
```

**Example:**

```typescript
// Get owner contact information
const ownerContact = await ovhCloudApiClient.httpGet('/pack/xdsl/{packName}/contactOwner', {
    packName: 'myPackName',
});

console.log(ownerContact); // Output: { ... }
```

---

### 11. Get Available TLDs for Domain Order

**Path:** `/pack/xdsl/{packName}/domain/options/tlds`

**HTTP Method:** `GET`

**Description:** Get the available TLDs for domain order.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:domain/options/tlds/get
```

**Example:**

```typescript
// Get available TLDs
const tlds = await ovhCloudApiClient.httpGet('/pack/xdsl/{packName}/domain/options/tlds', {
    packName: 'myPackName',
});

console.log(tlds); // Output: ['.com', '.fr', '.net', ...]
```

---

### 12. List Domain Services

**Path:** `/pack/xdsl/{packName}/domain/services`

**HTTP Method:** `GET`

**Description:** List the domain services available in the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:domain/services/get
```

**Example:**

```typescript
// List domain services
const domainServices = await ovhCloudApiClient.httpGet('/pack/xdsl/{packName}/domain/services', {
    packName: 'myPackName',
});

console.log(domainServices); // Output: ['domain1.com', 'domain2.fr', ...]
```

---

### 13. Activate a Domain Service

**Path:** `/pack/xdsl/{packName}/domain/services`

**HTTP Method:** `POST`

**Description:** Activate a domain service in the pack.

**Parameters:**

| Name       | DataType                     | Param Type | Required | Description                                   |
| ---------- | ---------------------------- | ---------- | -------- | --------------------------------------------- |
| `action`   | `pack.xdsl.DomainActionEnum` | `body`     | Yes      | Domain action (e.g., `register`, `transfer`). |
| `authInfo` | `string`                     | `body`     | No       | Needed for transfer from another registrar.   |
| `domain`   | `string`                     | `body`     | Yes      | Domain name.                                  |
| `packName` | `string`                     | `path`     | Yes      | The internal name of your pack.               |
| `tld`      | `string`                     | `body`     | Yes      | TLD of the domain.                            |

**Response Type:** `pack.xdsl.Task`

**IAM Actions:**

```
packXdsl:apiovh:domain/services/create
```

**Example:**

```typescript
// Register a new domain
const domainTask = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/domain/services', {
    packName: 'myPackName',
    action: 'register',
    domain: 'newdomain',
    tld: '.com',
});

console.log(domainTask); // Output: { taskId: 12345 }
```

---

### 14. List Available Domains for Email Pro

**Path:** `/pack/xdsl/{packName}/emailPro/options/domains`

**HTTP Method:** `GET`

**Description:** List the available domains for the Email Pro service.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:emailPro/options/domains/get
```

**Example:**

```typescript
// List available domains for Email Pro
const emailDomains = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/emailPro/options/domains',
    {
        packName: 'myPackName',
    },
);

console.log(emailDomains); // Output: ['domain1.com', 'domain2.fr', ...]
```

---

### 15. Check if Email Address is Available for Email Pro

**Path:** `/pack/xdsl/{packName}/emailPro/options/isEmailAvailable`

**HTTP Method:** `GET`

**Description:** Check if an email address is available for Email Pro activation.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `email`    | `string`  | `query`    | Yes      | The email address to check.     |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `boolean`

**IAM Actions:**

```
packXdsl:apiovh:emailPro/options/isEmailAvailable/get
```

**Example:**

```typescript
// Check email availability
const isAvailable = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/emailPro/options/isEmailAvailable',
    {
        packName: 'myPackName',
        email: 'test@domain.com',
    },
);

console.log(isAvailable); // Output: true or false
```

---

### 16. List Email Pro Services

**Path:** `/pack/xdsl/{packName}/emailPro/services`

**HTTP Method:** `GET`

**Description:** List the Email Pro services available in the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:emailPro/services/get
```

**Example:**

```typescript
// List Email Pro services
const emailProServices = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/emailPro/services',
    {
        packName: 'myPackName',
    },
);

console.log(emailProServices); // Output: ['service1', 'service2', ...]
```

---

### 17. Activate an Email Pro Service

**Path:** `/pack/xdsl/{packName}/emailPro/services`

**HTTP Method:** `POST`

**Description:** Activate an Email Pro service.

**Parameters:**

| Name       | Data Type  | Param Type | Required | Description                     |
| ---------- | ---------- | ---------- | -------- | ------------------------------- |
| `email`    | `string`   | `body`     | Yes      | The email address.              |
| `packName` | `string`   | `path`     | Yes      | The internal name of your pack. |
| `password` | `password` | `body`     | Yes      | The password for the service.   |

**Response Type:** `pack.xdsl.Task`

**IAM Actions:**

```
packXdsl:apiovh:emailPro/services/create
```

**Example:**

```typescript
// Activate an Email Pro service
const emailProTask = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/emailPro/services', {
    packName: 'myPackName',
    email: 'test@domain.com',
    password: 'securePassword123',
});

console.log(emailProTask); // Output: { taskId: 12345 }
```

---

### 18. List Exchange 2013 Services

**Path:** `/pack/xdsl/{packName}/exchangeAccount/services`

**HTTP Method:** `GET`

**Description:** List the Exchange 2013 services available in the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:exchangeAccount/services/get
```

**Example:**

```typescript
// List Exchange 2013 services
const exchangeServices = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/exchangeAccount/services',
    {
        packName: 'myPackName',
    },
);

console.log(exchangeServices); // Output: ['service1', 'service2', ...]
```

---

### 19. Get Exchange 2013 Service Details

**Path:** `/pack/xdsl/{packName}/exchangeAccount/services/{domain}`

**HTTP Method:** `GET`

**Description:** Get details of a specific Exchange 2013 service.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`  | `path`     | Yes      | The domain name.                |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.ExchangeAccountService`

**IAM Actions:**

```
packXdsl:apiovh:exchangeAccount/services/get
```

**Example:**

```typescript
// Get service details
const serviceDetails = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/exchangeAccount/services/{domain}',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
    },
);

console.log(serviceDetails); // Output: { ... }
```

---

### 20. List Exchange Individual Available Domains

**Path:** `/pack/xdsl/{packName}/exchangeIndividual/options/domains`

**HTTP Method:** `GET`

**Description:** List the available domains for Exchange Individual service creation.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:exchangeIndividual/options/domains/get
```

**Example:**

```typescript
// List available domains for Exchange Individual
const exchangeDomains = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/exchangeIndividual/options/domains',
    {
        packName: 'myPackName',
    },
);

console.log(exchangeDomains); // Output: ['domain1.com', 'domain2.fr', ...]
```

---

### 21. Check if Email Address is Available for Exchange Individual

**Path:** `/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable`

**HTTP Method:** `GET`

**Description:** Check if an email address is available for Exchange Individual service creation.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `email`    | `string`  | `query`    | Yes      | The email address to check.     |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `boolean`

**IAM Actions:**

```
packXdsl:apiovh:exchangeIndividual/options/isEmailAvailable/get
```

**Example:**

```typescript
// Check email availability
const isEmailAvailable = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable',
    {
        packName: 'myPackName',
        email: 'test@domain.com',
    },
);

console.log(isEmailAvailable); // Output: true or false
```

---

### 22. List Exchange Organization Services

**Path:** `/pack/xdsl/{packName}/exchangeOrganization/services`

**HTTP Method:** `GET`

**Description:** List the Exchange Organization services available in the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:exchangeOrganization/services/get
```

**Example:**

```typescript
// List Exchange Organization services
const orgServices = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/exchangeOrganization/services',
    {
        packName: 'myPackName',
    },
);

console.log(orgServices); // Output: ['service1', 'service2', ...]
```

---

### 23. List Hosted Email Available Domains

**Path:** `/pack/xdsl/{packName}/hostedEmail/options/domains`

**HTTP Method:** `GET`

**Description:** List the available domains for Hosted Email service creation.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/options/domains/get
```

**Example:**

```typescript
// List available domains for Hosted Email
const hostedEmailDomains = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/hostedEmail/options/domains',
    {
        packName: 'myPackName',
    },
);

console.log(hostedEmailDomains); // Output: ['domain1.com', 'domain2.fr', ...]
```

---

### 24. List Hosted Email Services

**Path:** `/pack/xdsl/{packName}/hostedEmail/services`

**HTTP Method:** `GET`

**Description:** List the Hosted Email services available in the pack.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `string[]`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/get
```

**Example:**

```typescript
// List Hosted Email services
const hostedEmailServices = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/hostedEmail/services',
    {
        packName: 'myPackName',
    },
);

console.log(hostedEmailServices); // Output: ['service1', 'service2', ...]
```

---

### 25. Activate a Hosted Email Service

**Path:** `/pack/xdsl/{packName}/hostedEmail/services`

**HTTP Method:** `POST`

**Description:** Activate a Hosted Email service.

**Parameters:**

| Name       | Data Type  | Param Type | Required | Description                     |
| ---------- | ---------- | ---------- | -------- | ------------------------------- |
| `email`    | `string`   | `body`     | Yes      | The email address.              |
| `packName` | `string`   | `path`     | Yes      | The internal name of your pack. |
| `password` | `password` | `body`     | Yes      | The password for the service.   |

**Response Type:** `pack.xdsl.Task`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/create
```

**Example:**

```typescript
// Activate a Hosted Email service
const hostedEmailTask = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/hostedEmail/services',
    {
        packName: 'myPackName',
        email: 'test@domain.com',
        password: 'securePassword123',
    },
);

console.log(hostedEmailTask); // Output: { taskId: 12345 }
```

---

### 26. Delete a Hosted Email Service

**Path:** `/pack/xdsl/{packName}/hostedEmail/services/{domain}`

**HTTP Method:** `DELETE`

**Description:** Delete a Hosted Email service.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`  | `path`     | Yes      | The domain name.                |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `void`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/delete
```

**Example:**

```typescript
// Delete a Hosted Email service
const deleteService = await ovhCloudApiClient.httpDelete(
    '/pack/xdsl/{packName}/hostedEmail/services/{domain}',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
    },
);

console.log(deleteService); // Output: None (void)
```

---

### 27. Get Hosted Email Service Details

**Path:** `/pack/xdsl/{packName}/hostedEmail/services/{domain}`

**HTTP Method:** `GET`

**Description:** Get details of a Hosted Email service.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`  | `path`     | Yes      | The domain name.                |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.HostedEmailService`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/get
```

**Example:**

```typescript
// Get service details
const serviceDetails = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/hostedEmail/services/{domain}',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
    },
);

console.log(serviceDetails); // Output: { ... }
```

---

### 28. Get Hosted Email Account Information

**Path:** `/pack/xdsl/{packName}/hostedEmail/services/{domain}/account`

**HTTP Method:** `GET`

**Description:** Get information about a Hosted Email account.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`  | `path`     | Yes      | The domain name.                |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.HostedEmail.Account`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/account/get
```

**Example:**

```typescript
// Get account information
const accountInfo = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/hostedEmail/services/{domain}/account',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
    },
);

console.log(accountInfo); // Output: { ... }
```

---

### 29. Change Hosted Email Account Password

**Path:** `/pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword`

**HTTP Method:** `POST`

**Description:** Change the password of a Hosted Email account.

**Parameters:**

| Name       | Data Type  | Param Type | Required | Description                     |
| ---------- | ---------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`   | `path`     | Yes      | The domain name.                |
| `packName` | `string`   | `path`     | Yes      | The internal name of your pack. |
| `password` | `password` | `body`     | Yes      | The new password.               |

**Response Type:** `void`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/changePassword
```

**Example:**

```typescript
// Change account password
const changePassword = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
        password: 'newSecurePassword123',
    },
);

console.log(changePassword); // Output: None (void)
```

---

### 30. Get Hosted Email Configuration Information

**Path:** `/pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration`

**HTTP Method:** `GET`

**Description:** Get configuration information for a Hosted Email service.

**Parameters:**

| Name       | Data Type | Param Type | Required | Description                     |
| ---------- | --------- | ---------- | -------- | ------------------------------- |
| `domain`   | `string`  | `path`     | Yes      | The domain name.                |
| `packName` | `string`  | `path`     | Yes      | The internal name of your pack. |

**Response Type:** `pack.xdsl.HostedEmail.Configuration`

**IAM Actions:**

```
packXdsl:apiovh:hostedEmail/services/configuration/get
```

**Example:**

```typescript
// Get configuration information
const configInfo = await ovhCloudApiClient.httpGet(
    '/pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration',
    {
        packName: 'myPackName',
        domain: 'domain1.com',
    },
);

console.log(configInfo); // Output: { ... }
```

---

### 31. Migrate to a Selected Offer

**Path:** `/pack/xdsl/{packName}/migration/migrate`

**HTTP Method:** `POST`

**Description:** Migrate to a selected offer.

**Parameters:**

| Name                  | Data Type                                       | Param Type | Required | Description                                                                                                       |
| --------------------- | ----------------------------------------------- | ---------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `acceptContracts`     | `boolean`                                       | `body`     | Yes      | You explicitly accept the terms of the contract corresponding to your new offer.                                  |
| `buildingReference`   | `string`                                        | `body`     | No       | Building reference for FTTH and FTTE offers.                                                                      |
| `contactPhone`        | `string`                                        | `body`     | No       | Customer contact phone number.                                                                                    |
| `engageMonths`        | `long`                                          | `body`     | No       | Number of months of re-engagement.                                                                                |
| `floor`               | `string`                                        | `body`     | No       | Floor identifier, "*NA*" if no identifier is available.                                                           |
| `installationType`    | `connectivity.eligibility.InstallationTypeEnum` | `body`     | No       | Installation type, only on FTTH technology.                                                                       |
| `meeting`             | `xdsl.eligibility.BookMeetingSlot`              | `body`     | No       | Data to book a meeting slot.                                                                                      |
| `modem`               | `pack.xdsl.ModemOptionEnum`                     | `body`     | Yes      | Modem choice.                                                                                                     |
| `mondialRelayId`      | `long`                                          | `body`     | No       | Mondial relay ID if a shipping is needed.                                                                         |
| `nicShipping`         | `string`                                        | `body`     | No       | nicShipping if a shipping is needed.                                                                              |
| `offerName`           | `string`                                        | `body`     | Yes      | Reference of the new offer.                                                                                       |
| `ontShippingContact`  | `string`                                        | `body`     | No       | Allows you to personalize a delivery address for the ONT. If empty, the address will be that of the installation. |
| `options`             | `pack.xdsl.migration.OfferOption[]`             | `body`     | No       | Options wanted in the new offer.                                                                                  |
| `otp`                 | `boolean`                                       | `body`     | No       | Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?                                 |
| `otpReference`        | `string`                                        | `body`     | No       | Reference of the Optical Termination Point.                                                                       |
| `packName`            | `string`                                        | `path`     | Yes      | The internal name of your pack.                                                                                   |
| `productCode`         | `string`                                        | `body`     | No       | Product code, an unique identifier to designate the chosen offer.                                                 |
| `residence`           | `string`                                        | `body`     | No       | Residence identifier, "*NA*" if no identifier is available.                                                       |
| `stair`               | `string`                                        | `body`     | No       | Stair identifier, "*NA*" if no identifier is available.                                                           |
| `subServicesToDelete` | `pack.xdsl.migration.OfferServiceToDelete[]`    | `body`     | No       | List of domains of services to delete if needed.                                                                  |
| `subServicesToKeep`   | `pack.xdsl.migration.OfferServiceToKeep[]`      | `body`     | No       | List of domains of services to keep if needed.                                                                    |

**Response Type:** `pack.xdsl.Task`

**IAM Actions:**

```
packXdsl:apiovh:migration/migrate
```

**Example:**

```typescript
// Migrate to a new offer
const migrationTask = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/migration/migrate', {
    packName: 'myPackName',
    acceptContracts: true,
    offerName: 'newOfferName',
    modem: 'modemOption1',
    // Other optional parameters
});

console.log(migrationTask); // Output: { taskId: 12345 }
```

---

### 32. Get Migration Offers

**Path:** `/pack/xdsl/{packName}/migration/offers`

**HTTP Method:** `POST`

**Description:** Get the possibilities of migration offers available.

**Parameters:**

| Name                | Data Type | Param Type | Required | Description                                  |
| ------------------- | --------- | ---------- | -------- | -------------------------------------------- |
| `buildingReference` | `string`  | `body`     | No       | Building reference for FTTH and FTTE offers. |
| `packName`          | `string`  | `path`     | Yes      | The internal name of your pack.              |

**Response Type:** `pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>`

**IAM Actions:**

```
packXdsl:apiovh:migration/offers/create
```

**Example:**

```typescript
// Get migration offers
const offersTask = await ovhCloudApiClient.httpPost('/pack/xdsl/{packName}/migration/offers', {
    packName: 'myPackName',
    buildingReference: 'buildingRef123',
});

console.log(offersTask); // Output: { taskId: 12345 }
```

---

### 33. Calculate Services to Delete with Migration Terms

**Path:** `/pack/xdsl/{packName}/migration/servicesToDeleteUnpackTerms`

**HTTP Method:** `POST`

**Description:** Calculate services to delete with migration terms for a new offer.

**Parameters:**

| Name        | Data Type                           | Param Type | Required | Description                      |
| ----------- | ----------------------------------- | ---------- | -------- | -------------------------------- |
| `offerName` | `string`                            | `body`     | Yes      | Reference of the new offer.      |
| `options`   | `pack.xdsl.migration.OfferOption[]` | `body`     | No       | Options wanted in the new offer. |
| `packName`  | `string`                            | `path`     | Yes      | The internal name of your pack.  |

**Response Type:** `pack.xdsl.migration.SubServicesDetailsToDelete[]`

**IAM Actions:**

```
packXdsl:apiovh:migration/servicesToDeleteUnpackTerms/create
```

**Example:**

```typescript
// Calculate services to delete
const servicesToDelete = await ovhCloudApiClient.httpPost(
    '/pack/xdsl/{packName}/migration/servicesToDeleteUnpackTerms',
    {
        packName: 'myPackName',
        offerName: 'newOfferName',
        options: [{ optionName: 'option1' }],
    },
);

console.log(servicesToDelete); // Output: { ... }
```

---

## Notes

- **API Status:** All operations listed are in **stable production** (`PRODUCTION`).
- **No Authentication:** Some operations may not require authentication, but most do.
- **IAM Actions:** Each operation requires specific IAM actions to be authorized.
- **Error Handling:** Validate inputs before making API calls to avoid errors.
- **Testing:** Manually test operations in the n8n UI using `npm run dev`.

---

## Troubleshooting

### Common Issues

1. **Authentication Errors:** Ensure your OVH API credentials are valid and have the required permissions.
2. **Invalid Parameters:** Double-check parameter names and data types. The API may reject requests with incorrect or missing parameters.
3. **IAM Action Denied:** Verify that your credentials include the required IAM actions for the operation.

### Debugging Tips

- Use `npm run dev` to test operations in the n8n UI.
- Check the API response for error messages.
- Validate inputs before making API calls.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com)
- [n8n Workflow Documentation](https://docs.n8n.io)
- [OVHcloud xDSL Pack Documentation](https://docs.ovh.com/en/public-cloud/xdsl/pack/)
