# Network Defense API v2

> **Note**: This is a stable production version of the OVHcloud Network Defense API.

The Network Defense API provides access to DDoS mitigation events and traffic statistics for your OVHcloud services. This API is part of the OVHcloud Public Cloud suite and allows you to monitor and analyze DDoS protection events affecting your subnets.

## Overview

The Network Defense API v2 provides operations to:

- **Retrieve Network Defense events**: List all DDoS mitigation events affecting your subnets
- **Query traffic statistics**: Get detailed traffic statistics including dropped and passed volumes

### Base URL

```
https://eu.api.ovh.com/v2/networkDefense
```

## Authentication

This API requires authentication using OVHcloud API credentials. You must provide your `applicationKey`, `applicationSecret`, and `consumerKey` in the request headers.

## Models

### RegionEnum

Representation of a Region where DDoS mitigation events can occur.

**Values**:

- `CA`: Canada
- `EU`: Europe
- `US`: United States

### VectorsEnum

Network Defense DDoS attack vectors that can be detected by the system.

**Values**:

- `CHARGEN`: Character Generator attack
- `DNS`: DNS amplification attack
- `DNS_TO_OVH`: DNS to OVH attack
- `FRAGMENT`: Fragmentation attack
- `ICMP`: ICMP attack
- `IP_NULL`: IP null attack
- `NTP`: NTP amplification attack
- `OTHER`: Other unspecified attack
- `TCP_ACK`: TCP ACK attack
- `TCP_FIN`: TCP FIN attack
- `TCP_NULL`: TCP null attack
- `TCP_PSH`: TCP PSH attack
- `TCP_RST`: TCP RST attack
- `TCP_SYN`: TCP SYN attack
- `UDP`: UDP amplification attack
- `VECTOR_TYPE_UNSPECIFIED`: Unspecified attack type

## API Operations

### Events Operations

#### Get all Network Defense events

```
GET /networkDefense/vac/event
```

Retrieve all DDoS mitigation events affecting your subnets.

**Parameters**:

