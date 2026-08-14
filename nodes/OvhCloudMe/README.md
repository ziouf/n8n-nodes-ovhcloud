# OVH Cloud Me

> Manage your OVHcloud account details, billing, and subscriptions

## Overview

This node provides **12 operations** with **3 tests** for managing OVHcloud resources.

## Available Operations

### operations

| Operation                                                  | Method | Endpoint                               | Tests | Filters                                                                                                                     |
| ---------------------------------------------------------- | ------ | -------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| [`accessRestriction`](./`operations/accessRestriction.ts`) | POST   | `/me/accessRestriction/ip/{...}`       | 0     | —                                                                                                                           |
| [`account`](./`operations/account.ts`)                     | GET    | `/me/ovhAccount/{...}`                 | 0     | —                                                                                                                           |
| [`agreement`](./`operations/agreement.ts`)                 | POST   | `/me/agreements/{...}/accept`          | 0     | —                                                                                                                           |
| [`api`](./`operations/api.ts`)                             | GET    | `/me/api/application/{...}`            | 0     | —                                                                                                                           |
| [`billing`](./`operations/billing.ts`)                     | GET    | `/me/bill/{...}`                       | 1     | ✅ `dateRange`, `ids`, `category`                                                                                           |
| [`contact`](./`operations/contact.ts`)                     | GET    | `/me/contact/{...}`                    | 0     | —                                                                                                                           |
| [`domain`](./`operations/domain.ts`)                       | GET    | `/me/task/dns/{...}`                   | 0     | —                                                                                                                           |
| [`financial`](./`operations/financial.ts`)                 | GET    | `/me/credit/balance/{...}`             | 1     | ✅ `dateRange`, `ids` (Deposits, Withdrawals, Refunds, Reverse Bills); `dateRange`, `ids`, `category` (Corrective Invoices) |
| [`notification`](./`operations/notification.ts`)           | GET    | `/me/notification/email/history/{...}` | 0     | —                                                                                                                           |
| [`partner`](./`operations/partner.ts`)                     | GET    | `/me/sla/{...}`                        | 0     | —                                                                                                                           |
| [`payment`](./`operations/payment.ts`)                     | GET    | `/me/payment/method/{...}`             | 1     | ✅ `status` (Bank Accounts), `dateRange` (Orders)                                                                           |
| [`telecom`](./`operations/telecom.ts`)                     | GET    | `/me/fax/customDomains/{...}`          | 0     | —                                                                                                                           |

**Total:** 12 operations, 3 tests

> **Optional filters**: Eight list operations support optional Filters blocks (see [docs/_shared/filtering.md](../../docs/_shared/filtering.md)).
