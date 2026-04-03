# Startup API Documentation

## Overview

The **Startup API** allows you to register startups and retrieve their status. It is part of the OVHcloud Public Cloud API and is located at:

```
https://eu.api.ovh.com/v1/startup/
```

This API is designed for startups to manage their registration and track their acceptance status in the OVHcloud ecosystem.

---

## API Status

All operations in this API are in the **PRODUCTION** status, indicating stable and fully supported versions.

---

## Operations

### 1. `GET /startup`

**Description**: Get startup status

**Authentication**: Required

**HTTP Method**: `GET`

**Parameters**: None

**Response Type**: `startup.startup`

**IAM Actions**:

```json
{
    "name": "account:apiovh:startup/get",
    "required": true
}
```

**Errors**:

- `Server::NoContent::StartupError`
- `Client::NotFound::StartupNotFound`

---

### 2. `POST /startup`

**Description**: Register a startup

**Authentication**: Required

**HTTP Method**: `POST`

**Request Body**: Required (`startup.startup`)

**Response Type**: `void` (no response body)

**IAM Actions**:

```json
{
    "name": "account:apiovh:startup/create",
    "required": true
}
```

**Errors**: None specified

---

## Models

### `startup.startup`

**Description**: Startup Entity

**Properties**:

| Property           | Type                           | Nullable | Read-only | Description                                          |
| ------------------ | ------------------------------ | -------- | --------- | ---------------------------------------------------- |
| `acceptanceStatus` | `startup.acceptanceStatusEnum` | `true`   | `true`    | Acceptance Status                                    |
| `awarness`         | `startup.awarnessEnum`         | `false`  | `false`   | Where did you hear about OVHcloud                    |
| `company`          | `startup.startup.company`      | `false`  | `false`   | Company information                                  |
| `eventCode`        | `string`                       | `true`   | `false`   | Code given to startups during events or partnerships |
| `fundRaising`      | `startup.startup.fundRaising`  | `false`  | `false`   | Fund raising info                                    |
| `project`          | `startup.startup.project`      | `false`  | `false`   | Project information                                  |

---

### `startup.startup.company`

**Description**: Company info

**Properties**:

