# OVHcloud n8n Node - `/newAccount` API Operations

This document describes the `/newAccount` API operations available for the **OVHcloud n8n Node**.

---

## Overview

The `/newAccount` endpoint is part of the **n8n** integration for **OVHcloud** services. It allows users to create new OVHcloud identifiers (nichandles) and retrieve associated rules, contracts, and available options.

This endpoint is **versioned** as `1.0` and is currently in **Production** status.

---

## API Base Path

```
https://eu.api.ovh.com/v1/newAccount
```

---

## Available Operations

| **Path**                      | **HTTP Method** | **Description**                                                    | **Authentication** | **Response Type**              |
| ----------------------------- | --------------- | ------------------------------------------------------------------ | ------------------ | ------------------------------ |
| `/newAccount`                 | `POST`          | Create a new OVHcloud identifier                                   | None               | `nichandle.NewAccountAndToken` |
| `/newAccount/area`            | `GET`           | Retrieve all available areas for a given country                   | None               | `string[]`                     |
| `/newAccount/contracts`       | `GET`           | Retrieve contracts governing identifier creation                   | None               | `order.Contract[]`             |
| `/newAccount/corporationType` | `GET`           | Retrieve all available corporation types for a given country       | None               | `string[]`                     |
| `/newAccount/countries`       | `GET`           | Retrieve all available countries for an OVH company and subsidiary | None               | `nichandle.CountryEnum[]`      |
| `/newAccount/creationRules`   | `POST`          | Retrieve creation rules for identifier fields                      | None               | `nichandle.CreationRules`      |
| `/newAccount/legalform`       | `GET`           | Retrieve all available legal forms for a given country             | None               | `string[]`                     |
| `/newAccount/rules`           | `POST`          | Retrieve rules for creating or updating an identifier              | None               | `nichandle.CreationRules`      |

---

## Operation Details

### 1. `POST /newAccount` - Create a new OVHcloud identifier

#### Description

Creates a new OVHcloud identifier (nichandle) and returns the identifier along with a login token.

#### Parameters

| **Parameter**                         | **Type**                      | **Required** | **Description**                                    |
| ------------------------------------- | ----------------------------- | ------------ | -------------------------------------------------- |
| `address`                             | `string`                      | No           | Physical address                                   |
| `area`                                | `string`                      | No           | Area of residence                                  |
| `birthCity`                           | `string`                      | No           | Birth city                                         |
| `birthDay`                            | `string`                      | No           | Birth day                                          |
| `city`                                | `string`                      | No           | City                                               |
| `companyNationalIdentificationNumber` | `string`                      | No           | National identification number for a corporation   |
| `country`                             | `nichandle.CountryEnum`       | **Yes**      | Country of the identifier                          |
| `email`                               | `string`                      | **Yes**      | Primary email address                              |
| `fax`                                 | `string`                      | No           | Fax number                                         |
| `firstname`                           | `string`                      | No           | First name                                         |
| `italianSDI`                          | `string`                      | No           | Italian SDI number                                 |
| `language`                            | `nichandle.LanguageEnum`      | No           | Preferred language                                 |
| `legalform`                           | `nichandle.LegalFormEnum`     | **Yes**      | Legal form of the identifier                       |
| `name`                                | `string`                      | No           | Last name                                          |
| `nationalIdentificationNumber`        | `string`                      | No           | National identification number                     |
| `organisation`                        | `string`                      | No           | Organization name                                  |
| `ovhCompany`                          | `nichandle.OvhCompanyEnum`    | **Yes**      | OVH company (e.g., `ovh`, `kimsufi`, `soyoustart`) |
| `ovhSubsidiary`                       | `nichandle.OvhSubsidiaryEnum` | **Yes**      | OVH subsidiary (e.g., `FR`, `GB`, `US`)            |
| `phone`                               | `string`                      | No           | Phone number                                       |
| `phoneCountry`                        | `nichandle.CountryEnum`       | No           | Country of the phone number                        |
| `phoneType`                           | `nichandle.PhoneTypeEnum`     | No           | Phone type (e.g., `mobile`, `landline`)            |
| `purposeOfPurchase`                   | `string`                      | No           | Purpose of the purchase                            |
| `sex`                                 | `nichandle.GenderEnum`        | No           | Gender (e.g., `male`, `female`)                    |
| `spareEmail`                          | `string`                      | No           | Additional email address                           |
| `vat`                                 | `string`                      | No           | VAT number                                         |
| `zip`                                 | `string`                      | No           | ZIP/postal code                                    |