| Parameter           | Type                                     | Required | Description                                                                                |
| ------------------- | ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| X-Pagination-Cursor | string                                   | No       | Pagination cursor                                                                          |
| X-Pagination-Size   | long                                     | No       | Pagination size                                                                            |
| after               | datetime                                 | No       | Query events which started after the given date                                            |
| before              | datetime                                 | No       | Query events which ended before the given date                                             |
| ongoingOnly         | boolean                                  | No       | Query for ongoing events only. If this is set, 'after' and 'before' parameters are ignored |
| region              | [networkDefense.RegionEnum](#regionenum) | No       | Query events for the given region                                                          |
| subnets             | ipBlock[]                                | No       | Query events for the given subnets                                                         |

**IAM Actions**:

```
ip:apiovh:networkDefense/vac/event/get
```

**Response Type**: [networkDefense.Vac.EventsResponse](#eventsresponse)

**Example Request**:

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-Pagination-Cursor: cursor_value" \
  -H "X-Pagination-Size: 50" \
  -H "Content-Type: application/json" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key"
```

### Traffic Statistics Operations

#### Get Network Defense traffic statistics

```
GET /networkDefense/vac/traffic
```

Retrieve traffic statistics for DDoS mitigation events affecting your subnets.

**Parameters**:

| Parameter           | Type     | Required | Description                                                                              |
| ------------------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| X-Pagination-Cursor | string   | No       | Pagination cursor                                                                        |
| X-Pagination-Size   | long     | No       | Pagination size                                                                          |
| after               | datetime | Yes      | Query statistics after the given date                                                    |
| before              | datetime | No       | Query statistics before the given date                                                   |
| subnet              | ipBlock  | Yes      | Query statistics for the given subnet (currently, only IPv4/32 or IPv6/64 are supported) |

**IAM Actions**:

```
ip:apiovh:networkDefense/vac/traffic/get
```

**Response Type**: [networkDefense.Vac.TrafficResponse](#trafficresponse)

**Example Request**:

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/traffic" \
  -H "X-Pagination-Cursor: cursor_value" \
  -H "X-Pagination-Size: 50" \
  -H "Content-Type: application/json" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "after: 2024-01-01T00:00:00Z" \
  -H "subnet: 192.0.2.128/25"
```

## Response Types

### EventsResponse

List of DDoS mitigation events.

**Properties**:

| Property | Type                                 | Description    |
| -------- | ------------------------------------ | -------------- |
| events   | [networkDefense.Vac.Event](#event)[] | List of events |

### Event

DDoS mitigation event. It typically starts when the DDoS detection system sends an alert, and the traffic of the subnet is routed through the mitigation system (VAC).

**Properties**:

| Property  | Type                                         | Description                                                    |
| --------- | -------------------------------------------- | -------------------------------------------------------------- |
| endedAt   | datetime                                     | End date of the event. It can be null if the event is ongoing. |
| startedAt | datetime                                     | Start date of the event                                        |
| subnet    | ipBlock                                      | IP subnet affected by the event                                |
| vectors   | [networkDefense.VectorsEnum](#vectorsenum)[] | Attack vector                                                  |

### TrafficResponse

DDoS mitigation traffic statistics.

**Properties**:

| Property   | Type                                                           | Description                         |
| ---------- | -------------------------------------------------------------- | ----------------------------------- |
| bps        | [networkDefense.Vac.TrafficResponseData](#trafficresponsedata) | Bits per seconds statistics         |
| pps        | [networkDefense.Vac.TrafficResponseData](#trafficresponsedata) | Packets per seconds statistics      |
| timestamps | datetime[]                                                     | Timestamps of the statistics points |

### TrafficResponseData

DDoS mitigation traffic statistics data.

**Properties**:

| Property | Type     | Description                                                          |
| -------- | -------- | -------------------------------------------------------------------- |
| dropped  | string[] | Volume of traffic dropped by the VAC (DDoS protection)               |
| passed   | string[] | Volume of traffic which was not dropped by the VAC (DDoS protection) |

## Usage Examples

### Example 1: List all Network Defense Events

```bash
# Request
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key"

# Response structure
{
  "events": [
    {
      "startedAt": "2024-01-15T14:30:45Z",
      "endedAt": "2024-01-15T18:15:23Z",
      "subnet": "192.0.2.128/25",
      "vectors": ["TCP_SYN", "UDP"]
    },
    {
      "startedAt": "2024-02-20T09:15:30Z",
      "endedAt": null,
      "subnet": "2001:db8::/32",
      "vectors": ["DNS"]
    }
  ]
}
```

### Example 2: Query Ongoing Events Only

```bash
# Request
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "ongoingOnly: true"

# Response structure
{
  "events": [
    {
      "startedAt": "2024-03-10T11:20:00Z",
      "endedAt": null,
      "subnet": "198.51.100.0/32",
      "vectors": ["NTP", "CHARGEN"]
    }
  ]
}
```

### Example 3: Get Traffic Statistics for a Specific Subnet

```bash
# Request
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/traffic" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "after: 2024-01-01T00:00:00Z" \
  -H "subnet: 192.0.2.128/25"

# Response structure
{
  "timestamps": [
    "2024-01-01T00:00:00Z",
    "2024-01-01T01:00:00Z",
    "2024-01-01T02:00:00Z"
  ],
  "bps": {
    "dropped": ["1000000", "950000", "800000"],
    "passed": ["10000", "12000", "15000"]
  },
  "pps": {
    "dropped": ["5000", "4800", "4500"],
    "passed": ["100", "120", "150"]
  }
}
```

### Example 4: Filter Events by Region

```bash
# Request
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "region: EU"

# Response structure
{
  "events": [
    {
      "startedAt": "2024-01-15T14:30:45Z",
      "endedAt": "2024-01-15T18:15:23Z",
      "subnet": "192.0.2.128/25",
      "vectors": ["TCP_SYN", "UDP"]
    }
  ]
}
```

### Example 5: Filter Events by Date Range

```bash
# Request
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "after: 2024-02-01T00:00:00Z" \
  -H "before: 2024-02-28T23:59:59Z"

# Response structure
{
  "events": [
    {
      "startedAt": "2024-02-10T14:30:45Z",
      "endedAt": "2024-02-10T18:15:23Z",
      "subnet": "198.51.100.0/32",
      "vectors": ["DNS"]
    }
  ]
}
```

### Example 6: Pagination for Large Event Lists

```bash
# Request with pagination
curl -X GET \
  "https://eu.api.ovh.com/v2/networkDefense/vac/event" \
  -H "X-OVH-APP-MANAGER-KEY: your_application_key" \
  -H "X-OVH-APP-MANAGER-SECRET: your_application_secret" \
  -H "X-OVH-APP-MANAGER-CONSUMER-KEY: your_consumer_key" \
  -H "X-Pagination-Cursor: abc123" \
  -H "X-Pagination-Size: 100"

# Response structure
{
  "events": [
    /* up to 100 events */
    ...
  ],
  "nextCursor": "def456"
}
```

## Error Handling

The API may return various error responses. Common error cases include:

- **Authentication errors**: Invalid or missing API credentials
- **Invalid parameters**: Malformed IP blocks, invalid date formats
- **Authorization errors**: Missing required IAM permissions
- **Rate limiting**: Too many requests in a short period
- **Resource not found**: No events or traffic data available for the requested subnet/region

## Rate Limits

This API is subject to rate limiting. You should implement appropriate delays between requests if querying large datasets.

## Webhooks

The Network Defense API does not currently support webhooks for real-time event notifications.

## Related Resources

- [OVHcloud Public Cloud Documentation](https://docs.ovh.com)
- [OVHcloud API Status Documentation](https://api.ovh.com)

## Support

For support and feedback regarding the Network Defense API:

- [OVHcloud Community Discord](https://discord.gg/ovhcloud)
- [OVHcloud Support Center](https://support.ovhcloud.com)
- [OVHcloud Status Page](https://status.ovhcloud.com)

## Changelog

- **1.0**: Initial stable production release

---

*Last updated: April 2026*

> **Note**: This documentation is generated from the API specification and may not include all implementation details. Always refer to the official OVHcloud documentation for complete information.
