# OVH Cloud Public Cloud

> Manage public cloud projects, Kubernetes, instances, regions, databases (14 engines), block storage, Rancher

## Overview

This node provides **694 operations** with **647 tests** for managing OVHcloud resources.

## Available Operations

### acl

| Operation                                 | Method | Endpoint                               | Tests |
| ----------------------------------------- | ------ | -------------------------------------- | ----- |
| [`createPost`](./`acl/createPost.ts`)     | POST   | `/publicCloud/project/{...}/acl`       | 1     |
| [`deleteDelete`](./`acl/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/acl/{...}` | 1     |
| [`listGet`](./`acl/listGet.ts`)           | GET    | `/publicCloud/project/{...}/acl`       | 1     |

### activateMonthlyBilling

| Operation                                                                                | Method | Endpoint                                            | Tests |
| ---------------------------------------------------------------------------------------- | ------ | --------------------------------------------------- | ----- |
| [`activateMonthlyBillingPost`](./`activateMonthlyBilling/activateMonthlyBillingPost.ts`) | POST   | `/publicCloud/project/{...}/activateMonthlyBilling` | 1     |

### alerting

| Operation                                      | Method | Endpoint                                    | Tests |
| ---------------------------------------------- | ------ | ------------------------------------------- | ----- |
| [`createPost`](./`alerting/createPost.ts`)     | POST   | `/publicCloud/project/{...}/alerting`       | 1     |
| [`deleteDelete`](./`alerting/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/alerting/{...}` | 1     |
| [`getDetailGet`](./`alerting/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/alerting/{...}` | 1     |
| [`listGet`](./`alerting/listGet.ts`)           | GET    | `/publicCloud/project/{...}/alerting`       | 1     |
| [`updatePut`](./`alerting/updatePut.ts`)       | PUT    | `/publicCloud/project/{...}/alerting/{...}` | 1     |

### bill

| Operation                        | Method | Endpoint                          | Tests |
| -------------------------------- | ------ | --------------------------------- | ----- |
| [`listGet`](./`bill/listGet.ts`) | GET    | `/publicCloud/project/{...}/bill` | 1     |

### blockstorage

| Operation                                                                                                      | Method | Endpoint                                                                   | Tests |
| -------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------- | ----- |
| [`backupCreatePost`](./`blockstorage/backupCreatePost.ts`)                                                     | POST   | `/publicCloud/project/{...}/blockStorage/backup`                           | 0     |
| [`backupDeleteDelete`](./`blockstorage/backupDeleteDelete.ts`)                                                 | DELETE | `/publicCloud/project/{...}/blockStorage/backup/{...}`                     | 0     |
| [`backupGet`](./`blockstorage/backupGet.ts`)                                                                   | GET    | `/publicCloud/project/{...}/blockStorage/backup/{...}`                     | 0     |
| [`backupListGet`](./`blockstorage/backupListGet.ts`)                                                           | GET    | `...`                                                                      | 0     |
| [`backupRetentionDailySetPost`](./`blockstorage/backupRetentionDailySetPost.ts`)                               | POST   | `/publicCloud/project/{...}/blockStorage/backup/{...}/retention/daily/set` | 0     |
| [`backupUpdatePut`](./`blockstorage/backupUpdatePut.ts`)                                                       | PUT    | `/publicCloud/project/{...}/blockStorage/backup/{...}`                     | 0     |
| [`snapshotCreatePost`](./`blockstorage/snapshotCreatePost.ts`)                                                 | POST   | `/publicCloud/project/{...}/blockStorage/snapshot`                         | 0     |
| [`snapshotDeleteDelete`](./`blockstorage/snapshotDeleteDelete.ts`)                                             | DELETE | `/publicCloud/project/{...}/blockStorage/snapshot/{...}`                   | 0     |
| [`snapshotGet`](./`blockstorage/snapshotGet.ts`)                                                               | GET    | `/publicCloud/project/{...}/blockStorage/snapshot/{...}`                   | 0     |
| [`snapshotListGet`](./`blockstorage/snapshotListGet.ts`)                                                       | GET    | `...`                                                                      | 0     |
| [`snapshotUpdatePut`](./`blockstorage/snapshotUpdatePut.ts`)                                                   | PUT    | `/publicCloud/project/{...}/blockStorage/snapshot/{...}`                   | 0     |
| [`volumeBackupReferenceListGet`](./`blockstorage/volumeBackupReferenceListGet.ts`)                             | GET    | `/publicCloud/project/{...}/blockStorage/volume/{...}/backupReferences`    | 0     |
| [`volumeCapabilitiesListGet`](./`blockstorage/volumeCapabilitiesListGet.ts`)                                   | GET    | `...`                                                                      | 0     |
| [`volumeCapabilityListGetByRegionNameGet`](./`blockstorage/volumeCapabilityListGetByRegionNameGet.ts`)         | GET    | `...`                                                                      | 0     |
| [`volumeCreatePost`](./`blockstorage/volumeCreatePost.ts`)                                                     | POST   | `/publicCloud/project/{...}/blockStorage/volume`                           | 0     |
| [`volumeDeleteDelete`](./`blockstorage/volumeDeleteDelete.ts`)                                                 | DELETE | `/publicCloud/project/{...}/blockStorage/volume/{...}`                     | 0     |
| [`volumeGet`](./`blockstorage/volumeGet.ts`)                                                                   | GET    | `/publicCloud/project/{...}/blockStorage/volume/{...}`                     | 0     |
| [`volumeListGet`](./`blockstorage/volumeListGet.ts`)                                                           | GET    | `/publicCloud/project/{...}/blockStorage/volume`                           | 0     |
| [`volumeMonitoringStatsGet`](./`blockstorage/volumeMonitoringStatsGet.ts`)                                     | GET    | `...`                                                                      | 0     |
| [`volumePlanCapabilityListGetByRegionNameGet`](./`blockstorage/volumePlanCapabilityListGetByRegionNameGet.ts`) | GET    | `...`                                                                      | 0     |
| [`volumeUpdatePut`](./`blockstorage/volumeUpdatePut.ts`)                                                       | PUT    | `/publicCloud/project/{...}/blockStorage/volume/{...}`                     | 0     |

### cancel

| Operation                                | Method | Endpoint                            | Tests |
| ---------------------------------------- | ------ | ----------------------------------- | ----- |
| [`cancelPost`](./`cancel/cancelPost.ts`) | POST   | `/publicCloud/project/{...}/cancel` | 1     |

### capabilities

| Operation                                                                    | Method | Endpoint                                                     | Tests |
| ---------------------------------------------------------------------------- | ------ | ------------------------------------------------------------ | ----- |
| [`getKubeDetailGet`](./`capabilities/getKubeDetailGet.ts`)                   | GET    | `/publicCloud/project/{...}/capabilities/kube/{...}`         | 1     |
| [`getLoadbalancerDetailGet`](./`capabilities/getLoadbalancerDetailGet.ts`)   | GET    | `/publicCloud/project/{...}/capabilities/loadbalancer/{...}` | 1     |
| [`getRegionDetailGet`](./`capabilities/getRegionDetailGet.ts`)               | GET    | `/publicCloud/project/{...}/capabilities/region/{...}`       | 1     |
| [`getRegionProductDetailGet`](./`capabilities/getRegionProductDetailGet.ts`) | GET    | `/publicCloud/project/{...}/capabilities/region/{...}/{...}` | 1     |
| [`listGet`](./`capabilities/listGet.ts`)                                     | GET    | `/publicCloud/project/{...}/capabilities`                    | 1     |
| [`listKubeGet`](./`capabilities/listKubeGet.ts`)                             | GET    | `/publicCloud/project/{...}/capabilities/kube`               | 1     |
| [`listLoadbalancerGet`](./`capabilities/listLoadbalancerGet.ts`)             | GET    | `/publicCloud/project/{...}/capabilities/loadbalancer`       | 1     |
| [`listRegionGet`](./`capabilities/listRegionGet.ts`)                         | GET    | `/publicCloud/project/{...}/capabilities/region`             | 1     |

### changeContact

| Operation                                                     | Method | Endpoint                                   | Tests |
| ------------------------------------------------------------- | ------ | ------------------------------------------ | ----- |
| [`changeContactPost`](./`changeContact/changeContactPost.ts`) | POST   | `/publicCloud/project/{...}/changeContact` | 1     |

### confirmTermination

| Operation                                                                    | Method | Endpoint                                        | Tests |
| ---------------------------------------------------------------------------- | ------ | ----------------------------------------------- | ----- |
| [`confirmTerminationPost`](./`confirmTermination/confirmTerminationPost.ts`) | POST   | `/publicCloud/project/{...}/confirmTermination` | 1     |

### containerRegistry

| Operation                                                       | Method | Endpoint                                                        | Tests |
| --------------------------------------------------------------- | ------ | --------------------------------------------------------------- | ----- |
| [`createPost`](./`containerRegistry/createPost.ts`)             | POST   | `/publicCloud/project/{...}/containerRegistry`                  | 1     |
| [`createUserPost`](./`containerRegistry/createUserPost.ts`)     | POST   | `/publicCloud/project/{...}/containerRegistry/{...}/user`       | 1     |
| [`deleteDelete`](./`containerRegistry/deleteDelete.ts`)         | DELETE | `/publicCloud/project/{...}/containerRegistry/{...}`            | 1     |
| [`deleteUserDelete`](./`containerRegistry/deleteUserDelete.ts`) | DELETE | `/publicCloud/project/{...}/containerRegistry/{...}/user/{...}` | 1     |
| [`getDetailGet`](./`containerRegistry/getDetailGet.ts`)         | GET    | `/publicCloud/project/{...}/containerRegistry/{...}`            | 1     |
| [`getUserDetailGet`](./`containerRegistry/getUserDetailGet.ts`) | GET    | `/publicCloud/project/{...}/containerRegistry/{...}/user/{...}` | 1     |
| [`listGet`](./`containerRegistry/listGet.ts`)                   | GET    | `/publicCloud/project/{...}/containerRegistry`                  | 1     |
| [`listUsersGet`](./`containerRegistry/listUsersGet.ts`)         | GET    | `/publicCloud/project/{...}/containerRegistry/{...}/user`       | 1     |
| [`updatePut`](./`containerRegistry/updatePut.ts`)               | PUT    | `/publicCloud/project/{...}/containerRegistry/{...}`            | 1     |

### credit

| Operation                                    | Method | Endpoint                                  | Tests |
| -------------------------------------------- | ------ | ----------------------------------------- | ----- |
| [`getDetailGet`](./`credit/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/credit/{...}` | 1     |
| [`listGet`](./`credit/listGet.ts`)           | GET    | `/publicCloud/project/{...}/credit`       | 1     |

### database

| Operation | Method | Endpoint | Tests |
| --------- | ------ | -------- | ----- |

#### database/grafana

| Operation                                                                                              | Method | Endpoint                                                                         | Tests |
| ------------------------------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------- | ----- |
| [`advancedConfigurationGet`](./`database/grafana/advancedConfigurationGet.ts`)                         | GET    | `/cloud/project/{...}/database/grafana/{...}/advancedConfiguration`              | 2     |
| [`advancedConfigurationUpdatePut`](./`database/grafana/advancedConfigurationUpdatePut.ts`)             | PUT    | `/cloud/project/{...}/database/grafana/{...}/advancedConfiguration`              | 2     |
| [`backupGetGet`](./`database/grafana/backupGetGet.ts`)                                                 | GET    | `/cloud/project/{...}/database/grafana/{...}/backup/{...}`                       | 2     |
| [`backupListGet`](./`database/grafana/backupListGet.ts`)                                               | GET    | `/cloud/project/{...}/database/grafana/{...}/backup`                             | 2     |
| [`capabilitiesAdvancedConfigurationGet`](./`database/grafana/capabilitiesAdvancedConfigurationGet.ts`) | GET    | `/cloud/project/{...}/database/grafana/{...}/capabilities/advancedConfiguration` | 2     |
| [`capabilitiesBackupRegionsGet`](./`database/grafana/capabilitiesBackupRegionsGet.ts`)                 | GET    | `/cloud/project/{...}/database/grafana/{...}/capabilities/backupRegions`         | 2     |
| [`capabilitiesIntegrationGet`](./`database/grafana/capabilitiesIntegrationGet.ts`)                     | GET    | `/cloud/project/{...}/database/grafana/{...}/capabilities/integration`           | 2     |
| [`clusterCreatePost`](./`database/grafana/clusterCreatePost.ts`)                                       | POST   | `/cloud/project/{...}/database/grafana`                                          | 2     |
| [`clusterDeleteDelete`](./`database/grafana/clusterDeleteDelete.ts`)                                   | DELETE | `/cloud/project/{...}/database/grafana/{...}`                                    | 2     |
| [`clusterGetGet`](./`database/grafana/clusterGetGet.ts`)                                               | GET    | `/cloud/project/{...}/database/grafana/{...}`                                    | 2     |
| [`clusterListGet`](./`database/grafana/clusterListGet.ts`)                                             | GET    | `/cloud/project/{...}/database/grafana`                                          | 2     |
| [`clusterUpdatePut`](./`database/grafana/clusterUpdatePut.ts`)                                         | PUT    | `/cloud/project/{...}/database/grafana/{...}`                                    | 2     |
| [`integrationCreatePost`](./`database/grafana/integrationCreatePost.ts`)                               | POST   | `/cloud/project/{...}/database/grafana/{...}/integration`                        | 2     |
| [`integrationDeleteDelete`](./`database/grafana/integrationDeleteDelete.ts`)                           | DELETE | `/cloud/project/{...}/database/grafana/{...}/integration/{...}`                  | 2     |
| [`integrationGetGet`](./`database/grafana/integrationGetGet.ts`)                                       | GET    | `/cloud/project/{...}/database/grafana/{...}/integration/{...}`                  | 2     |
| [`integrationListGet`](./`database/grafana/integrationListGet.ts`)                                     | GET    | `/cloud/project/{...}/database/grafana/{...}/integration`                        | 2     |
| [`ipRestrictionCreatePost`](./`database/grafana/ipRestrictionCreatePost.ts`)                           | POST   | `/cloud/project/{...}/database/grafana/{...}/ipRestriction`                      | 2     |
| [`ipRestrictionDeleteDelete`](./`database/grafana/ipRestrictionDeleteDelete.ts`)                       | DELETE | `/cloud/project/{...}/database/grafana/{...}/ipRestriction/{...}`                | 2     |
| [`ipRestrictionGetGet`](./`database/grafana/ipRestrictionGetGet.ts`)                                   | GET    | `/cloud/project/{...}/database/grafana/{...}/ipRestriction/{...}`                | 2     |
| [`ipRestrictionListGet`](./`database/grafana/ipRestrictionListGet.ts`)                                 | GET    | `/cloud/project/{...}/database/grafana/{...}/ipRestriction`                      | 2     |
| [`ipRestrictionUpdatePut`](./`database/grafana/ipRestrictionUpdatePut.ts`)                             | PUT    | `/cloud/project/{...}/database/grafana/{...}/ipRestriction/{...}`                | 2     |
| [`logKindGet`](./`database/grafana/logKindGet.ts`)                                                     | GET    | `/cloud/project/{...}/database/grafana/{...}/log/kind/{...}`                     | 2     |
| [`logKindListGet`](./`database/grafana/logKindListGet.ts`)                                             | GET    | `/cloud/project/{...}/database/grafana/{...}/log/kind`                           | 2     |
| [`logSubscriptionCreatePost`](./`database/grafana/logSubscriptionCreatePost.ts`)                       | POST   | `/cloud/project/{...}/database/grafana/{...}/log/subscription`                   | 2     |
| [`logSubscriptionDeleteDelete`](./`database/grafana/logSubscriptionDeleteDelete.ts`)                   | DELETE | `/cloud/project/{...}/database/grafana/{...}/log/subscription/{...}`             | 2     |
| [`logSubscriptionGetGet`](./`database/grafana/logSubscriptionGetGet.ts`)                               | GET    | `/cloud/project/{...}/database/grafana/{...}/log/subscription/{...}`             | 2     |
| [`logSubscriptionListGet`](./`database/grafana/logSubscriptionListGet.ts`)                             | GET    | `/cloud/project/{...}/database/grafana/{...}/log/subscription`                   | 2     |
| [`logUrlCreatePost`](./`database/grafana/logUrlCreatePost.ts`)                                         | POST   | `/cloud/project/{...}/database/grafana/{...}/log/url`                            | 2     |
| [`logsGet`](./`database/grafana/logsGet.ts`)                                                           | GET    | `/cloud/project/{...}/database/grafana/{...}/logs`                               | 2     |
| [`maintenanceApplyPost`](./`database/grafana/maintenanceApplyPost.ts`)                                 | POST   | `/cloud/project/{...}/database/grafana/{...}/maintenance/{...}/apply`            | 2     |
| [`maintenanceGet`](./`database/grafana/maintenanceGet.ts`)                                             | GET    | `/cloud/project/{...}/database/grafana/{...}/maintenance/{...}`                  | 2     |
| [`maintenanceListGet`](./`database/grafana/maintenanceListGet.ts`)                                     | GET    | `/cloud/project/{...}/database/grafana/{...}/maintenance`                        | 2     |
| [`metricGet`](./`database/grafana/metricGet.ts`)                                                       | GET    | `/cloud/project/{...}/database/grafana/{...}/metric/{...}`                       | 2     |
| [`metricListGet`](./`database/grafana/metricListGet.ts`)                                               | GET    | `/cloud/project/{...}/database/grafana/{...}/metric`                             | 2     |
| [`nodeGetGet`](./`database/grafana/nodeGetGet.ts`)                                                     | GET    | `/cloud/project/{...}/database/grafana/{...}/node/{...}`                         | 2     |
| [`nodeListGet`](./`database/grafana/nodeListGet.ts`)                                                   | GET    | `/cloud/project/{...}/database/grafana/{...}/node`                               | 2     |
| [`userCredentialsResetPost`](./`database/grafana/userCredentialsResetPost.ts`)                         | POST   | `/cloud/project/{...}/database/grafana/{...}/user/{...}/credentials/reset`       | 2     |
| [`userGetGet`](./`database/grafana/userGetGet.ts`)                                                     | GET    | `/cloud/project/{...}/database/grafana/{...}/user/{...}`                         | 2     |
| [`userListGet`](./`database/grafana/userListGet.ts`)                                                   | GET    | `/cloud/project/{...}/database/grafana/{...}/user`                               | 2     |

### flavor

| Operation                                    | Method | Endpoint                                  | Tests |
| -------------------------------------------- | ------ | ----------------------------------------- | ----- |
| [`getDetailGet`](./`flavor/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/flavor/{...}` | 1     |
| [`listGet`](./`flavor/listGet.ts`)           | GET    | `/publicCloud/project/{...}/flavor`       | 1     |

### image

| Operation                                   | Method | Endpoint                                 | Tests |
| ------------------------------------------- | ------ | ---------------------------------------- | ----- |
| [`getDetailGet`](./`image/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/image/{...}` | 1     |
| [`listGet`](./`image/listGet.ts`)           | GET    | `/publicCloud/project/{...}/image`       | 1     |

### instance

| Operation                                                                              | Method | Endpoint                                                         | Tests |
| -------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------- | ----- |
| [`instanceActiveMonthlyBillingPost`](./`instance/instanceActiveMonthlyBillingPost.ts`) | POST   | `/publicCloud/project/{...}/instance/{...}/activeMonthlyBilling` | 1     |
| [`instanceApplicationAccessPost`](./`instance/instanceApplicationAccessPost.ts`)       | POST   | `/publicCloud/project/{...}/instance/{...}/applicationAccess`    | 1     |
| [`instanceBulkPost`](./`instance/instanceBulkPost.ts`)                                 | POST   | `/publicCloud/project/{...}/instance/bulk`                       | 1     |
| [`instanceCreatePost`](./`instance/instanceCreatePost.ts`)                             | POST   | `/publicCloud/project/{...}/instance`                            | 1     |
| [`instanceDeleteDelete`](./`instance/instanceDeleteDelete.ts`)                         | DELETE | `/publicCloud/project/{...}/instance/{...}`                      | 1     |
| [`instanceGetGet`](./`instance/instanceGetGet.ts`)                                     | GET    | `/publicCloud/project/{...}/instance/{...}`                      | 1     |
| [`instanceGroupCreatePost`](./`instance/instanceGroupCreatePost.ts`)                   | POST   | `/publicCloud/project/{...}/instance/group`                      | 1     |
| [`instanceGroupDeleteDelete`](./`instance/instanceGroupDeleteDelete.ts`)               | DELETE | `/publicCloud/project/{...}/instance/group/{...}`                | 1     |
| [`instanceGroupGetGet`](./`instance/instanceGroupGetGet.ts`)                           | GET    | `/publicCloud/project/{...}/instance/group/{...}`                | 1     |
| [`instanceGroupListGet`](./`instance/instanceGroupListGet.ts`)                         | GET    | `/publicCloud/project/{...}/instance/group`                      | 1     |
| [`instanceInterfaceCreatePost`](./`instance/instanceInterfaceCreatePost.ts`)           | POST   | `/publicCloud/project/{...}/instance/{...}/interface`            | 1     |
| [`instanceInterfaceDeleteDelete`](./`instance/instanceInterfaceDeleteDelete.ts`)       | DELETE | `/publicCloud/project/{...}/instance/{...}/interface/{...}`      | 1     |
| [`instanceInterfaceGetGet`](./`instance/instanceInterfaceGetGet.ts`)                   | GET    | `/publicCloud/project/{...}/instance/{...}/interface/{...}`      | 1     |
| [`instanceInterfaceListGet`](./`instance/instanceInterfaceListGet.ts`)                 | GET    | `/publicCloud/project/{...}/instance/{...}/interface`            | 1     |
| [`instanceListGet`](./`instance/instanceListGet.ts`)                                   | GET    | `/publicCloud/project/{...}/instance`                            | 1     |
| [`instanceRebootPost`](./`instance/instanceRebootPost.ts`)                             | POST   | `/publicCloud/project/{...}/instance/{...}/reboot`               | 1     |
| [`instanceReinstallPost`](./`instance/instanceReinstallPost.ts`)                       | POST   | `/publicCloud/project/{...}/instance/{...}/reinstall`            | 1     |
| [`instanceRescueModePost`](./`instance/instanceRescueModePost.ts`)                     | POST   | `/publicCloud/project/{...}/instance/{...}/rescueMode`           | 1     |
| [`instanceResizePost`](./`instance/instanceResizePost.ts`)                             | POST   | `/publicCloud/project/{...}/instance/{...}/resize`               | 1     |
| [`instanceResumePost`](./`instance/instanceResumePost.ts`)                             | POST   | `/publicCloud/project/{...}/instance/{...}/resume`               | 1     |
| [`instanceShelvePost`](./`instance/instanceShelvePost.ts`)                             | POST   | `/publicCloud/project/{...}/instance/{...}/shelve`               | 1     |
| [`instanceSnapshotPost`](./`instance/instanceSnapshotPost.ts`)                         | POST   | `/publicCloud/project/{...}/instance/{...}/snapshot`             | 1     |
| [`instanceStartPost`](./`instance/instanceStartPost.ts`)                               | POST   | `/publicCloud/project/{...}/instance/{...}/start`                | 1     |
| [`instanceStopPost`](./`instance/instanceStopPost.ts`)                                 | POST   | `/publicCloud/project/{...}/instance/{...}/stop`                 | 1     |
| [`instanceUnshelvePost`](./`instance/instanceUnshelvePost.ts`)                         | POST   | `/publicCloud/project/{...}/instance/{...}/unshelve`             | 1     |
| [`instanceUpdatePut`](./`instance/instanceUpdatePut.ts`)                               | PUT    | `/publicCloud/project/{...}/instance/{...}`                      | 1     |
| [`instanceVncGet`](./`instance/instanceVncGet.ts`)                                     | GET    | `/publicCloud/project/{...}/instance/{...}/vnc`                  | 1     |

### ip

| Operation                                | Method | Endpoint                              | Tests |
| ---------------------------------------- | ------ | ------------------------------------- | ----- |
| [`createPost`](./`ip/createPost.ts`)     | POST   | `/publicCloud/project/{...}/ip`       | 1     |
| [`deleteDelete`](./`ip/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/ip/{...}` | 1     |
| [`getDetailGet`](./`ip/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/ip/{...}` | 1     |
| [`listGet`](./`ip/listGet.ts`)           | GET    | `/publicCloud/project/{...}/ip`       | 1     |
| [`updatePut`](./`ip/updatePut.ts`)       | PUT    | `/publicCloud/project/{...}/ip/{...}` | 1     |

### kube

| Operation                                                                                          | Method | Endpoint                                                      | Tests |
| -------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------- | ----- |
| [`kubeAuditLogsPost`](./`kube/kubeAuditLogsPost.ts`)                                               | POST   | `/cloud/project/{...}/kube/{...}/auditLogs`                   | 2     |
| [`kubeCustomizationGet`](./`kube/kubeCustomizationGet.ts`)                                         | GET    | `/cloud/project/{...}/kube/{...}/customization`               | 3     |
| [`kubeCustomizationUpdatePut`](./`kube/kubeCustomizationUpdatePut.ts`)                             | PUT    | `/cloud/project/{...}/kube/{...}/customization`               | 2     |
| [`kubeDeleteDelete`](./`kube/kubeDeleteDelete.ts`)                                                 | DELETE | `/cloud/project/{...}/kube/{...}`                             | 2     |
| [`kubeFlavorsGet`](./`kube/kubeFlavorsGet.ts`)                                                     | GET    | `/cloud/project/{...}/kube/{...}/flavors`                     | 3     |
| [`kubeGetGet`](./`kube/kubeGetGet.ts`)                                                             | GET    | `/cloud/project/{...}/kube/{...}`                             | 3     |
| [`kubeIpRestrictionsDeleteDelete`](./`kube/kubeIpRestrictionsDeleteDelete.ts`)                     | DELETE | `/cloud/project/{...}/kube/{...}/ipRestrictions/{...}`        | 2     |
| [`kubeIpRestrictionsGet`](./`kube/kubeIpRestrictionsGet.ts`)                                       | GET    | `/cloud/project/{...}/kube/{...}/ipRestrictions`              | 3     |
| [`kubeIpRestrictionsPost`](./`kube/kubeIpRestrictionsPost.ts`)                                     | POST   | `/cloud/project/{...}/kube/{...}/ipRestrictions`              | 2     |
| [`kubeIpRestrictionsUpdatePut`](./`kube/kubeIpRestrictionsUpdatePut.ts`)                           | PUT    | `/cloud/project/{...}/kube/{...}/ipRestrictions`              | 2     |
| [`kubeKubeconfigPost`](./`kube/kubeKubeconfigPost.ts`)                                             | POST   | `/cloud/project/{...}/kube/{...}/kubeconfig`                  | 2     |
| [`kubeKubeconfigResetPost`](./`kube/kubeKubeconfigResetPost.ts`)                                   | POST   | `/cloud/project/{...}/kube/{...}/kubeconfig/reset`            | 2     |
| [`kubeListGet`](./`kube/kubeListGet.ts`)                                                           | GET    | `/cloud/project/{...}/kube`                                   | 2     |
| [`kubeLogSubscriptionDeleteDelete`](./`kube/kubeLogSubscriptionDeleteDelete.ts`)                   | DELETE | `/cloud/project/{...}/kube/{...}/log/subscription/{...}`      | 2     |
| [`kubeLogSubscriptionGet`](./`kube/kubeLogSubscriptionGet.ts`)                                     | GET    | `/cloud/project/{...}/kube/{...}/log/subscription/{...}`      | 2     |
| [`kubeLogSubscriptionListGet`](./`kube/kubeLogSubscriptionListGet.ts`)                             | GET    | `/cloud/project/{...}/kube/{...}/log/subscription`            | 3     |
| [`kubeLogSubscriptionPost`](./`kube/kubeLogSubscriptionPost.ts`)                                   | POST   | `/cloud/project/{...}/kube/{...}/log/subscription`            | 2     |
| [`kubeLogUrlPost`](./`kube/kubeLogUrlPost.ts`)                                                     | POST   | `/cloud/project/{...}/kube/{...}/log/url`                     | 2     |
| [`kubeMetricsEtcdUsageGet`](./`kube/kubeMetricsEtcdUsageGet.ts`)                                   | GET    | `/cloud/project/{...}/kube/{...}/metrics/etcdUsage`           | 3     |
| [`kubeNodeDeleteDelete`](./`kube/kubeNodeDeleteDelete.ts`)                                         | DELETE | `/cloud/project/{...}/kube/{...}/node/{...}`                  | 2     |
| [`kubeNodeGet`](./`kube/kubeNodeGet.ts`)                                                           | GET    | `/cloud/project/{...}/kube/{...}/node/{...}`                  | 2     |
| [`kubeNodeListGet`](./`kube/kubeNodeListGet.ts`)                                                   | GET    | `/cloud/project/{...}/kube/{...}/node`                        | 3     |
| [`kubeNodepoolCreatePost`](./`kube/kubeNodepoolCreatePost.ts`)                                     | POST   | `/cloud/project/{...}/kube/{...}/nodepool`                    | 4     |
| [`kubeNodepoolDeleteDelete`](./`kube/kubeNodepoolDeleteDelete.ts`)                                 | DELETE | `/cloud/project/{...}/kube/{...}/nodepool/{...}`              | 2     |
| [`kubeNodepoolGetGet`](./`kube/kubeNodepoolGetGet.ts`)                                             | GET    | `/cloud/project/{...}/kube/{...}/nodepool/{...}`              | 2     |
| [`kubeNodepoolListGet`](./`kube/kubeNodepoolListGet.ts`)                                           | GET    | `/cloud/project/{...}/kube/{...}/nodepool`                    | 3     |
| [`kubeNodepoolListNodepoolNodesGet`](./`kube/kubeNodepoolListNodepoolNodesGet.ts`)                 | GET    | `/cloud/project/{...}/kube/{...}/nodepool/{...}/nodes`        | 2     |
| [`kubeNodepoolUpdatePut`](./`kube/kubeNodepoolUpdatePut.ts`)                                       | PUT    | `/cloud/project/{...}/kube/{...}/nodepool/{...}`              | 2     |
| [`kubeOpenIdConnectDeleteDelete`](./`kube/kubeOpenIdConnectDeleteDelete.ts`)                       | DELETE | `/cloud/project/{...}/kube/{...}/openIdConnect`               | 2     |
| [`kubeOpenIdConnectGet`](./`kube/kubeOpenIdConnectGet.ts`)                                         | GET    | `/cloud/project/{...}/kube/{...}/openIdConnect`               | 2     |
| [`kubeOpenIdConnectPost`](./`kube/kubeOpenIdConnectPost.ts`)                                       | POST   | `/cloud/project/{...}/kube/{...}/openIdConnect`               | 2     |
| [`kubeOpenIdConnectUpdatePut`](./`kube/kubeOpenIdConnectUpdatePut.ts`)                             | PUT    | `/cloud/project/{...}/kube/{...}/openIdConnect`               | 2     |
| [`kubePrivateNetworkConfigurationGet`](./`kube/kubePrivateNetworkConfigurationGet.ts`)             | GET    | `/cloud/project/{...}/kube/{...}/privateNetworkConfiguration` | 2     |
| [`kubePrivateNetworkConfigurationUpdatePut`](./`kube/kubePrivateNetworkConfigurationUpdatePut.ts`) | PUT    | `/cloud/project/{...}/kube/{...}/privateNetworkConfiguration` | 2     |
| [`kubeResetPost`](./`kube/kubeResetPost.ts`)                                                       | POST   | `/cloud/project/{...}/kube/{...}/reset`                       | 2     |
| [`kubeRestartPost`](./`kube/kubeRestartPost.ts`)                                                   | POST   | `/cloud/project/{...}/kube/{...}/restart`                     | 2     |
| [`kubeUpdateLoadBalancersSubnetIdUpdatePut`](./`kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.ts`) | PUT    | `/cloud/project/{...}/kube/{...}/updateLoadBalancersSubnetId` | 2     |
| [`kubeUpdatePolicyUpdatePut`](./`kube/kubeUpdatePolicyUpdatePut.ts`)                               | PUT    | `/cloud/project/{...}/kube/{...}/updatePolicy`                | 2     |
| [`kubeUpdatePost`](./`kube/kubeUpdatePost.ts`)                                                     | POST   | `/cloud/project/{...}/kube/{...}/update`                      | 2     |
| [`kubeUpdatePut`](./`kube/kubeUpdatePut.ts`)                                                       | PUT    | `/cloud/project/{...}/kube/{...}`                             | 2     |

### lab

| Operation                                 | Method | Endpoint                               | Tests |
| ----------------------------------------- | ------ | -------------------------------------- | ----- |
| [`createPost`](./`lab/createPost.ts`)     | POST   | `/publicCloud/project/{...}/lab`       | 1     |
| [`deleteDelete`](./`lab/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/lab/{...}` | 1     |
| [`getDetailGet`](./`lab/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/lab/{...}` | 1     |
| [`listGet`](./`lab/listGet.ts`)           | GET    | `/publicCloud/project/{...}/lab`       | 1     |
| [`updatePut`](./`lab/updatePut.ts`)       | PUT    | `/publicCloud/project/{...}/lab/{...}` | 1     |

### loadbalancer

| Operation                                          | Method | Endpoint                                        | Tests |
| -------------------------------------------------- | ------ | ----------------------------------------------- | ----- |
| [`createPost`](./`loadbalancer/createPost.ts`)     | POST   | `/publicCloud/project/{...}/loadbalancer`       | 1     |
| [`deleteDelete`](./`loadbalancer/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/loadbalancer/{...}` | 1     |
| [`getDetailGet`](./`loadbalancer/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/loadbalancer/{...}` | 1     |
| [`listGet`](./`loadbalancer/listGet.ts`)           | GET    | `/publicCloud/project/{...}/loadbalancer`       | 1     |
| [`updatePut`](./`loadbalancer/updatePut.ts`)       | PUT    | `/publicCloud/project/{...}/loadbalancer/{...}` | 1     |

### network

| Operation                                                                 | Method | Endpoint                                                  | Tests |
| ------------------------------------------------------------------------- | ------ | --------------------------------------------------------- | ----- |
| [`createPrivateNetworkPost`](./`network/createPrivateNetworkPost.ts`)     | POST   | `/publicCloud/project/{...}/network/privateNetwork`       | 1     |
| [`createSubnetPost`](./`network/createSubnetPost.ts`)                     | POST   | `/publicCloud/project/{...}/network/subnet`               | 1     |
| [`deletePrivateNetworkDelete`](./`network/deletePrivateNetworkDelete.ts`) | DELETE | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1     |
| [`deleteSubnetDelete`](./`network/deleteSubnetDelete.ts`)                 | DELETE | `/publicCloud/project/{...}/network/subnet/{...}`         | 1     |
| [`getPrivateNetworkDetailGet`](./`network/getPrivateNetworkDetailGet.ts`) | GET    | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1     |
| [`getSubnetDetailGet`](./`network/getSubnetDetailGet.ts`)                 | GET    | `/publicCloud/project/{...}/network/subnet/{...}`         | 1     |
| [`listPrivateNetworksGet`](./`network/listPrivateNetworksGet.ts`)         | GET    | `/publicCloud/project/{...}/network/privateNetwork`       | 1     |
| [`listPublicNetworksGet`](./`network/listPublicNetworksGet.ts`)           | GET    | `/publicCloud/project/{...}/network/publicNetwork`        | 1     |
| [`listSubnetsGet`](./`network/listSubnetsGet.ts`)                         | GET    | `/publicCloud/project/{...}/network/subnet`               | 1     |
| [`updatePrivateNetworkPut`](./`network/updatePrivateNetworkPut.ts`)       | PUT    | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1     |
| [`updateSubnetPut`](./`network/updateSubnetPut.ts`)                       | PUT    | `/publicCloud/project/{...}/network/subnet/{...}`         | 1     |

### operation

| Operation                                       | Method | Endpoint                                     | Tests |
| ----------------------------------------------- | ------ | -------------------------------------------- | ----- |
| [`getDetailGet`](./`operation/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}/operation/{...}` | 1     |
| [`listGet`](./`operation/listGet.ts`)           | GET    | `/publicCloud/project/{...}/operation`       | 1     |

### project

| Operation                                     | Method | Endpoint                     | Tests |
| --------------------------------------------- | ------ | ---------------------------- | ----- |
| [`getDetailGet`](./`project/getDetailGet.ts`) | GET    | `/publicCloud/project/{...}` | 0     |
| [`listGet`](./`project/listGet.ts`)           | GET    | `...`                        | 0     |

### quantum

| Operation                                                                         | Method | Endpoint                                                       | Tests |
| --------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------- | ----- |
| [`getCapabilitiesDetailGet`](./`quantum/getCapabilitiesDetailGet.ts`)             | GET    | `/publicCloud/project/{...}/quantum/capabilities/{...}`        | 1     |
| [`getCapabilitiesRegionDetailGet`](./`quantum/getCapabilitiesRegionDetailGet.ts`) | GET    | `/publicCloud/project/{...}/quantum/capabilities/region/{...}` | 1     |
| [`listCapabilitiesGet`](./`quantum/listCapabilitiesGet.ts`)                       | GET    | `/publicCloud/project/{...}/quantum/capabilities`              | 1     |
| [`listCapabilitiesRegionGet`](./`quantum/listCapabilitiesRegionGet.ts`)           | GET    | `/publicCloud/project/{...}/quantum/capabilities/region`       | 1     |

### quota

| Operation                         | Method | Endpoint                           | Tests |
| --------------------------------- | ------ | ---------------------------------- | ----- |
| [`listGet`](./`quota/listGet.ts`) | GET    | `/publicCloud/project/{...}/quota` | 1     |

### rancher

| Operation                                                             | Method | Endpoint                                                        | Tests |
| --------------------------------------------------------------------- | ------ | --------------------------------------------------------------- | ----- |
| [`adminCredentials`](./`rancher/adminCredentials.ts`)                 | POST   | `/publicCloud/project/{...}/rancher/{...}/adminCredentials`     | 1     |
| [`eventListGet`](./`rancher/eventListGet.ts`)                         | GET    | `/publicCloud/project/{...}/rancher/{...}/event`                | 0     |
| [`planCapabilityListGet`](./`rancher/planCapabilityListGet.ts`)       | GET    | `/publicCloud/project/{...}/rancher/{...}/capabilities/plan`    | 0     |
| [`serviceCreatePost`](./`rancher/serviceCreatePost.ts`)               | POST   | `/publicCloud/project/{...}/rancher`                            | 1     |
| [`serviceDeleteDelete`](./`rancher/serviceDeleteDelete.ts`)           | DELETE | `/publicCloud/project/{...}/rancher/{...}`                      | 1     |
| [`serviceGet`](./`rancher/serviceGet.ts`)                             | GET    | `/publicCloud/project/{...}/rancher/{...}`                      | 0     |
| [`serviceListGet`](./`rancher/serviceListGet.ts`)                     | GET    | `/publicCloud/project/{...}/rancher`                            | 0     |
| [`serviceUpdatePut`](./`rancher/serviceUpdatePut.ts`)                 | PUT    | `/publicCloud/project/{...}/rancher/{...}`                      | 1     |
| [`taskDetailGet`](./`rancher/taskDetailGet.ts`)                       | GET    | `/publicCloud/project/{...}/rancher/{...}/task/{...}`           | 0     |
| [`taskListGet`](./`rancher/taskListGet.ts`)                           | GET    | `/publicCloud/project/{...}/rancher/{...}/task`                 | 0     |
| [`versionCapabilityListGet`](./`rancher/versionCapabilityListGet.ts`) | GET    | `/publicCloud/project/{...}/rancher/{...}/capabilities/version` | 0     |

### region

| Operation                                                                            | Method | Endpoint                                                             | Tests |
| ------------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------- | ----- |
| [`regionGetGet`](./`region/regionGetGet.ts`)                                         | GET    | `/publicCloud/project/{...}/region/{...}`                            | 1     |
| [`regionListGet`](./`region/regionListGet.ts`)                                       | GET    | `/publicCloud/project/{...}/region`                                  | 1     |
| [`regionShareCreatePost`](./`region/regionShareCreatePost.ts`)                       | POST   | `/publicCloud/project/{...}/region/{...}/share`                      | 1     |
| [`regionShareDeleteDelete`](./`region/regionShareDeleteDelete.ts`)                   | DELETE | `/publicCloud/project/{...}/region/{...}/share/{...}`                | 1     |
| [`regionShareGetGet`](./`region/regionShareGetGet.ts`)                               | GET    | `/publicCloud/project/{...}/region/{...}/share/{...}`                | 1     |
| [`regionShareListGet`](./`region/regionShareListGet.ts`)                             | GET    | `/publicCloud/project/{...}/region/{...}/share`                      | 1     |
| [`regionShareSnapshotCreatePost`](./`region/regionShareSnapshotCreatePost.ts`)       | POST   | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot`       | 1     |
| [`regionShareSnapshotDeleteDelete`](./`region/regionShareSnapshotDeleteDelete.ts`)   | DELETE | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot/{...}` | 1     |
| [`regionShareSnapshotGetGet`](./`region/regionShareSnapshotGetGet.ts`)               | GET    | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot/{...}` | 1     |
| [`regionShareSnapshotListGet`](./`region/regionShareSnapshotListGet.ts`)             | GET    | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot`       | 1     |
| [`regionShareUpdatePut`](./`region/regionShareUpdatePut.ts`)                         | PUT    | `/publicCloud/project/{...}/region/{...}/share/{...}`                | 1     |
| [`regionVolumeCreatePost`](./`region/regionVolumeCreatePost.ts`)                     | POST   | `/publicCloud/project/{...}/region/{...}/volume`                     | 1     |
| [`regionVolumeDeleteDelete`](./`region/regionVolumeDeleteDelete.ts`)                 | DELETE | `/publicCloud/project/{...}/region/{...}/volume/{...}`               | 1     |
| [`regionVolumeGetGet`](./`region/regionVolumeGetGet.ts`)                             | GET    | `/publicCloud/project/{...}/region/{...}/volume/{...}`               | 1     |
| [`regionVolumeListGet`](./`region/regionVolumeListGet.ts`)                           | GET    | `/publicCloud/project/{...}/region/{...}/volume`                     | 1     |
| [`regionVolumeUpdatePut`](./`region/regionVolumeUpdatePut.ts`)                       | PUT    | `/publicCloud/project/{...}/region/{...}/volume/{...}`               | 1     |
| [`regionWorkflowBackupCreatePost`](./`region/regionWorkflowBackupCreatePost.ts`)     | POST   | `/publicCloud/project/{...}/region/{...}/workflow/backup`            | 1     |
| [`regionWorkflowBackupDeleteDelete`](./`region/regionWorkflowBackupDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}`      | 1     |
| [`regionWorkflowBackupGetGet`](./`region/regionWorkflowBackupGetGet.ts`)             | GET    | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}`      | 1     |
| [`regionWorkflowBackupUpdatePut`](./`region/regionWorkflowBackupUpdatePut.ts`)       | PUT    | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}`      | 1     |

### regionAvailable

| Operation                                                                   | Method | Endpoint                                     | Tests |
| --------------------------------------------------------------------------- | ------ | -------------------------------------------- | ----- |
| [`checkRegionAvailableGet`](./`regionAvailable/checkRegionAvailableGet.ts`) | GET    | `/publicCloud/project/{...}/regionAvailable` | 1     |

### retain

| Operation                                | Method | Endpoint                            | Tests |
| ---------------------------------------- | ------ | ----------------------------------- | ----- |
| [`retainPost`](./`retain/retainPost.ts`) | POST   | `/publicCloud/project/{...}/retain` | 1     |

### role

| Operation                        | Method | Endpoint                          | Tests |
| -------------------------------- | ------ | --------------------------------- | ----- |
| [`listGet`](./`role/listGet.ts`) | GET    | `/publicCloud/project/{...}/role` | 1     |

### serviceInfos

| Operation                                                      | Method | Endpoint                                  | Tests |
| -------------------------------------------------------------- | ------ | ----------------------------------------- | ----- |
| [`getServiceInfosGet`](./`serviceInfos/getServiceInfosGet.ts`) | GET    | `/publicCloud/project/{...}/serviceInfos` | 1     |

### snapshot

| Operation                                      | Method | Endpoint                                    | Tests |
| ---------------------------------------------- | ------ | ------------------------------------------- | ----- |
| [`createPost`](./`snapshot/createPost.ts`)     | POST   | `/publicCloud/project/{...}/snapshot`       | 1     |
| [`deleteDelete`](./`snapshot/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/snapshot/{...}` | 1     |
| [`listGet`](./`snapshot/listGet.ts`)           | GET    | `/publicCloud/project/{...}/snapshot`       | 1     |

### sshkey

| Operation                                    | Method | Endpoint                                  | Tests |
| -------------------------------------------- | ------ | ----------------------------------------- | ----- |
| [`createPost`](./`sshkey/createPost.ts`)     | POST   | `/publicCloud/project/{...}/sshkey`       | 1     |
| [`deleteDelete`](./`sshkey/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/sshkey/{...}` | 1     |
| [`listGet`](./`sshkey/listGet.ts`)           | GET    | `/publicCloud/project/{...}/sshkey`       | 1     |

### storage

| Operation                                                       | Method | Endpoint                                                   | Tests |
| --------------------------------------------------------------- | ------ | ---------------------------------------------------------- | ----- |
| [`createContainerPost`](./`storage/createContainerPost.ts`)     | POST   | `/publicCloud/project/{...}/storage/{...}/container`       | 1     |
| [`deleteContainerDelete`](./`storage/deleteContainerDelete.ts`) | DELETE | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1     |
| [`deleteDelete`](./`storage/deleteDelete.ts`)                   | DELETE | `/publicCloud/project/{...}/storage/{...}`                 | 1     |
| [`getContainerDetailGet`](./`storage/getContainerDetailGet.ts`) | GET    | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1     |
| [`getDetailGet`](./`storage/getDetailGet.ts`)                   | GET    | `/publicCloud/project/{...}/storage/{...}`                 | 1     |
| [`listContainersGet`](./`storage/listContainersGet.ts`)         | GET    | `/publicCloud/project/{...}/storage/{...}/container`       | 1     |
| [`listGet`](./`storage/listGet.ts`)                             | GET    | `/publicCloud/project/{...}/storage`                       | 1     |
| [`updateContainerPut`](./`storage/updateContainerPut.ts`)       | PUT    | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1     |
| [`updatePut`](./`storage/updatePut.ts`)                         | PUT    | `/publicCloud/project/{...}/storage/{...}`                 | 1     |

### terminate

| Operation                                         | Method | Endpoint                               | Tests |
| ------------------------------------------------- | ------ | -------------------------------------- | ----- |
| [`terminatePost`](./`terminate/terminatePost.ts`) | POST   | `/publicCloud/project/{...}/terminate` | 1     |

### unleash

| Operation                                   | Method | Endpoint                             | Tests |
| ------------------------------------------- | ------ | ------------------------------------ | ----- |
| [`unleashPost`](./`unleash/unleashPost.ts`) | POST   | `/publicCloud/project/{...}/unleash` | 1     |

### usage

| Operation                                                 | Method | Endpoint                                         | Tests |
| --------------------------------------------------------- | ------ | ------------------------------------------------ | ----- |
| [`getCurrentGet`](./`usage/getCurrentGet.ts`)             | GET    | `/publicCloud/project/{...}/usage/current`       | 1     |
| [`getForecastGet`](./`usage/getForecastGet.ts`)           | GET    | `/publicCloud/project/{...}/usage/forecast`      | 1     |
| [`getHistoryDetailGet`](./`usage/getHistoryDetailGet.ts`) | GET    | `/publicCloud/project/{...}/usage/history/{...}` | 1     |
| [`listHistoryGet`](./`usage/listHistoryGet.ts`)           | GET    | `/publicCloud/project/{...}/usage/history`       | 1     |

### user

| Operation                                                                  | Method | Endpoint                                                     | Tests |
| -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------ | ----- |
| [`createPost`](./`user/createPost.ts`)                                     | POST   | `/publicCloud/project/{...}/user`                            | 1     |
| [`createS3CredentialSecretPost`](./`user/createS3CredentialSecretPost.ts`) | POST   | `/cloud/project/{...}/user/{...}/s3Credentials/{...}/secret` | 1     |
| [`createUserPolicyPost`](./`user/createUserPolicyPost.ts`)                 | POST   | `/cloud/project/{...}/user/{...}/policy`                     | 1     |
| [`createUserRolePost`](./`user/createUserRolePost.ts`)                     | POST   | `/cloud/project/{...}/user/{...}/role`                       | 1     |
| [`createUserS3CredentialsPost`](./`user/createUserS3CredentialsPost.ts`)   | POST   | `/cloud/project/{...}/user/{...}/s3Credentials`              | 1     |
| [`createUserTokenPost`](./`user/createUserTokenPost.ts`)                   | POST   | `/cloud/project/{...}/user/{...}/token`                      | 1     |
| [`deleteDelete`](./`user/deleteDelete.ts`)                                 | DELETE | `/cloud/project/{...}/user/{...}`                            | 1     |
| [`deleteUserRoleDelete`](./`user/deleteUserRoleDelete.ts`)                 | DELETE | `/cloud/project/{...}/user/{...}/role/{...}`                 | 1     |
| [`deleteUserS3CredentialDelete`](./`user/deleteUserS3CredentialDelete.ts`) | DELETE | `/cloud/project/{...}/user/{...}/s3Credentials/{...}`        | 1     |
| [`getDetailGet`](./`user/getDetailGet.ts`)                                 | GET    | `/cloud/project/{...}/user/{...}`                            | 1     |
| [`getUserConfigurationGet`](./`user/getUserConfigurationGet.ts`)           | GET    | `/cloud/project/{...}/user/{...}/configuration`              | 1     |
| [`getUserOpenrcGet`](./`user/getUserOpenrcGet.ts`)                         | GET    | `/cloud/project/{...}/user/{...}/openrc`                     | 1     |
| [`getUserPolicyGet`](./`user/getUserPolicyGet.ts`)                         | GET    | `/cloud/project/{...}/user/{...}/policy`                     | 1     |
| [`getUserRcloneGet`](./`user/getUserRcloneGet.ts`)                         | GET    | `/cloud/project/{...}/user/{...}/rclone`                     | 1     |
| [`getUserRoleDetailGet`](./`user/getUserRoleDetailGet.ts`)                 | GET    | `/cloud/project/{...}/user/{...}/role/{...}`                 | 1     |
| [`getUserRoleGet`](./`user/getUserRoleGet.ts`)                             | GET    | `/cloud/project/{...}/user/{...}/role`                       | 1     |
| [`getUserS3CredentialDetailGet`](./`user/getUserS3CredentialDetailGet.ts`) | GET    | `/cloud/project/{...}/user/{...}/s3Credentials/{...}`        | 1     |
| [`getUserS3CredentialsGet`](./`user/getUserS3CredentialsGet.ts`)           | GET    | `/cloud/project/{...}/user/{...}/s3Credentials`              | 1     |
| [`listGet`](./`user/listGet.ts`)                                           | GET    | `/publicCloud/project/{...}/user`                            | 1     |
| [`regeneratePasswordPost`](./`user/regeneratePasswordPost.ts`)             | POST   | `/cloud/project/{...}/user/{...}/regeneratePassword`         | 1     |
| [`updateUserRolePut`](./`user/updateUserRolePut.ts`)                       | PUT    | `/cloud/project/{...}/user/{...}/role`                       | 1     |

### vrack

| Operation                         | Method | Endpoint                           | Tests |
| --------------------------------- | ------ | ---------------------------------- | ----- |
| [`listGet`](./`vrack/listGet.ts`) | GET    | `/publicCloud/project/{...}/vrack` | 1     |

**Total:** 675 operations, 607 tests
