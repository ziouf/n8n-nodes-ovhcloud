# n8n OVHcloud Nodes - Supply API Documentation

**Version**: 1.0
**Resource Path**: `/supply/mondialRelay`
**Base Path**: `https://eu.api.ovh.com/v1`

---

## Overview

This document describes the **Supply API** for the OVHcloud platform, specifically the **MondialRelay** supply operation. The API allows you to find the 10 nearest MondialRelay points from a given address or city.

---

## API Status

- **Status**: Stable production version
- **Value**: `PRODUCTION`

---

## Operation Details

### Path

/supply/mondialRelay

### HTTP Method

POST

### Description

Find the 10 nearest MondialRelay points from address or city.

---

## Parameters

The operation accepts the following parameters in the request body:

| Parameter | Data Type               | Required | Description      |
| --------- | ----------------------- | -------- | ---------------- |
| address   | string                  | No       | Address          |
| city      | string                  | No       | City             |
| country   | `coreTypes.CountryEnum` | **Yes**  | ISO country code |
| zipcode   | string                  | No       | Zip Code         |

### Parameter Details

#### `address` (string)

- **Type**: `string`
- **Required**: No
- **Description**: Address

#### `city` (string)

- **Type**: `string`
- **Required**: No
- **Description**: City

#### `country` (`coreTypes.CountryEnum`)

- **Type**: `coreTypes.CountryEnum`
- **Required**: **Yes**
- **Description**: ISO country code

**Available Values**:

```
ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az,
ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw,
by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv,
cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et,
fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl,
gm, gn, gp, gq, gr, gs, gt, gu, gw, hk, hm, hn, hr, ht, hu, id, ie,
il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km,
kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly,
ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt,
mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu,
nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa,
re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm,
sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl,
tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va,
vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw
```

#### `zipcode` (string)

- **Type**: `string`
- **Required**: No
- **Description**: Zip Code

---

## Response Type

The response type for this operation is `supply.MondialRelayReturn`.

### Response Structure

```json
{
    "result": {
        "referenceAddress": "string",
        "relayPoints": [
            {
                "address": "string",
                "city": "string",
                "closing": [
                    {
                        "end": "datetime",
                        "start": "datetime"
                    }
                ],
                "country": "coreTypes.CountryEnum",
                "distance": "double",
                "id": "string",
                "lat": "double",
                "lng": "double",
                "mapUrl": "string",
                "name": "string",
                "opening": {
                    "friday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "monday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "saturday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "sunday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "thursday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "tuesday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ],
                    "wednesday": [
                        {
                            "end": "string",
                            "start": "string"
                        }
                    ]
                },
                "pictureUrl": "string",
                "zipcode": "string"
            }
        ]
    },
    "status": "supply.Status",
    "error": "string"
}
```

### Response Properties

| Property | Data Type                   | Required | Description                             |
| -------- | --------------------------- | -------- | --------------------------------------- |
| `result` | `supply.MondialRelayResult` | No       | Relay points list and reference address |
| `status` | `supply.Status`             | **Yes**  | Request status                          |
| `error`  | `string`                    | No       | Error message (if any)                  |

#### `result` (`supply.MondialRelayResult`)

- **Type**: `supply.MondialRelayResult`
- **Required**: No
- **Description**: Status and MondialRelay point details

##### Sub-Properties

###### `referenceAddress` (string)

- **Type**: `string`
- **Required**: No
- **Description**: Reference address for finding RelayPoints

###### `relayPoints` (`supply.MondialRelay[]`)

- **Type**: Array of `supply.MondialRelay` objects
- **Required**: No
- **Description**: Array of relay points

Each relay point contains the following properties:

| Property     | Data Type                            | Required | Description                              |
| ------------ | ------------------------------------ | -------- | ---------------------------------------- |
| `address`    | string                               | No       | Relay point address                      |
| `city`       | string                               | No       | City                                     |
| `closing`    | `supply.MondialRelayClosingPeriod[]` | No       | Relay point closing dates                |
| `country`    | `coreTypes.CountryEnum`              | No       | Relay country                            |
| `distance`   | double                               | No       | Distance between address and relay point |
| `id`         | string                               | No       | MondialRelay point ID                    |
| `lat`        | double                               | No       | Relay point latitude                     |
| `lng`        | double                               | No       | Relay point longitude                    |
| `mapUrl`     | string                               | No       | URL of short map                         |
| `name`       | string                               | No       | Relay point name                         |
| `opening`    | `supply.MondialRelayOpening`         | No       | Relay point opening hours                |
| `pictureUrl` | string                               | No       | Relay point picture URL                  |
| `zipcode`    | string                               | No       | Zipcode                                  |

#### `status` (`supply.Status`)

- **Type**: `supply.Status`
- **Required**: **Yes**
- **Description**: Request status

##### Available Values

```
ok, error, pending
```

---

## Authentication

- **Required**: Yes
- **IAM Actions**:
  - `account:apiovh:supplyMondialRelay/create` (Required: Yes)

---

## Examples

### Request Example

```json
{
    "country": "fr",
    "address": "12 Rue de la République, 75002 Paris",
    "zipcode": "75002"
}
```

### Response Example

```json
{
    "status": "ok",
    "result": {
        "referenceAddress": "12 Rue de la République, 75002 Paris",
        "relayPoints": [
            {
                "id": "relayPoint1",
                "name": "MondialRelay Point A",
                "address": "10 Rue de Rivoli",
                "city": "Paris",
                "country": "fr",
                "zipcode": "75001",
                "lat": 48.858844,
                "lng": 2.340956,
                "distance": 1.2,
                "mapUrl": "https://example.com/map1",
                "pictureUrl": "https://example.com/pic1",
                "opening": {
                    "monday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "tuesday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "wednesday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "thursday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "friday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "saturday": [
                        {
                            "start": "09:00",
                            "end": "12:00"
                        }
                    ],
                    "sunday": []
                },
                "closing": [
                    {
                        "start": "2025-07-14T00:00:00",
                        "end": "2025-07-15T00:00:00"
                    }
                ]
            },
            {
                "id": "relayPoint2",
                "name": "MondialRelay Point B",
                "address": "20 Rue de Rivoli",
                "city": "Paris",
                "country": "fr",
                "zipcode": "75001",
                "lat": 48.858844,
                "lng": 2.340956,
                "distance": 1.5,
                "mapUrl": "https://example.com/map2",
                "pictureUrl": "https://example.com/pic2",
                "opening": {
                    "monday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "tuesday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "wednesday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "thursday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "friday": [
                        {
                            "start": "09:00",
                            "end": "18:00"
                        }
                    ],
                    "saturday": [
                        {
                            "start": "09:00",
                            "end": "12:00"
                        }
                    ],
                    "sunday": []
                },
                "closing": []
            }
        ]
    }
}
```

---

## Error Handling

If the request fails, the response will include an `error` field with a descriptive message. The `status` field will be set to `error`.

### Error Example

```json
{
    "status": "error",
    "error": "Invalid country code"
}
```

---

## Notes

- The operation returns up to 10 nearest MondialRelay points.
- The `country` parameter is required and must be a valid ISO country code.
- The `address` and `zipcode` parameters are optional but help refine the search results.
- Each relay point includes detailed information such as coordinates, opening hours, and map/picture URLs.
- Authentication is required via the specified IAM action.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [MondialRelay Official Website](https://www.mondialrelay.com/)