| Property           | Type                                    | Nullable | Read-only | Description         |
| ------------------ | --------------------------------------- | -------- | --------- | ------------------- |
| `detail`           | `startup.startup.company.detail`        | `true`   | `false`   | Company detail      |
| `employeesNumber`` | `startup.employeesNumberEnum`           | `false`  | `false`   | Number of employees |
| `incubator`        | `startup.startup.company.incubator`     | `true`   | `false`   | Incubator           |
| `name`             | `string`                                | `false`  | `false`   | Company Name        |
| `relatedIndustry`  | `startup.relatedIndustryEnum`           | `false`  | `false`   | Society Industries  |
| `socialNetwork`    | `startup.startup.company.socialNetwork` | `true`   | `false`   | Social Network info |
| `societyWebsite`   | `string`                                | `false`  | `false`   | Company website     |

---

#### `startup.startup.company.detail`

**Description**: Details that relates to the company

**Properties**:

| Property           | Type     | Nullable | Read-only | Description                                                       |
| ------------------ | -------- | -------- | --------- | ----------------------------------------------------------------- |
| `creationdate`     | `date`   | `true`   | `false`   | Creation date of the company, mandatory if the company is created |
| `lastYearTurnover` | `double` | `true`   | `false`   | Last 12 months turnover, mandatory if the company is created      |
| `vatNumber`        | `string` | `true`   | `false`   | VAT number, mandatory if the company is created                   |

---

#### `startup.startup.company.incubator`

**Description**: Incubator infos

**Properties**:

| Property  | Type                    | Nullable | Read-only | Description                                             |
| --------- | ----------------------- | -------- | --------- | ------------------------------------------------------- |
| `city`    | `string`                | `true`   | `false`   | Ecosystem support city                                  |
| `country` | `nichandle.CountryEnum` | `true`   | `false`   | Ecosystem support country                               |
| `name`    | `string`                | `true`   | `false`   | Do you have startup ecosystem support from any of these |

---

#### `startup.startup.company.socialNetwork`

**Description**: Company social networks

**Properties**:

| Property   | Type     | Nullable | Read-only | Description   |
| ---------- | -------- | -------- | --------- | ------------- |
| `linkedin` | `string` | `true`   | `false`   | LinkedIn link |
| `twitter`  | `string` | `true`   | `false`   | Twitter link  |

---

### `startup.startup.fundRaising`

**Description**: Fundraising infos

**Properties**:

| Property             | Type                             | Nullable | Read-only | Description      |
| -------------------- | -------------------------------- | -------- | --------- | ---------------- |
| `lastFundraising`    | `startup.lastFundraisingEnum`    | `false`  | `false`   | Last fundraising |
| `plannedFundRaising` | `startup.plannedFundRaisingEnum` | `false`  | `false`   | Next fundraising |

---

### `startup.startup.project`

**Description**: Project info

**Properties**:

| Property            | Type                                    | Nullable | Read-only | Description                        |
| ------------------- | --------------------------------------- | -------- | --------- | ---------------------------------- |
| `businessModel`     | `text`                                  | `false`  | `false`   | Describe your business model       |
| `description`       | `text`                                  | `false`  | `false`   | What problem are you solving       |
| `developmentStage`  | `text`                                  | `false`  | `false`   | Stage of development description   |
| `productName`       | `string`                                | `false`  | `false`   | Product / Solution name            |
| `relatedTechnology` | `startup.relatedTechnologyEnum[]`       | `false`  | `false`   | Fund raising info                  |
| `requirements`      | `startup.startup.project.technicalNeed` | `false`  | `false`   | Technical requirements description |

---

#### `startup.startup.project.technicalNeed`

**Description**: Project technical need info

**Properties**:

| Property                 | Type                              | Nullable | Read-only | Description                                           |
| ------------------------ | --------------------------------- | -------- | --------- | ----------------------------------------------------- |
| `infrastructureUsing`    | `startup.infrastructureUsingEnum` | `false`  | `false`   | When do you plan to start using cloud infrastructure? |
| `otherCloudProvider`     | `boolean`                         | `true`   | `false`   | Are you currently using another cloud provider?       |
| `otherCloudProviderInfo` | `string`                          | `true`   | `false`   | Other cloud provider info                             |
| `technicalNeeds`         | `text`                            | `false`  | `false`   | Technical requirements description                    |

---

### Enums

#### `startup.acceptanceStatusEnum`

**Description**: Acceptance status

**Values**:

- `Advanced`
- `AdvancedHandOperated`
- `AdvancedQualified`
- `Banned`
- `Open`
- `Registered`
- `RegisteredQualified`
- `Rejected`

---

#### `startup.awarnessEnum`

**Description**: Where did you hear about OVHcloud?

**Values**:

- `Email`
- `EmpactVenture`
- `Event`
- `Facebook`
- `InternetSearch`
- `LinkedIn`
- `OnlineAdvert`
- `Partner`
- `Twitter`
- `Website`
- `WordOfMouth`

---

#### `startup.employeesNumberEnum`

**Description**: Number of employees

**Values**:

- `100To199`
- `10To19`
- `1Or2`
- `200To249`
- `20To49`
- `250To499`
- `3To5`
- `50To99`
- `6To9`

---

#### `startup.lastFundraisingEnum`

**Description**: Last fundraising

**Values**:

- `Crowdfunding`
- `DontShare`
- `More`
- `No`
- `PreSeed`
- `Seed`
- `Series_A`
- `Series_B`
- `Series_C`

---

#### `startup.plannedFundRaisingEnum`

**Description**: Next fundraising

**Values**:

- `DontShare`
- `No`
- `Yes`

---

#### `startup.relatedIndustryEnum`

**Description**: Society Industries

**Values**:

- `AI_Wholesale`
- `ARTISANAT`
- `ASP_SI_ITServices`
- `Accommodation_and_FoodServices`
- `Agriculture`
- `Agro_industry`
- `Art_Sport_Entertainment`
- `Automotive`
- `Banking`
- `Construction_and_Architecture`
- `Databases_Wholesale`
- `DigitalServices`
- `E_Retail`
- `EducationalServices`
- `Energy_and_Water`
- `Game_Wholesale`
- `HeadOffice`
- `Healthcare`
- `Host_the_Hoster_Wholesale`
- `Human_Resources`
- `IAASproviders_WebHosters_Data`
- `Life_Sciences`
- `Manufacturing_Industry`
- `Mining_Industry`
- `NonProfit`
- `Other_Services_Business`
- `Other_Services_Personal`
- `Others`
- `PublicSector`
- `Real_Estate`
- `Retail_and_Trade`
- `ScienceR&D`
- `Software Editors`
- `Storage_Wholesale`
- `TV_Media`
- `Telecommunication_Internet`
- `Telecommunication_Internet`
- `Transportation_Logistics`
- `Ventures_for_Good`
- `Virtualization_Wholesale`
- `WebAgencies`

---

#### `startup.relatedTechnologyEnum`

**Description**: Related Technologies

**Values**:

- `3dPrinting`
- `API`
- `ArtificialIntelligence`
- `AugmentedReality`
- `BankingDataInfrastructure`
- `Big_Data`
- `Blockchain`
- `CRM_ERP`
- `Chatbot`
- `CloudGaming`
- `ContainersDockers`
- `CyberSecurity`
- `Drones`
- `ElearningPlatform`
- `GeoLocalization`
- `Healthcareinfrastructure`
- `IoT`
- `MachineLearningDeepLearning`
- `Marketplace`
- `MobileApplications`
- `Orchestration`
- `Other`
- `PredictiveAnalyticAlgorithms`
- `Robotics`
- `ScientificComputation`
- `Storage`
- `Streaming`
- `VirtualDesktop`
- `VirtualMachines`
- `VoIP`

---

#### `nichandle.CountryEnum`

**Description**: Countries a nichandle can choose

**Values**:

- `AC` (Ascension Island)
- `AD` (Andorra)
- `AE` (United Arab Emirates)
- `AF` (Afghanistan)
- `AG` (Antigua and Barbuda)
- `AI` (Anguilla)
- `AL` (Albania)
- `AM` (Armenia)
- `AO` (Angola)
- `AQ` (Antarctica)
- `AR` (Argentina)
- `AS` (American Samoa)
- `AT` (Austria)
- `AU` (Australia)
- `AW` (Aruba)
- `AX` (Åland Islands)
- `AZ` (Azerbaijan)
- `BA` (Bosnia and Herzegovina)
- `BB` (Barbados)
- `BD` (Bangladesh)
- `BE` (Belgium)
- `BF` (Burkina Faso)
- `BG` (Bulgaria)
- `BH` (Bahrain)
- `BI` (Burundi)
- `BJ` (Benin)
- `BL` (Saint Barthélemy)
- `BM` (Bermuda)
- `BN` (Brunei)
- `BO` (Bolivia)
- `BQ` (Bonaire, Sint Eustatius and Saba)
- `BR` (Brazil)
- `BS` (Bahamas)
- `BT` (Bhutan)
- `BW` (Botswana)
- `BY` (Belarus)
- `BZ` (Belize)
- `CA` (Canada)
- `CC` (Cocos (Keeling) Islands)
- `CD` (Democratic Republic of the Congo)
- `CF` (Central African Republic)
- `CG` (Republic of the Congo)
- `CH` (Switzerland)
- `CI` (Côte d'Ivoire)
- `CK` (Cook Islands)
- `CL` (Chile)
- `CM` (Cameroon)
- `CN` (China)
- `CO` (Colombia)
- `CR` (Costa Rica)
- `CU` (Cuba)
- `CV` (Cape Verde)
- `CW` (Curaçao)
- `CX` (Christmas Island)
- `CY` (Cyprus)
- `CZ` (Czech Republic)
- `DE` (Germany)
- `DG` (Diego Garcia)
- `DJ` (Djibouti)
- `DK` (Denmark)
- `DM` (Dominica)
- `DO` (Dominican Republic)
- `DZ` (Algeria)
- `EA` (Ceuta, Melilla)
- `EC` (Ecuador)
- `EE` (Estonia)
- `EG` (Egypt)
- `EH` (Western Sahara)
- `ER` (Eritrea)
- `ES` (Spain)
- `ET` (Ethiopia)
- `FI` (Finland)
- `FJ` (Fiji)
- `FK` (Falkland Islands)
- `FM` (Micronesia)
- `FO` (Faroe Islands)
- `FR` (France)
- `GA` (Gabon)
- `GB` (United Kingdom)
- `GD` (Grenada)
- `GE` (Georgia)
- `GF` (French Guiana)
- `GG` (Guernsey)
- `GH` (Ghana)
- `GI` (Gibraltar)
- `GL` (Greenland)
- `GM` (Gambia)
- `GN` (Guinea)
- `GP` (Guadeloupe)
- `GQ` (Equatorial Guinea)
- `GR` (Greece)
- `GS` (South Georgia and the South Sandwich Islands)
- `GT` (Guatemala)
- `GU` (Guam)
- `GW` (Guinea-Bissau)
- `GY` (Guyana)
- `HK` (Hong Kong)
- `HN` (Honduras)
- `HR` (Croatia)
- `HT` (Haiti)
- `HU` (Hungary)
- `IC` (Canary Islands)
- `ID` (Indonesia)
- `IE` (Ireland)
- `IL` (Israel)
- `IM` (Isle of Man)
- `IN` (India)
- `IO` (British Indian Ocean Territory)
- `IQ` (Iraq)
- `IR` (Iran)
- `IS` (Iceland)
- `IT` (Italy)
- `JE` (Jersey)
- `JM` (Jamaica)
- `JO` (Jordan)
- `JP` (Japan)
- `KE` (Kenya)
- `KG` (Kyrgyzstan)
- `KH` (Cambodia)
- `KI` (Kiribati)
- `KM` (Comoros)
- `KN` (Saint Kitts and Nevis)
- `KP` (North Korea)
- `KR` (South Korea)
- `KW` (Kuwait)
- `KY` (Cayman Islands)
- `KZ` (Kazakhstan)
- `LA` (Laos)
- `LB` (Lebanon)
- `LC` (Saint Lucia)
- `LI` (Liechtenstein)
- `LK` (Sri Lanka)
- `LR` (Liberia)
- `LS` (Lesotho)
- `LT` (Lithuania)
- `LU` (Luxembourg)
- `LV` (Latvia)
- `LY` (Libya)
- `MA` (Morocco)
- `MC` (Monaco)
- `MD` (Moldova)
- `ME` (Montenegro)
- `MF` (Saint Martin)
- `MG` (Madagascar)
- `MH` (Marshall Islands)
- `MK` (North Macedonia)
- `ML` (Mali)
- `MM` (Myanmar)
- `MN` (Mongolia)
- `MO` (Macau)
- `MP` (Northern Mariana Islands)
- `MQ` (Martinique)
- `MR` (Mauritania)
- `MS` (Montserrat)
- `MT` (Malta)
- `MU` (Mauritius)
- `MV` (Maldives)
- `MW` (Malawi)
- `MX` (Mexico)
- `MY` (Malaysia)
- `MZ` (Mozambique)
- `NA` (Namibia)
- `NC` (New Caledonia)
- `NE` (Niger)
- `NF` (Norfolk Island)
- `NG` (Nigeria)
- `NI` (Nicaragua)
- `NL` (Netherlands)
- `NO` (Norway)
- `NP` (Nepal)
- `NR` (Nauru)
- `NU` (Niue)
- `NZ` (New Zealand)
- `OM` (Oman)
- `PA` (Panama)
- `PE` (Peru)
- `PF` (French Polynesia)
- `PG` (Papua New Guinea)
- `PH` (Philippines)
- `PK` (Pakistan)
- `PL` (Poland)
- `PM` (Saint Pierre and Miquelon)
- `PN` (Pitcairn Islands)
- `PR` (Puerto Rico)
- `PS` (Palestine)
- `PT` (Portugal)
- `PW` (Palau)
- `PY` (Paraguay)
- `QA` (Qatar)
- `RE` (Réunion)
- `RO` (Romania)
- `RS` (Serbia)
- `RU` (Russia)
- `RW` (Rwanda)
- `SA` (Saudi Arabia)
- `SB` (Solomon Islands)
- `SC` (Seychelles)
- `SD` (Sudan)
- `SE` (Sweden)
- `SG` (Singapore)
- `SH` (Saint Helena)
- `SI` (Slovenia)
- `SJ` (Svalbard and Jan Mayen Islands)
- `SK` (Slovakia)
- `SL` (Sierra Leone)
- `SM` (San Marino)
- `SN` (Senegal)
- `SO` (Somalia)
- `SR` (Suriname)
- `SS` (South Sudan)
- `ST` (São Tomé and Príncipe)
- `SV` (El Salvador)
- `SX` (Sint Maarten)
- `SY` (Syria)
- `SZ` (Eswatini)
- `TA` (Tristan da Cunha)
- `TC` (Turks and Caicos Islands)
- `TD` (Chad)
- `TF` (French Southern Territories)
- `TG` (Togo)
- `TH` (Thailand)
- `TJ` (Tajikistan)
- `TK` (Tokelau)
- `TL` (Timor-Leste)
- `TM` (Turkmenistan)
- `TN` (Tunisia)
- `TO` (Tonga)
- `TR` (Turkey)
- `TT` (Trinidad and Tobago)
- `TV` (Tuvalu)
- `TW` (Taiwan)
- `TZ` (Tanzania)
- `UA` (Ukraine)
- `UG` (Uganda)
- `UM` (United States Minor Outlying Islands)
- `US` (United States)
- `UY` (Uruguay)
- `UZ` (Uzbekistan)
- `VA` (Vatican)
- `VC` (Saint Vincent and the Grenadines)
- `VE` (Venezuela)
- `VG` (British Virgin Islands)
- `VI` (U.S. Virgin Islands)
- `VN` (Vietnam)
- `VU` (Vanuatu)
- `WF` (Wallis and Futuna Islands)
- `WS` (Samoa)
- `XK` (Kosovo)
- `YE` (Yemen)
- `YT` (Mayotte)
- `ZA` (South Africa)
- `ZM` (Zambia)
- `ZW` (Zimbabwe)

---

## Usage Examples

### Register a Startup

To register a startup, you need to provide the following information in the request body:

```json
{
    "acceptanceStatus": "Registered",
    "awarness": "InternetSearch",
    "company": {
        "name": "MyStartup",
        "societyWebsite": "https://my-startup.com",
        "employeesNumber": "10To19",
        "relatedIndustry": "AI_Wholesale",
        "detail": {
            "vatNumber": "FR123456789",
            "creationdate": "2020-01-01",
            "lastYearTurnover": 1500000.0
        },
        "socialNetwork": {
            "linkedin": "https://linkedin.com/company/my-startup",
            "twitter": "https://twitter.com/my_startup"
        },
        "incubator": {
            "name": "Techstars",
            "city": "Paris",
            "country": "FR"
        }
    },
    "fundRaising": {
        "lastFundraising": "Seed",
        "plannedFundRaising": "Series_A"
    },
    "project": {
        "productName": "MyProduct",
        "description": "Solving a critical problem in the AI industry",
        "businessModel": "B2B SaaS",
        "developmentStage": "Beta",
        "relatedTechnology": ["ArtificialIntelligence", "MachineLearningDeepLearning"],
        "requirements": {
            "infrastructureUsing": "1To6",
            "technicalNeeds": "Need scalable cloud infrastructure for AI model training",
            "otherCloudProvider": false
        }
    }
}
```

---

### Get Startup Status

To retrieve the status of a registered startup, make a GET request to:

```
https://eu.api.ovh.com/v1/startup
```

The response will include the `acceptanceStatus` field, which indicates the current status of the startup.

```json
{
    "acceptanceStatus": "Registered",
    "company": {
        "name": "MyStartup",
        "societyWebsite": "https://my-startup.com",
        "employeesNumber": "10To19",
        "relatedIndustry": "AI_Wholesale",
        "detail": {
            "vatNumber": "FR123456789",
            "creationdate": "2020-01-01",
            "lastYearTurnover": 1500000.0
        },
        "socialNetwork": {
            "linkedin": "https://linkedin.com/company/my-startup",
            "twitter": "https://twitter.com/my_startup"
        },
        "incubator": {
            "name": "Techstars",
            "city": "Paris",
            "country": "FR"
        }
    },
    "fundRaising": {
        "lastFundraising": "Seed",
        "plannedFundRaising": "Series_A"
    },
    "project": {
        "productName": "MyProduct",
        "description": "Solving a critical problem in the AI industry",
        "businessModel": "B2B SaaS",
        "developmentStage": "Beta",
        "relatedTechnology": ["ArtificialIntelligence", "MachineLearningDeepLearning"],
        "requirements": {
            "infrastructureUsing": "1To6",
            "technicalNeeds": "Need scalable cloud infrastructure for AI model training",
            "otherCloudProvider": false
        }
    }
}
```

---

## Error Handling

The API defines the following errors:

### `Server::NoContent::StartupError`

- **Description**: This error occurs when the server cannot process the request due to missing or invalid data.
- **HTTP Status Code**: Typically `400 Bad Request` or `404 Not Found`
- **Resolution**: Ensure all required fields are provided and valid. Check the request body for correctness.

### `Client::NotFound::StartupNotFound`

- **Description**: This error occurs when the requested startup is not found.
- **HTTP Status Code**: `404 Not Found`
- **Resolution**: Verify the startup ID or ensure the startup exists in the system.

---

## IAM Actions

The API requires specific IAM actions for each operation:

| Operation       | IAM Action                      | Required |
| --------------- | ------------------------------- | -------- |
| `GET /startup`  | `account:apiovh:startup/get`    | `true`   |
| `POST /startup` | `account:apiovh:startup/create` | `true`   |

---

## Notes

- The `acceptanceStatus` field is read-only and indicates the current status of the startup.
- The `employeesNumber` field is required and must be one of the predefined enum values.
- The `vatNumber` and `creationdate` fields are required if the company is created.
- The `eventCode` field is optional and can be used for startups registered during events or partnerships.
- The `otherCloudProvider` field in `requirements` is optional but must be provided if the startup is using another cloud provider.
- The `otherCloudProviderInfo` field is required if `otherCloudProvider` is set to `true`.