#### Response

Returns a `nichandle.NewAccountAndToken` object containing:

| **Field**       | **Type** | **Description**                       |
| --------------- | -------- | ------------------------------------- |
| `consumerKey`   | `string` | API consumer key for authentication   |
| `ovhIdentifier` | `string` | The newly created OVHcloud identifier |

---

### 2. `GET /newAccount/area` - Retrieve all available areas for a given country

#### Description

Returns a list of all available areas (e.g., states, regions) for a specified country.

#### Parameters

| **Parameter** | **Type**                | **Required** | **Description**                 |
| ------------- | ----------------------- | ------------ | ------------------------------- |
| `country`     | `nichandle.CountryEnum` | **Yes**      | Country code (e.g., `FR`, `US`) |

#### Response

Returns a `string[]` containing all available area codes.

---

### 3. `GET /newAccount/contracts` - Retrieve contracts governing identifier creation

#### Description

Returns the contracts that govern the creation of an OVHcloud identifier for a given company and subsidiary.

#### Parameters

| **Parameter** | **Type**                      | **Required** | **Description**                                    |
| ------------- | ----------------------------- | ------------ | -------------------------------------------------- |
| `company`     | `nichandle.OvhCompanyEnum`    | **Yes**      | OVH company (e.g., `ovh`, `kimsufi`, `soyoustart`) |
| `subsidiary`  | `nichandle.OvhSubsidiaryEnum` | **Yes**      | OVH subsidiary (e.g., `FR`, `GB`, `US`)            |

#### Response

Returns an `order.Contract[]` containing:

| **Field** | **Type** | **Description**     |
| --------- | -------- | ------------------- |
| `content` | `text`   | Contract content    |
| `name`    | `string` | Contract name       |
| `url`     | `string` | URL to the contract |

---

### 4. `GET /newAccount/corporationType` - Retrieve all available corporation types for a given country

#### Description

Returns a list of all available corporation types for a specified country.

#### Parameters

| **Parameter** | **Type**                | **Required** | **Description**                 |
| ------------- | ----------------------- | ------------ | ------------------------------- |
| `country`     | `nichandle.CountryEnum` | **Yes**      | Country code (e.g., `FR`, `US`) |

#### Response

Returns a `string[]` containing all available corporation types.

---

### 5. `GET /newAccount/countries` - Retrieve all available countries for an OVH company and subsidiary

#### Description

Returns a list of all available countries for a given OVH company and subsidiary.

#### Parameters

| **Parameter**   | **Type**                      | **Required** | **Description**                                    |
| --------------- | ----------------------------- | ------------ | -------------------------------------------------- |
| `ovhCompany`    | `nichandle.OvhCompanyEnum`    | **Yes**      | OVH company (e.g., `ovh`, `kimsufi`, `soyoustart`) |
| `ovhSubsidiary` | `nichandle.OvhSubsidiaryEnum` | **Yes**      | OVH subsidiary (e.g., `FR`, `GB`, `US`)            |

#### Response

Returns a `nichandle.CountryEnum[]` containing all available country codes.

---

### 6. `POST /newAccount/creationRules` - Retrieve creation rules for identifier fields

#### Description

Retrieves the rules to follow when creating or updating an OVHcloud identifier for specific fields.

#### Parameters

