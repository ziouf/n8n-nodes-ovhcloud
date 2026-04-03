# OVHcloud Location API v2 Documentation

## Overview

The OVHcloud Location API v2 provides endpoints to retrieve information about OVHcloud regions and their availability zones. This API is part of the OVHcloud public API suite and is designed to help users locate and understand the geographical distribution of OVHcloud services.

---

## API Endpoints

### List Available Regions

**Endpoint:** `GET /location`

**Status:** Stable production version (`PRODUCTION`)

**Description:** List available regions and their availability zones.

**Authentication:** Required

---

#### Request Parameters

| Parameter             | Data Type                   | Type   | Required | Description                                                                  |
| --------------------- | --------------------------- | ------ | -------- | ---------------------------------------------------------------------------- |
| `X-Pagination-Cursor` | string                      | header | false    | Pagination cursor                                                            |
| `X-Pagination-Size`   | long                        | header | false    | Pagination size                                                              |
| `availabilityZone`    | string                      | query  | false    | Filter by availability zone. Returns locations having this availability zone |
| `cityCode`            | string                      | query  | false    | Filter by city ISO code                                                      |
| `cityName`            | string                      | query  | false    | Filter by city name                                                          |
| `code`                | string                      | query  | false    | Filter by region code                                                        |
| `countryCode`         | string                      | query  | false    | Filter by country ISO code                                                   |
| `countryName`         | string                      | query  | false    | Filter by country name                                                       |
| `geographyCode`       | string                      | query  | false    | Filter by geography code                                                     |
| `geographyName`       | string                      | query  | false    | Filter by geography name                                                     |
| `ids`                 | long[]                      | query  | false    | Filter by region IDs                                                         |
| `location`            | string                      | query  | false    | Filter by region location                                                    |
| `name`                | string                      | query  | false    | Filter by region name                                                        |
| `specificType`        | `location.SpecificTypeEnum` | query  | false    | Filter by specific region type                                               |
| `type`                | `location.TypeEnum`         | query  | false    | Filter by general region type                                                |

- - **Response Type:** `location.Location[]`

- - **Example Response:**

```json
[
    {
        "name": "gra1",
        "type": "REGION-3-AZ",
        "specificType": "STANDARD",
        "location": "Gravelines",
        "geographyName": "France",
        "countryCode": "FR",
        "countryName": "France",
        "cityCode": "GRA",
        "cityName": "Gravelines",
        "cityLatitude": 50.992,
        "cityLongitude": 2.126,
        "code": "GRA1",
        "cardinalPoint": "CENTRAL",
        "availabilityZones": ["gra-a", "gra-b", "gra-c"],
        "openingYear": 2019
    }
]
```

---

### Get Specific Region

**Endpoint:** `GET /location/{name}`

**Status:** Stable production version (`PRODUCTION`)

**Description:** Get a specific region and its availability zones.

**Authentication:** Required

---

#### Request Parameters

| Parameter | Data Type | Type | Required | Description                       |
| --------- | --------- | ---- | -------- | --------------------------------- |
| `name`    | string    | path | true     | Name of the region (e.g., `gra1`) |

- - **Response Type:** `location.Location`

- - **Example Response:**

```json
{
    "name": "gra1",
    "type": "REGION-3-AZ",
    "specificType": "STANDARD",
    "location": "Gravelines",
    "geographyName": "France",
    "countryCode": "FR",
    "countryName": "France",
    "cityCode": "GRA",
    "cityName": "Gravelines",
    "cityLatitude": 50.992,
    "cityLongitude": 2.126,
    "code": "GRA1",
    "cardinalPoint": "CENTRAL",
    "availabilityZones": ["gra-a", "gra-b", "gra-c"],
    "openingYear": 2019
}
```

---

## Filtering

### Filter by General Region Type (`TypeEnum`)

The `TypeEnum` defines the general typology of a region. Possible values include:

- `LOCAL-ZONE`
- `REGION-1-AZ`
- `REGION-3-AZ`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?type=REGION-3-AZ"
```

- - **Description:** Filter regions by their general type (e.g., `REGION-3-AZ` for regions with 3 availability zones).

- -

### Filter by Specific Region Type (`SpecificTypeEnum`)

The `SpecificTypeEnum` defines the specific typology of a region. Possible values include:

- `BACKUP`
- `LZ` (Local Zone)
- `SNC` (Standard National Cloud)
- `STANDARD`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?specificType=STANDARD"
```

- - **Description:** Filter regions by their specific type (e.g., `STANDARD` for standard regions).

- -

### Filter by Region Properties

You can filter regions by various properties such as:

