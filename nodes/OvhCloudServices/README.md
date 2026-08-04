# OVH Cloud Services

> Manage generic services via /services API v1

## Overview

This node provides **50 operations** with **50 tests** for managing OVHcloud resources.

## Available Operations

### Root Operations

| Operation              | Method | Endpoint                                |
| ---------------------- | ------ | --------------------------------------- |
| `servicesListGet`      | GET    | `/services`                             |
| `servicesGetGet`       | GET    | `/services/{serviceName}`               |
| `servicesUpdatePut`    | PUT    | `/services/{serviceName}`               |
| `servicesDeleteDelete` | DELETE | `/services/{serviceName}`               |
| `reinstallPost`        | POST   | `/services/{serviceName}/reinstall`     |
| `taskListGet`          | GET    | `/services/{serviceName}/task`          |
| `taskGetGet`           | GET    | `/services/{serviceName}/task/{taskId}` |

### Resources by Family

#### Billing / Engagement

| Operation                 | Method | Endpoint                                               |
| ------------------------- | ------ | ------------------------------------------------------ |
| `engagementGet`           | GET    | `/services/{serviceName}/billing/engagement`           |
| `engagementAvailableGet`  | GET    | `/services/{serviceName}/billing/engagement/available` |
| `engagementEndRulePut`    | PUT    | `/services/{serviceName}/billing/engagement/endRule`   |
| `engagementFlushPost`     | POST   | `/services/{serviceName}/billing/engagement/flush`     |
| `engagementRequestDelete` | DELETE | `/services/{serviceName}/billing/engagement/request`   |
| `engagementRequestGet`    | GET    | `/services/{serviceName}/billing/engagement/request`   |
| `engagementRequestPost`   | POST   | `/services/{serviceName}/billing/engagement/request`   |

#### Consumption

| Operation                        | Method | Endpoint                                                   |
| -------------------------------- | ------ | ---------------------------------------------------------- |
| `consumptionGet`                 | GET    | `/services/{serviceName}/consumption`                      |
| `consumptionElementGet`          | GET    | `/services/{serviceName}/consumption/element`              |
| `consumptionForecastGet`         | GET    | `/services/{serviceName}/consumption/forecast`             |
| `consumptionForecastElementGet`  | GET    | `/services/{serviceName}/consumption/forecast/element`     |
| `consumptionHistoryGet`          | GET    | `/services/{serviceName}/consumption/history`              |
| `consumptionHistoryIdGet`        | GET    | `/services/{serviceName}/consumption/history/{id}`         |
| `consumptionHistoryIdElementGet` | GET    | `/services/{serviceName}/consumption/history/{id}/element` |

#### Detach

| Operation                    | Method | Endpoint                                             |
| ---------------------------- | ------ | ---------------------------------------------------- |
| `detachGet`                  | GET    | `/services/{serviceName}/detach`                     |
| `detachPlanCodeGet`          | GET    | `/services/{serviceName}/detach/{planCode}`          |
| `detachPlanCodeExecutePost`  | POST   | `/services/{serviceName}/detach/{planCode}/execute`  |
| `detachPlanCodeOptionsGet`   | GET    | `/services/{serviceName}/detach/{planCode}/options`  |
| `detachPlanCodeSimulatePost` | POST   | `/services/{serviceName}/detach/{planCode}/simulate` |

#### Form

| Operation                | Method | Endpoint                                         |
| ------------------------ | ------ | ------------------------------------------------ |
| `formGet`                | GET    | `/services/{serviceName}/form`                   |
| `formFormNameGet`        | GET    | `/services/{serviceName}/form/{formName}`        |
| `formFormNameAnswerPost` | POST   | `/services/{serviceName}/form/{formName}/answer` |

#### Savings Plans

| Operation                                                      | Method | Endpoint                                                                                |
| -------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| `savingsPlansContractsGet`                                     | GET    | `/services/{serviceName}/savingsPlans/contracts`                                        |
| `savingsPlansSubscribableGet`                                  | GET    | `/services/{serviceName}/savingsPlans/subscribable`                                     |
| `savingsPlansSubscribeExecutePost`                             | POST   | `/services/{serviceName}/savingsPlans/subscribe/execute`                                |
| `savingsPlansSubscribeSimulatePost`                            | POST   | `/services/{serviceName}/savingsPlans/subscribe/simulate`                               |
| `savingsPlansSubscribedGet`                                    | GET    | `/services/{serviceName}/savingsPlans/subscribed`                                       |
| `savingsPlansSubscribedSavingsPlanIdGet`                       | GET    | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}`                       |
| `savingsPlansSubscribedSavingsPlanIdPut`                       | PUT    | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}`                       |
| `savingsPlansSubscribedSavingsPlanIdChangePeriodEndActionPost` | POST   | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/changePeriodEndAction` |
| `savingsPlansSubscribedSavingsPlanIdChangeSizePost`            | POST   | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/changeSize`            |
| `savingsPlansSubscribedSavingsPlanIdPeriodsGet`                | GET    | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/periods`               |
| `savingsPlansSubscribedSavingsPlanIdTerminatePost`             | POST   | `/services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/terminate`             |

#### Upgrade

| Operation                     | Method | Endpoint                                              |
| ----------------------------- | ------ | ----------------------------------------------------- |
| `upgradeGet`                  | GET    | `/services/{serviceName}/upgrade`                     |
| `upgradePlanCodeGet`          | GET    | `/services/{serviceName}/upgrade/{planCode}`          |
| `upgradePlanCodeExecutePost`  | POST   | `/services/{serviceName}/upgrade/{planCode}/execute`  |
| `upgradePlanCodeSimulatePost` | POST   | `/services/{serviceName}/upgrade/{planCode}/simulate` |

#### Root Resources

| Operation                          | Method | Endpoint                                                |
| ---------------------------------- | ------ | ------------------------------------------------------- |
| `optionsGet`                       | GET    | `/services/{serviceName}/options`                       |
| `renewPeriodCapacitiesGet`         | GET    | `/services/{serviceName}/renewPeriodCapacities`         |
| `technicalDetailsGet`              | GET    | `/services/{serviceName}/technicalDetails`              |
| `terminatePost`                    | POST   | `/services/{serviceName}/terminate`                     |
| `terminateConfirmPost`             | POST   | `/services/{serviceName}/terminate/confirm`             |
| `terminateSkipRetentionPeriodPost` | POST   | `/services/{serviceName}/terminate/skipRetentionPeriod` |

**Total:** 50 operations, 50 tests
