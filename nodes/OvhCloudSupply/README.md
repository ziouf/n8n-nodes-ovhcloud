# OVH Cloud Supply

> Find the 10 nearest MondialRelay points from an address or city

## Overview

This node provides **1 operation** covering the `/supply/mondialRelay` API v1
endpoint for finding the nearest MondialRelay pickup points.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`POST /supply/mondialRelay` and related IAM actions granted.

## Available Operations

### resources

| Operation                                               | Method | Endpoint               |
| ------------------------------------------------------- | ------ | ---------------------- |
| [`mondialRelayPost`](./`resources/mondialRelayPost.ts`) | POST   | `/supply/mondialRelay` |

**Total:** 1 operation

## Notes

- The `country` parameter is required and must be a valid ISO country code
  (e.g. `fr`).
- The `address`, `city` and `zipcode` parameters are optional but help refine
  the search results. All parameters are sent in the request body.