- **Availability Zone:** `X-Pagination-Cursor`
- **City Code:** `cityCode`
- **City Name:** `cityName`
- **Region Code:** `code`
- **Country Code:** `countryCode`
- **Country Name:** `countryName`
- **Geography Code:** `geographyCode`
- **Geography Name:** `geographyName`
- **Region IDs:** `ids`
- **Region Location:** `location`
- **Region Name:** `name`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?countryCode=FR&type=REGION-3-AZ"
```

- - **Description:** Filter regions in France with 3 availability zones.

- -

## Response Properties

The response for both endpoints includes the following properties for each region:

| Property            | Data Type                    | Description                                    |
| ------------------- | ---------------------------- | ---------------------------------------------- |
| `availabilityZones` | string[]                     | List of availability zones for the region      |
| `cardinalPoint`     | `location.CardinalPointEnum` | Cardinal direction where the region is located |
| `cityCode`          | string                       | ISO code of the city                           |
| `cityLatitude`      | double                       | Geographical latitude of the city              |
| `cityLongitude`     | double                       | Geographical longitude of the city             |
| `cityName`          | string                       | Full name of the city                          |
| `code`              | string                       | Region's short code                            |
| `countryCode`       | string                       | ISO code of the country                        |
| `countryName`       | string                       | Full name of the country                       |
| `geographyCode`     | string                       | Short code representing the geographical area  |
| `geographyName`     | string                       | Name of the geographical area                  |
| `location`          | string                       | Location of the region                         |
| `name`              | string                       | Name of the region                             |
| `openingYear`       | long                         | Year the region was opened                     |
| `specificType`      | `location.SpecificTypeEnum`  | Specific typology of the region                |
| `type`              | `location.TypeEnum`          | General typology of the region                 |

- - **Example Response:**

```json
{
    "name": "bhs1",
    "type": "REGION-3-AZ",
    "specificType": "STANDARD",
    "location": "Beauharnois",
    "geographyName": "Canada",
    "countryCode": "CA",
    "countryName": "Canada",
    "cityCode": "BHS",
    "cityName": "Beauharnois",
    "cityLatitude": 45.333,
    "cityLongitude": -73.833,
    "code": "BHS1",
    "cardinalPoint": "NORTH",
    "availabilityZones": ["bhs-a", "bhs-b", "bhs-c"],
    "openingYear": 2018
}
```

- -

## CardinalPointEnum

The `CardinalPointEnum` defines the cardinal direction of a region. Possible values include:

- `CENTRAL`
- `EAST`
- `NORTH`
- `NORTHEAST`
- `NORTHWEST`
- `SOUTH`
- `SOUTHEAST`
- `SOUTHWEST`
- `WEST`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?cardinalPoint=NORTH"
```

- - **Description:** Filter regions located in the northern cardinal direction.

- -

## SpecificTypeEnum

The `SpecificTypeEnum` defines the specific typology of a region. Possible values include:

- `BACKUP`
- `LZ` (Local Zone)
- `SNC` (Standard National Cloud)
- `STANDARD`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?specificType=LZ"
```

- - **Description:** Filter regions by their specific typology (e.g., `LZ` for local zones).

- -

## TypeEnum

The `TypeEnum` defines the general typology of a region. Possible values include:

- `LOCAL-ZONE`
- `REGION-1-AZ`
- `REGION-3-AZ`

- - **Example:**

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?type=LOCAL-ZONE"
```

- - **Description:** Filter regions by their general typology (e.g., `LOCAL-ZONE` for local zones).

- -

## Pagination

### Pagination Headers

| Header                | Data Type | Description                  |
| --------------------- | --------- | ---------------------------- |
| `X-Pagination-Cursor` | string    | Pagination cursor (optional) |
| `X-Pagination-Size`   | long      | Pagination size (optional)   |

- - **Example Request with Pagination:**

```bash
curl -X GET -H "X-Pagination-Cursor: abc123" -H "X-Pagination-Size: 50" "https://eu.api.ovh.com/v2/location"
```

- - **Description:** Use pagination headers to control the number of results returned and navigate through large datasets.

- -

## Error Handling

- **Authentication Errors:** Ensure valid credentials are provided.
- **Invalid Parameters:** Check parameter names and types.
- **Rate Limiting:** Monitor API usage to avoid exceeding rate limits.

- - **Example Error Response:**

```json
{
    "error": "InvalidRegionType",
    "message": "The specified region type is not valid.",
    "path": "/location"
}
```

- -

## API Base Path

```
https://eu.api.ovh.com/v2/location
```

- - **Description:** The base path for all OVHcloud Location API v2 endpoints is `https://eu.api.ovh.com/v2/location`.

- -

## Usage Examples

### List All Regions

```bash
curl -X GET "https://eu.api.ovh.com/v2/location"
```

- - **Description:** Retrieve a list of all available regions and their availability zones.

- -

### Filter by Country and Type

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?countryCode=FR&type=REGION-3-AZ"
```

- - **Description:** Retrieve regions in France that have 3 availability zones.

- -

### Get Specific Region

```bash
curl -X GET "https://eu.api.ovh.com/v2/location/gra1"
```

- - **Description:** Retrieve detailed information about the `gra1` region, including its availability zones.

- -

### Filter by Availability Zone

```bash
curl -X GET "https://eu.api.ovh.com/v2/location?availabilityZone=gra-a"
```

- - **Description:** Retrieve all regions that include the `gra-a` availability zone.

- -

## Notes

- The API is versioned and follows OVHcloud conventions.
- All responses are in JSON format.
- Authentication is required for all endpoints.
- Use filtering to narrow down results based on specific criteria.

---

## References

- [OVHcloud Public API Documentation](https://api.ovh.com)
- [OVHcloud Location API v2](https://api.ovh.com/v2/location)
