# OVH Cloud Support

> Manage support tickets — create, get, reply, score, close, reopen

## Overview

This node provides **11 operations** with **11 tests** for managing OVHcloud resources.

## Available Operations

### resources

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`close`](./`resources/close.ts`) | POST | `/supportTicket/{...}` | 1 |
| [`contactUpdatePut`](./`resources/contactUpdatePut.ts`) | POST | `/supportTicket/{...}/contact/update` | 1 |
| [`create`](./`resources/create.ts`) | POST | `...` | 1 |
| [`getMessages`](./`resources/getMessages.ts`) | GET | `/supportTicket/{...}/messages` | 1 |
| [`get`](./`resources/get.ts`) | GET | `/supportTicket/{...}` | 1 |
| [`healthScoreGet`](./`resources/healthScoreGet.ts`) | GET | `...` | 1 |
| [`list`](./`resources/list.ts`) | GET | `...` | 1 |
| [`readAll`](./`resources/readAll.ts`) | POST | `/supportTicket/{...}/messages` | 1 |
| [`reopen`](./`resources/reopen.ts`) | POST | `/supportTicket/{...}` | 1 |
| [`reply`](./`resources/reply.ts`) | POST | `/supportTicket/{...}/messages` | 1 |
| [`score`](./`resources/score.ts`) | POST | `/supportTicket/{...}/messages` | 1 |

**Total:** 11 operations, 11 tests
