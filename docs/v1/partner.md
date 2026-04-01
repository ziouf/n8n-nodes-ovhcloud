# Partner Registration API Documentation

**Version**: 1.0
**Base Path**: `https://eu.api.ovh.com/v1`
**Status**: Stable production version

---

## Overview

The Partner Registration API allows organizations to register as OVHcloud partners and manage their partnership status. This API is part of the OVHcloud Partner Program, designed for companies that want to collaborate with OVHcloud to grow their business through our platform.

---

## Authentication

This API requires authentication. The following credentials must be provided:

- **Application Key**: Required for API access
- **Application Secret**: Required for API access
- **Consumer Key**: Required for API access
- **Host**: OVHcloud API host endpoint

Authentication is handled via the `OvhCloudApi` credential type in n8n.

---

## Operations

### Get Partner Status

**HTTP Method**: GET

**Path**: `/partner`

**Description**: Retrieve the current status of a partner registration.

**Parameters**: None

**Response Type**: [Partner](#partner-entity)

**Authentication**: Required

**IAM Action**: `account:apiovh:partner/get`

**Errors**:

- `Server::NoContent::PartnerError`: No content returned for partner status
- `Client::NotFound::PartnerNotFound`: Partner not found
- `Server::InternalServerError::PartnerError`: Internal server error

---

### Register as a Partner

**HTTP Method**: POST

**Path**: `/partner`

**Description**: Register an organization as a partner in the OVHcloud Partner Program.

**Request Body**: [Partner](#partner-entity) (Required)

**Response Type**: void

**Authentication**: Required

**IAM Action**: `account:apiovh:partner/create` (Required)

**Errors**:

- `Server::NoContent::PartnerError`: No content returned for partner registration
- `Server::InternalServerError::PartnerError`: Internal server error during registration

---

## Partner Entity

The Partner entity represents an organization registered in the OVHcloud Partner Program. It contains the following properties:

### Required Properties

| Property  | Type                       | Description                         |
| --------- | -------------------------- | ----------------------------------- |
| `account` | [Account](#account-entity) | Account information for the partner |
| `contact` | [Contact](#contact-entity) | Primary contact for the partnership |

### Optional Properties

| Property           | Type                                          | Description                                      |
| ------------------ | --------------------------------------------- | ------------------------------------------------ |
| `acceptanceStatus` | [AcceptanceStatusEnum](#acceptancestatusenum) | Current acceptance status in the partner program |
| `areaOfExpertise`  | [AreaOfExpertiseEnum[]](#areaofexpertiseenum) | Areas of expertise (deprecated)                  |
| `partnership`      | [PartnerShip](#partner-ship-entity)           | Partnership growth details                       |

---

## Account Entity

The Account entity contains basic information about the partner organization.

### Required Properties

| Property | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| `name`   | string | Name of the partner organization |

### Optional Properties

| Property            | Type                                        | Description                                                    |
| ------------------- | ------------------------------------------- | -------------------------------------------------------------- |
| `city`              | string                                      | City where the partner organization is located                 |
| `companyTurnover`   | double                                      | Company turnover in euros                                      |
| `country`           | [CountryEnum](#countryenum)                 | Country where the partner organization is located (deprecated) |
| `numberOfEmployees` | [employeesNumberEnum](#employeesnumberenum) | Number of employees in the partner organization                |
| `partnerType`       | [partnerTypeEnum](#partnertypeenum)         | Type of partner organization                                   |
| `yearEstablished`   | date                                        | Year when the partner organization was established             |

---

## Contact Entity

The Contact entity represents the primary contact person for the partnership.

### Required Properties

| Property    | Type                          | Description                        |
| ----------- | ----------------------------- | ---------------------------------- |
| `email`     | string                        | Contact email address              |
| `firstName` | string                        | Contact first name                 |
| `lastName`  | string                        | Contact last name                  |
| `phone`     | string                        | Contact phone number               |
| `position`  | [PositionEnum](#positionenum) | Job position of the contact person |

### Optional Properties

| Property   | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| `jobTitle` | string | Job title of the contact person |

---

## Partner Ship Entity

The PartnerShip entity describes how the partnership will grow and evolve.

### Optional Properties

| Property                    | Type                                          | Description                                      |
| --------------------------- | --------------------------------------------- | ------------------------------------------------ |
| `areaOfExpertise`           | [AreaOfExpertiseEnum[]](#areaofexpertiseenum) | Areas of expertise for the partnership           |
| `emailCommunication`        | boolean                                       | Opt-in for email communication (GDPR compliance) |
| `partnersProgramReason`     | text                                          | Reason for joining the OVHcloud Partner Program  |
| `salesGrowthOpportunities`  | text                                          | Sales growth opportunities identified            |
| `salesProjection`           | double                                        | Sales projection in euros                        |
| `supportAgreementStatement` | boolean                                       | Support agreement statement                      |

---

## Enums

### AcceptanceStatusEnum

Acceptance status values:

```
Advanced
AdvancedHandOperated
AdvancedQualified
Open
Registered
RegisteredQualified
Rejected
```

### AreaOfExpertiseEnum

Areas of expertise (deprecated):

```
BigData
Connectivity
DC
DomainName
EmailMsSolution
HPC
Nutanix
Orchestration
PC
PCIDSS
SecurityCertif
VPS
VoIP
WH
```

### CountryEnum

Country codes:

```
AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ,
BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BW,
BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY,
CZ, DE, DG, DJ, DK, DM, DO, DZ, EA, EC, EE, EG, EH, ER, ES, ET,
FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS,
GT, GU, GW, GY, HK, HN, HR, HT, HU, IC, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT,
JE, JM, JE, JO, JP, KA, KG, KH, KI, KM, KN, KP, KR, KW, KZ,
LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY,
MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT,
MU, MV, MW, MX, MY, MZ,
NA, NC, NE, NF, NG, NI, NL, NO,
NP, NR, NU, NZ,
OM,
PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY,
QA,
RE, RO, RS, RU, RW,
SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ,
TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ,
UA, UG, UM, US, UY, UZ,
VA, VC, VE, VG, VI, VN, VU,
WF, WS,
XK,
YE, YT,
ZA, ZM, ZW
```

### PositionEnum

Job positions:

```
AF
BusinessOwner
HR
ITDevops
ITOther
ITSysAdmin
LC
Marketing
Other
PreSales
Production
Purchasing
RD
Sales
```

### employeesNumberEnum

Number of employees ranges:

```
1Or2
3To5
6To9
10To19
20To49
50To99
100To199
200To249
250To499
500to999
1000to1999
5000to9999
over10000
```

### partnerTypeEnum

Partner organization types:

```
consultingCompany
iaasProvider
managedServiceProvider
other
softwareEditor
strategicConsulting
systemsIntegrator
telecomOperators
trainingCompany
valueAddedReseller
webAgency
```

---

## Error Handling

The API uses standard OVHcloud error handling mechanisms. Errors are returned as JSON objects with the following structure:

```json
{
    "error": "ErrorType",
    "message": "Human-readable error message"
}
```

Common error types include:

- `PartnerError`: General partner-related errors
- `PartnerNotFound`: When attempting to retrieve a non-existent partner
- `InternalServerError`: Server-side errors during processing

---

## Security Considerations

- **IAM Actions**: All operations require specific IAM actions to be authorized
- **Authentication**: All requests must be authenticated using OVHcloud credentials
- **Data Handling**: Partner data is subject to OVHcloud's privacy and security policies
- **GDPR Compliance**: The `emailCommunication` property indicates GDPR-compliant email opt-in status

---

## Rate Limiting

This API follows OVHcloud's standard rate limiting policies. Partners should implement appropriate retry logic with exponential backoff when receiving rate limit responses.

---

## Webhooks

The OVHcloud Partner Program may send webhooks to registered partners for important events such as:

- Partnership status changes
- Sales opportunities
- Support ticket escalations

Partners should configure their webhook endpoints to receive these notifications securely.

---

## Support

For support issues related to partner registration, contact OVHcloud Partner Program support at:

- Email: partner-support@ovhcloud.com
- Phone: +33 9 74 74 74 74

---

## References

- [OVHcloud Partner Program Documentation](https://docs.ovh.com)
- [OVHcloud API Documentation](https://api.ovh.com)
- [IAM Documentation](https://iam.ovh.com)