| **Parameter**                         | **Type**                            | **Required** | **Description**                                    |
| ------------------------------------- | ----------------------------------- | ------------ | -------------------------------------------------- |
| `action`                              | `nichandle.CreationRulesActionEnum` | No           | Action to perform (`create` or `update`)           |
| `address`                             | `string`                            | No           | Physical address                                   |
| `area`                                | `string`                            | No           | Area of residence                                  |
| `birthCity`                           | `string`                            | No           | Birth city                                         |
| `birthDay`                            | `string`                            | No           | Birth day                                          |
| `city`                                | `string`                            | No           | City                                               |
| `companyNationalIdentificationNumber` | `string`                            | No           | National identification number for a corporation   |
| `country`                             | `nichandle.CountryEnum`             | No           | Country code (e.g., `FR`, `US`)                    |
| `email`                               | `string`                            | No           | Primary email address                              |
| `fax`                                 | `string`                            | No           | Fax number                                         |
| `firstname`                           | `string`                            | No           | First name                                         |
| `italianSDI`                          | `string`                            | No           | Italian SDI number                                 |
| `language`                            | `string`                            | No           | Preferred language                                 |
| `legalform`                           | `string`                            | No           | Legal form of the identifier                       |
| `name`                                | `string`                            | No           | Last name                                          |
| `nationalIdentificationNumber`        | `string`                            | No           | National identification number                     |
| `organisation`                        | `string`                            | No           | Organization name                                  |
| `ovhCompany`                          | `nichandle.OvhCompanyEnum`          | No           | OVH company (e.g., `ovh`, `kimsufi`, `soyoustart`) |
| `ovhSubsidiary`                       | `nichandle.OvhSubsidiaryEnum`       | No           | OVH subsidiary (e.g., `FR`, `GB`, `US`)            |
| `phone`                               | `string`                            | No           | Phone number                                       |
| `phoneCountry`                        | `string`                            | No           | Country of the phone number                        |
| `phoneType`                           | `string`                            | No           | Phone type (e.g., `mobile`, `landline`)            |
| `purposeOfPurchase`                   | `string`                            | No           | Purpose of the purchase                            |
| `sex`                                 | `string`                            | No           | Gender (e.g., `male`, `female`)                    |
| `spareEmail`                          | `string`                            | No           | Additional email address                           |
| `vat`                                 | `string`                            | No           | VAT number                                         |
| `zip`                                 | `string`                            | No           | ZIP/postal code                                    |

#### Response

Returns a `nichandle.CreationRules` object containing:

| **Field**           | **Type**   | **Description**                                |
| ------------------- | ---------- | ---------------------------------------------- |
| `defaultValue`      | `string`   | Default value of the field                     |
| `examples`          | `string[]` | Examples of values for the field               |
| `fieldName`         | `string`   | Name of the field                              |
| `in`                | `string[]` | List of allowed values for the field           |
| `mandatory`         | `boolean`  | Whether the field is mandatory                 |
| `maxLength`         | `long`     | Maximum length of the field                    |
| `minLength`         | `long`     | Minimum length of the field                    |
| `prefix`            | `string`   | Prefix of the field value                      |
| `regularExpression` | `string`   | Regular expression to validate the field value |

---

### 7. `GET /newAccount/legalform` - Retrieve all available legal forms for a given country

#### Description

Returns a list of all available legal forms for a specified country.

#### Parameters

| **Parameter** | **Type**                | **Required** | **Description**                 |
| ------------- | ----------------------- | ------------ | ------------------------------- |
| `country`     | `nichandle.CountryEnum` | **Yes**      | Country code (e.g., `FR`, `US`) |

#### Response

Returns a `string[]` containing all available legal forms.

---

### 8. `POST /newAccount/rules` - Retrieve rules for creating or updating an identifier

#### Description

Retrieves the rules to follow when creating or updating an OVHcloud identifier.

#### Parameters

