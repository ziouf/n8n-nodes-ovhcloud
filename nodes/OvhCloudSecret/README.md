# OVH Cloud Secret

> Retrieve OVHcloud secrets sent by email

## Overview

This node provides **1 operation** covering the `/secret` API v1 endpoint for
retrieving secrets that OVHcloud sent by email.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The request
itself does not require authentication, but the credential is still required to
sign and dispatch the call through `ApiClient`.

## Available Operations

| Operation                                       | Method | Endpoint           |
| ----------------------------------------------- | ------ | ------------------ |
| [`retrievePost`](./`resources/retrievePost.ts`) | POST   | `/secret/retrieve` |

**Total:** 1 operation

## Notes

- Provide the `secretKey` and the `secretType` of the secret you want to retrieve.
- `secretKey` is a sensitive value and is masked in the node editor.
- The response contains the retrieved secret and its expiration time.
