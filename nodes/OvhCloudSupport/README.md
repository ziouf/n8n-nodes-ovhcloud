# OVH Cloud Support

> Manage support tickets — create, get, reply, score, close, reopen

## Overview

This node provides **9 operations** with **9 tests** for managing OVHcloud resources.

## Available Operations

### resources

| Operation                                     | Method | Endpoint                             | Tests | Filters       |
| --------------------------------------------- | ------ | ------------------------------------ | ----- | ------------- |
| [`canBeScored`](./`resources/canBeScored.ts`) | GET    | `/support/tickets/{...}/canBeScored` | 1     | —             |
| [`close`](./`resources/close.ts`)             | POST   | `/support/tickets/{...}/close`       | 1     | —             |
| [`create`](./`resources/create.ts`)           | POST   | `/support/tickets/create`            | 1     | —             |
| [`getMessages`](./`resources/getMessages.ts`) | GET    | `/support/tickets/{...}/messages`    | 1     | —             |
| [`get`](./`resources/get.ts`)                 | GET    | `/support/tickets/{...}`             | 1     | —             |
| [`list`](./`resources/list.ts`)               | GET    | `/support/tickets`                   | 1     | ✅ 13 filters |
| [`reopen`](./`resources/reopen.ts`)           | POST   | `/support/tickets/{...}/reopen`      | 1     | —             |
| [`reply`](./`resources/reply.ts`)             | POST   | `/support/tickets/{...}/reply`       | 1     | —             |
| [`score`](./`resources/score.ts`)             | POST   | `/support/tickets/{...}/score`       | 1     | —             |

**Total:** 9 operations, 9 tests

> **Optional filters**: The **List** operation supports 13 optional Filters (date range, status, category, product, search, flags, pagination). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.