| **Parameter**                         | **Type**                            | **Required** | **Description**                                    |
| ------------------------------------- | ----------------------------------- | ------------ | -------------------------------------------------- |
| `action`                              | `nichandle.CreationRulesActionEnum` | No           | Action to perform (`create` or `update`)           |
| `address`                             | `string`                            | No           | Physical address                                   |
| `area`                                | `string`                            | No           | Area of residence                                  |
| `birthCity`                           | `string`                            | No           | Birth city                                         |
| `birthDay`                            | `string`                            | No           | Birth day                                          |
| `city`                                | `string`                            | No           | City                                               |
| `companyNationalIdentificationNumber` | `string`                            | No           | National identification number for a corporation   |
| `country`                             | `nichandle.CountryEnum`             | No           | Country code (e.g., `FR`, `US`)                    |
| `email`                               | `string`                            | No           | Primary email address                              |
| `fax`                                 | `string`                            | No           | Fax number                                         |
| `firstname`                           | `string`                            | No           | First name                                         |
| `italianSDI`                          | `string`                            | No           | Italian SDI number                                 |
| `language`                            | `string`                            | No           | Preferred language                                 |
| `legalform`                           | `string`                            | No           | Legal form of the identifier                       |
| `name`                                | `string`                            | No           | Last name                                          |
| `nationalIdentificationNumber`        | `string`                            | No           | National identification number                     |
| `organisation`                        | `string`                            | No           | Organization name                                  |
| `ovhCompany`                          | `nichandle.OvhCompanyEnum`          | No           | OVH company (e.g., `ovh`, `kimsufi`, `soyoustart`) |
| `ovhSubsidiary`                       | `nichandle.OvhSubsidiaryEnum`       | No           | OVH subsidiary (e.g., `FR`, `GB`, `US`)            |
| `phone`                               | `string`                            | No           | Phone number                                       |
| `phoneCountry`                        | `string`                            | No           | Country of the phone number                        |
| `phoneType`                           | `string`                            | No           | Phone type (e.g., `mobile`, `landline`)            |
| `purposeOfPurchase`                   | `string`                            | No           | Purpose of the purchase                            |
| `sex`                                 | `string`                            | No           | Gender (e.g., `male`, `female`)                    |
| `spareEmail`                          | `string`                            | No           | Additional email address                           |
| `vat`                                 | `string`                            | No           | VAT number                                         |
| `zip`                                 | `string`                            | No           | ZIP/postal code                                    |

#### Response

Returns a `nichandle.CreationRules` object containing rules for each field in the identifier creation process.

---

## Enums

### `nichandle.CountryEnum`

All available country codes for an OVHcloud identifier:

```
AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, UNKNOWN, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW
```

---

### `nichandle.LanguageEnum`

All available language codes for an OVHcloud identifier:

```
cs_CZ, de_DE, en_AU, en_CA, en_GB, en_IE, en_US, es_ES, fi_FI, fr_CA, fr_FR, fr_MA, fr_SN, fr_TN, it_IT, lt_LT, nl_NL, pl_PL, pt_PT
```

---

### `nichandle.OvhCompanyEnum`

All available OVH companies:

```
kimsufi, ovh, soyoustart
```

---

### `nichandle.OvhSubsidiaryEnum`

All available OVH subsidiaries:

```
ASIA, AU, CA, CZ, DE, ES, EU, FI, FR, GB, IE, IN, IT, LT, MA, NL, PT, QC, SG, SN, TN, US, WE, WS
```

---

### `nichandle.GenderEnum`

All available genders:

```
female, male
```

---

### `nichandle.LegalFormEnum`

All available legal forms:

```
administration, association, corporation, individual, other, personalcorporation
```

---

### `nichandle.PhoneTypeEnum`

All available phone types:

```
landline, mobile
```

---

## Security Considerations

- **No authentication** is required for `/newAccount` operations.
- Ensure that sensitive data (e.g., `consumerKey`, `ovhIdentifier`) is handled securely in your n8n workflows.
- Validate all inputs to prevent malformed or incorrect data from being sent to the OVHcloud API.

---

## Error Handling

- Invalid parameters (e.g., unsupported country, legal form, or phone type) will result in an error response.
- Ensure that required fields are provided to avoid API errors.
- If a field fails validation, the API will return an error with details about the validation failure.

---

## Usage Examples

### Example 1: Create a new OVHcloud identifier

```json
{
    "country": "FR",
    "email": "user@example.com",
    "legalform": "individual",
    "firstname": "John",
    "name": "Doe",
    "ovhCompany": "ovh",
    "ovhSubsidiary": "FR"
}
```

### Example 2: Retrieve all available areas for France

```json
{
    "country": "FR"
}
```

### Example 3: Retrieve contracts for OVH FR

```json
{
    "company": "ovh",
    "subsidiary": "FR"
}
```

### Example 4: Retrieve creation rules for a given country and legal form

```json
{
    "country": "FR",
    "legalform": "individual"
}
```

---

## Notes

- All operations are **stable production versions** unless otherwise specified.
- Ensure that the `country`, `legalform`, and `ovhCompany`/`ovhSubsidiary` values are valid before making API calls.
- For more details, refer to the [OVHcloud API documentation](https://api.ovh.com/).

---

## See Also

- [OVHcloud n8n Node Overview](../README.md)
- [OVHcloud API Authentication Guide](https://docs.ovh.com/gb/en/api/general-authentication/)
- [n8n Documentation](https://docs.n8n.io/)
