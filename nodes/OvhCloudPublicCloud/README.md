# OVH Cloud Public Cloud

> Manage public cloud projects, Kubernetes, instances, regions, databases (14 engines), block storage, Rancher

## Overview

This node provides **675 operations** with **607 tests** for managing OVHcloud resources.

## Available Operations

### acl

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`acl/createPost.ts`) | POST | `/publicCloud/project/{...}/acl` | 1 |
| [`deleteDelete`](./`acl/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/acl/{...}` | 1 |
| [`listGet`](./`acl/listGet.ts`) | GET | `/publicCloud/project/{...}/acl` | 1 |

### activateMonthlyBilling

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`activateMonthlyBillingPost`](./`activateMonthlyBilling/activateMonthlyBillingPost.ts`) | POST | `/publicCloud/project/{...}/activateMonthlyBilling` | 1 |

### alerting

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`alerting/createPost.ts`) | POST | `/publicCloud/project/{...}/alerting` | 1 |
| [`deleteDelete`](./`alerting/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/alerting/{...}` | 1 |
| [`getDetailGet`](./`alerting/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/alerting/{...}` | 1 |
| [`listGet`](./`alerting/listGet.ts`) | GET | `/publicCloud/project/{...}/alerting` | 1 |
| [`updatePut`](./`alerting/updatePut.ts`) | PUT | `/publicCloud/project/{...}/alerting/{...}` | 1 |

### bill

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`listGet`](./`bill/listGet.ts`) | GET | `/publicCloud/project/{...}/bill` | 1 |

### blockstorage

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`backupCreatePost`](./`blockstorage/backupCreatePost.ts`) | POST | `/publicCloud/project/{...}/blockStorage/backup` | 0 |
| [`backupDeleteDelete`](./`blockstorage/backupDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/blockStorage/backup/{...}` | 0 |
| [`backupGet`](./`blockstorage/backupGet.ts`) | GET | `/publicCloud/project/{...}/blockStorage/backup/{...}` | 0 |
| [`backupListGet`](./`blockstorage/backupListGet.ts`) | GET | `...` | 0 |
| [`backupRetentionDailySetPost`](./`blockstorage/backupRetentionDailySetPost.ts`) | POST | `/publicCloud/project/{...}/blockStorage/backup/{...}/retention/daily/set` | 0 |
| [`backupUpdatePut`](./`blockstorage/backupUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/blockStorage/backup/{...}` | 0 |
| [`snapshotCreatePost`](./`blockstorage/snapshotCreatePost.ts`) | POST | `/publicCloud/project/{...}/blockStorage/snapshot` | 0 |
| [`snapshotDeleteDelete`](./`blockstorage/snapshotDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/blockStorage/snapshot/{...}` | 0 |
| [`snapshotGet`](./`blockstorage/snapshotGet.ts`) | GET | `/publicCloud/project/{...}/blockStorage/snapshot/{...}` | 0 |
| [`snapshotListGet`](./`blockstorage/snapshotListGet.ts`) | GET | `...` | 0 |
| [`snapshotUpdatePut`](./`blockstorage/snapshotUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/blockStorage/snapshot/{...}` | 0 |
| [`volumeBackupReferenceListGet`](./`blockstorage/volumeBackupReferenceListGet.ts`) | GET | `/publicCloud/project/{...}/blockStorage/volume/{...}/backupReferences` | 0 |
| [`volumeCapabilitiesListGet`](./`blockstorage/volumeCapabilitiesListGet.ts`) | GET | `...` | 0 |
| [`volumeCapabilityListGetByRegionNameGet`](./`blockstorage/volumeCapabilityListGetByRegionNameGet.ts`) | GET | `...` | 0 |
| [`volumeCreatePost`](./`blockstorage/volumeCreatePost.ts`) | POST | `/publicCloud/project/{...}/blockStorage/volume` | 0 |
| [`volumeDeleteDelete`](./`blockstorage/volumeDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/blockStorage/volume/{...}` | 0 |
| [`volumeGet`](./`blockstorage/volumeGet.ts`) | GET | `/publicCloud/project/{...}/blockStorage/volume/{...}` | 0 |
| [`volumeListGet`](./`blockstorage/volumeListGet.ts`) | GET | `/publicCloud/project/{...}/blockStorage/volume` | 0 |
| [`volumeMonitoringStatsGet`](./`blockstorage/volumeMonitoringStatsGet.ts`) | GET | `...` | 0 |
| [`volumePlanCapabilityListGetByRegionNameGet`](./`blockstorage/volumePlanCapabilityListGetByRegionNameGet.ts`) | GET | `...` | 0 |
| [`volumeUpdatePut`](./`blockstorage/volumeUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/blockStorage/volume/{...}` | 0 |

### cancel

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`cancelPost`](./`cancel/cancelPost.ts`) | POST | `/publicCloud/project/{...}/cancel` | 1 |

### capabilities

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getKubeDetailGet`](./`capabilities/getKubeDetailGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/kube/{...}` | 1 |
| [`getLoadbalancerDetailGet`](./`capabilities/getLoadbalancerDetailGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/loadbalancer/{...}` | 1 |
| [`getRegionDetailGet`](./`capabilities/getRegionDetailGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/region/{...}` | 1 |
| [`getRegionProductDetailGet`](./`capabilities/getRegionProductDetailGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/region/{...}/{...}` | 1 |
| [`listGet`](./`capabilities/listGet.ts`) | GET | `/publicCloud/project/{...}/capabilities` | 1 |
| [`listKubeGet`](./`capabilities/listKubeGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/kube` | 1 |
| [`listLoadbalancerGet`](./`capabilities/listLoadbalancerGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/loadbalancer` | 1 |
| [`listRegionGet`](./`capabilities/listRegionGet.ts`) | GET | `/publicCloud/project/{...}/capabilities/region` | 1 |

### changeContact

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`changeContactPost`](./`changeContact/changeContactPost.ts`) | POST | `/publicCloud/project/{...}/changeContact` | 1 |

### confirmTermination

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`confirmTerminationPost`](./`confirmTermination/confirmTerminationPost.ts`) | POST | `/publicCloud/project/{...}/confirmTermination` | 1 |

### containerRegistry

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`containerRegistry/createPost.ts`) | POST | `/publicCloud/project/{...}/containerRegistry` | 1 |
| [`createUserPost`](./`containerRegistry/createUserPost.ts`) | POST | `/publicCloud/project/{...}/containerRegistry/{...}/user` | 1 |
| [`deleteDelete`](./`containerRegistry/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/containerRegistry/{...}` | 1 |
| [`deleteUserDelete`](./`containerRegistry/deleteUserDelete.ts`) | DELETE | `/publicCloud/project/{...}/containerRegistry/{...}/user/{...}` | 1 |
| [`getDetailGet`](./`containerRegistry/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/containerRegistry/{...}` | 1 |
| [`getUserDetailGet`](./`containerRegistry/getUserDetailGet.ts`) | GET | `/publicCloud/project/{...}/containerRegistry/{...}/user/{...}` | 1 |
| [`listGet`](./`containerRegistry/listGet.ts`) | GET | `/publicCloud/project/{...}/containerRegistry` | 1 |
| [`listUsersGet`](./`containerRegistry/listUsersGet.ts`) | GET | `/publicCloud/project/{...}/containerRegistry/{...}/user` | 1 |
| [`updatePut`](./`containerRegistry/updatePut.ts`) | PUT | `/publicCloud/project/{...}/containerRegistry/{...}` | 1 |

### credit

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getDetailGet`](./`credit/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/credit/{...}` | 1 |
| [`listGet`](./`credit/listGet.ts`) | GET | `/publicCloud/project/{...}/credit` | 1 |

### database

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|

### flavor

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getDetailGet`](./`flavor/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/flavor/{...}` | 1 |
| [`listGet`](./`flavor/listGet.ts`) | GET | `/publicCloud/project/{...}/flavor` | 1 |

### image

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getDetailGet`](./`image/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/image/{...}` | 1 |
| [`listGet`](./`image/listGet.ts`) | GET | `/publicCloud/project/{...}/image` | 1 |

### instance

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`instanceActiveMonthlyBillingPost`](./`instance/instanceActiveMonthlyBillingPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/activeMonthlyBilling` | 1 |
| [`instanceApplicationAccessPost`](./`instance/instanceApplicationAccessPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/applicationAccess` | 1 |
| [`instanceBulkPost`](./`instance/instanceBulkPost.ts`) | POST | `/publicCloud/project/{...}/instance/bulk` | 1 |
| [`instanceCreatePost`](./`instance/instanceCreatePost.ts`) | POST | `/publicCloud/project/{...}/instance` | 1 |
| [`instanceDeleteDelete`](./`instance/instanceDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/instance/{...}` | 1 |
| [`instanceGetGet`](./`instance/instanceGetGet.ts`) | GET | `/publicCloud/project/{...}/instance/{...}` | 1 |
| [`instanceGroupCreatePost`](./`instance/instanceGroupCreatePost.ts`) | POST | `/publicCloud/project/{...}/instance/group` | 1 |
| [`instanceGroupDeleteDelete`](./`instance/instanceGroupDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/instance/group/{...}` | 1 |
| [`instanceGroupGetGet`](./`instance/instanceGroupGetGet.ts`) | GET | `/publicCloud/project/{...}/instance/group/{...}` | 1 |
| [`instanceGroupListGet`](./`instance/instanceGroupListGet.ts`) | GET | `/publicCloud/project/{...}/instance/group` | 1 |
| [`instanceInterfaceCreatePost`](./`instance/instanceInterfaceCreatePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/interface` | 1 |
| [`instanceInterfaceDeleteDelete`](./`instance/instanceInterfaceDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/instance/{...}/interface/{...}` | 1 |
| [`instanceInterfaceGetGet`](./`instance/instanceInterfaceGetGet.ts`) | GET | `/publicCloud/project/{...}/instance/{...}/interface/{...}` | 1 |
| [`instanceInterfaceListGet`](./`instance/instanceInterfaceListGet.ts`) | GET | `/publicCloud/project/{...}/instance/{...}/interface` | 1 |
| [`instanceListGet`](./`instance/instanceListGet.ts`) | GET | `/publicCloud/project/{...}/instance` | 1 |
| [`instanceRebootPost`](./`instance/instanceRebootPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/reboot` | 1 |
| [`instanceReinstallPost`](./`instance/instanceReinstallPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/reinstall` | 1 |
| [`instanceRescueModePost`](./`instance/instanceRescueModePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/rescueMode` | 1 |
| [`instanceResizePost`](./`instance/instanceResizePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/resize` | 1 |
| [`instanceResumePost`](./`instance/instanceResumePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/resume` | 1 |
| [`instanceShelvePost`](./`instance/instanceShelvePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/shelve` | 1 |
| [`instanceSnapshotPost`](./`instance/instanceSnapshotPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/snapshot` | 1 |
| [`instanceStartPost`](./`instance/instanceStartPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/start` | 1 |
| [`instanceStopPost`](./`instance/instanceStopPost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/stop` | 1 |
| [`instanceUnshelvePost`](./`instance/instanceUnshelvePost.ts`) | POST | `/publicCloud/project/{...}/instance/{...}/unshelve` | 1 |
| [`instanceUpdatePut`](./`instance/instanceUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/instance/{...}` | 1 |
| [`instanceVncGet`](./`instance/instanceVncGet.ts`) | GET | `/publicCloud/project/{...}/instance/{...}/vnc` | 1 |

### ip

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`ip/createPost.ts`) | POST | `/publicCloud/project/{...}/ip` | 1 |
| [`deleteDelete`](./`ip/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/ip/{...}` | 1 |
| [`getDetailGet`](./`ip/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/ip/{...}` | 1 |
| [`listGet`](./`ip/listGet.ts`) | GET | `/publicCloud/project/{...}/ip` | 1 |
| [`updatePut`](./`ip/updatePut.ts`) | PUT | `/publicCloud/project/{...}/ip/{...}` | 1 |

### kube

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`kubeAuditLogsPost`](./`kube/kubeAuditLogsPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/auditLogs` | 0 |
| [`kubeCustomizationGet`](./`kube/kubeCustomizationGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/customization` | 0 |
| [`kubeCustomizationUpdatePut`](./`kube/kubeCustomizationUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/customization` | 0 |
| [`kubeDeleteDelete`](./`kube/kubeDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}` | 0 |
| [`kubeFlavorsGet`](./`kube/kubeFlavorsGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/flavors` | 0 |
| [`kubeGetGet`](./`kube/kubeGetGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}` | 0 |
| [`kubeIpRestrictionsDeleteDelete`](./`kube/kubeIpRestrictionsDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}/ipRestrictions/{...}` | 0 |
| [`kubeIpRestrictionsGet`](./`kube/kubeIpRestrictionsGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/ipRestrictions` | 0 |
| [`kubeIpRestrictionsPost`](./`kube/kubeIpRestrictionsPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/ipRestrictions` | 0 |
| [`kubeIpRestrictionsUpdatePut`](./`kube/kubeIpRestrictionsUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/ipRestrictions` | 0 |
| [`kubeKubeconfigPost`](./`kube/kubeKubeconfigPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/kubeconfig` | 0 |
| [`kubeKubeconfigResetPost`](./`kube/kubeKubeconfigResetPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/kubeconfig/reset` | 0 |
| [`kubeListGet`](./`kube/kubeListGet.ts`) | GET | `/cloud/project/{...}/kube` | 0 |
| [`kubeLogSubscriptionDeleteDelete`](./`kube/kubeLogSubscriptionDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}/log/subscription/{...}` | 0 |
| [`kubeLogSubscriptionGet`](./`kube/kubeLogSubscriptionGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/log/subscription/{...}` | 0 |
| [`kubeLogSubscriptionPost`](./`kube/kubeLogSubscriptionPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/log/subscription` | 0 |
| [`kubeLogUrlPost`](./`kube/kubeLogUrlPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/log/url` | 0 |
| [`kubeMetricsEtcdUsageGet`](./`kube/kubeMetricsEtcdUsageGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/metrics/etcdUsage` | 0 |
| [`kubeNodeDeleteDelete`](./`kube/kubeNodeDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}/node/{...}` | 0 |
| [`kubeNodeGet`](./`kube/kubeNodeGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/node/{...}` | 0 |
| [`kubeNodeListGet`](./`kube/kubeNodeListGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/node` | 0 |
| [`kubeNodepoolCreatePost`](./`kube/kubeNodepoolCreatePost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/nodepool` | 0 |
| [`kubeNodepoolDeleteDelete`](./`kube/kubeNodepoolDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}/nodepool/{...}` | 0 |
| [`kubeNodepoolGetGet`](./`kube/kubeNodepoolGetGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/nodepool/{...}` | 0 |
| [`kubeNodepoolListNodepoolNodesGet`](./`kube/kubeNodepoolListNodepoolNodesGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/nodepool/{...}/nodes` | 0 |
| [`kubeNodepoolUpdatePut`](./`kube/kubeNodepoolUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/nodepool/{...}` | 0 |
| [`kubeOpenIdConnectDeleteDelete`](./`kube/kubeOpenIdConnectDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/kube/{...}/openIdConnect` | 0 |
| [`kubeOpenIdConnectGet`](./`kube/kubeOpenIdConnectGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/openIdConnect` | 0 |
| [`kubeOpenIdConnectPost`](./`kube/kubeOpenIdConnectPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/openIdConnect` | 0 |
| [`kubeOpenIdConnectUpdatePut`](./`kube/kubeOpenIdConnectUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/openIdConnect` | 0 |
| [`kubePrivateNetworkConfigurationGet`](./`kube/kubePrivateNetworkConfigurationGet.ts`) | GET | `/publicCloud/project/{...}/kube/{...}/privateNetworkConfiguration` | 0 |
| [`kubePrivateNetworkConfigurationUpdatePut`](./`kube/kubePrivateNetworkConfigurationUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/privateNetworkConfiguration` | 0 |
| [`kubeResetPost`](./`kube/kubeResetPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/reset` | 0 |
| [`kubeRestartPost`](./`kube/kubeRestartPost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/restart` | 0 |
| [`kubeUpdateLoadBalancersSubnetIdUpdatePut`](./`kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/updateLoadBalancersSubnetId` | 0 |
| [`kubeUpdatePolicyUpdatePut`](./`kube/kubeUpdatePolicyUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}/updatePolicy` | 0 |
| [`kubeUpdatePost`](./`kube/kubeUpdatePost.ts`) | POST | `/publicCloud/project/{...}/kube/{...}/update` | 0 |
| [`kubeUpdatePut`](./`kube/kubeUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/kube/{...}` | 0 |

### lab

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`lab/createPost.ts`) | POST | `/publicCloud/project/{...}/lab` | 1 |
| [`deleteDelete`](./`lab/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/lab/{...}` | 1 |
| [`getDetailGet`](./`lab/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/lab/{...}` | 1 |
| [`listGet`](./`lab/listGet.ts`) | GET | `/publicCloud/project/{...}/lab` | 1 |
| [`updatePut`](./`lab/updatePut.ts`) | PUT | `/publicCloud/project/{...}/lab/{...}` | 1 |

### loadbalancer

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`loadbalancer/createPost.ts`) | POST | `/publicCloud/project/{...}/loadbalancer` | 1 |
| [`deleteDelete`](./`loadbalancer/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/loadbalancer/{...}` | 1 |
| [`getDetailGet`](./`loadbalancer/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/loadbalancer/{...}` | 1 |
| [`listGet`](./`loadbalancer/listGet.ts`) | GET | `/publicCloud/project/{...}/loadbalancer` | 1 |
| [`updatePut`](./`loadbalancer/updatePut.ts`) | PUT | `/publicCloud/project/{...}/loadbalancer/{...}` | 1 |

### network

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPrivateNetworkPost`](./`network/createPrivateNetworkPost.ts`) | POST | `/publicCloud/project/{...}/network/privateNetwork` | 1 |
| [`createSubnetPost`](./`network/createSubnetPost.ts`) | POST | `/publicCloud/project/{...}/network/subnet` | 1 |
| [`deletePrivateNetworkDelete`](./`network/deletePrivateNetworkDelete.ts`) | DELETE | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1 |
| [`deleteSubnetDelete`](./`network/deleteSubnetDelete.ts`) | DELETE | `/publicCloud/project/{...}/network/subnet/{...}` | 1 |
| [`getPrivateNetworkDetailGet`](./`network/getPrivateNetworkDetailGet.ts`) | GET | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1 |
| [`getSubnetDetailGet`](./`network/getSubnetDetailGet.ts`) | GET | `/publicCloud/project/{...}/network/subnet/{...}` | 1 |
| [`listPrivateNetworksGet`](./`network/listPrivateNetworksGet.ts`) | GET | `/publicCloud/project/{...}/network/privateNetwork` | 1 |
| [`listPublicNetworksGet`](./`network/listPublicNetworksGet.ts`) | GET | `/publicCloud/project/{...}/network/publicNetwork` | 1 |
| [`listSubnetsGet`](./`network/listSubnetsGet.ts`) | GET | `/publicCloud/project/{...}/network/subnet` | 1 |
| [`updatePrivateNetworkPut`](./`network/updatePrivateNetworkPut.ts`) | PUT | `/publicCloud/project/{...}/network/privateNetwork/{...}` | 1 |
| [`updateSubnetPut`](./`network/updateSubnetPut.ts`) | PUT | `/publicCloud/project/{...}/network/subnet/{...}` | 1 |

### operation

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getDetailGet`](./`operation/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/operation/{...}` | 1 |
| [`listGet`](./`operation/listGet.ts`) | GET | `/publicCloud/project/{...}/operation` | 1 |

### project

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getDetailGet`](./`project/getDetailGet.ts`) | GET | `/publicCloud/project/{...}` | 0 |
| [`listGet`](./`project/listGet.ts`) | GET | `...` | 0 |

### quantum

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getCapabilitiesDetailGet`](./`quantum/getCapabilitiesDetailGet.ts`) | GET | `/publicCloud/project/{...}/quantum/capabilities/{...}` | 1 |
| [`getCapabilitiesRegionDetailGet`](./`quantum/getCapabilitiesRegionDetailGet.ts`) | GET | `/publicCloud/project/{...}/quantum/capabilities/region/{...}` | 1 |
| [`listCapabilitiesGet`](./`quantum/listCapabilitiesGet.ts`) | GET | `/publicCloud/project/{...}/quantum/capabilities` | 1 |
| [`listCapabilitiesRegionGet`](./`quantum/listCapabilitiesRegionGet.ts`) | GET | `/publicCloud/project/{...}/quantum/capabilities/region` | 1 |

### quota

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`listGet`](./`quota/listGet.ts`) | GET | `/publicCloud/project/{...}/quota` | 1 |

### rancher

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`adminCredentials`](./`rancher/adminCredentials.ts`) | POST | `/publicCloud/project/{...}/rancher/{...}/adminCredentials` | 1 |
| [`eventListGet`](./`rancher/eventListGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}/event` | 0 |
| [`planCapabilityListGet`](./`rancher/planCapabilityListGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}/capabilities/plan` | 0 |
| [`serviceCreatePost`](./`rancher/serviceCreatePost.ts`) | POST | `/publicCloud/project/{...}/rancher` | 1 |
| [`serviceDeleteDelete`](./`rancher/serviceDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/rancher/{...}` | 1 |
| [`serviceGet`](./`rancher/serviceGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}` | 0 |
| [`serviceListGet`](./`rancher/serviceListGet.ts`) | GET | `/publicCloud/project/{...}/rancher` | 0 |
| [`serviceUpdatePut`](./`rancher/serviceUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/rancher/{...}` | 1 |
| [`taskDetailGet`](./`rancher/taskDetailGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}/task/{...}` | 0 |
| [`taskListGet`](./`rancher/taskListGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}/task` | 0 |
| [`versionCapabilityListGet`](./`rancher/versionCapabilityListGet.ts`) | GET | `/publicCloud/project/{...}/rancher/{...}/capabilities/version` | 0 |

### region

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`regionGetGet`](./`region/regionGetGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}` | 1 |
| [`regionListGet`](./`region/regionListGet.ts`) | GET | `/publicCloud/project/{...}/region` | 1 |
| [`regionShareCreatePost`](./`region/regionShareCreatePost.ts`) | POST | `/publicCloud/project/{...}/region/{...}/share` | 1 |
| [`regionShareDeleteDelete`](./`region/regionShareDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/region/{...}/share/{...}` | 1 |
| [`regionShareGetGet`](./`region/regionShareGetGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/share/{...}` | 1 |
| [`regionShareListGet`](./`region/regionShareListGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/share` | 1 |
| [`regionShareSnapshotCreatePost`](./`region/regionShareSnapshotCreatePost.ts`) | POST | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot` | 1 |
| [`regionShareSnapshotDeleteDelete`](./`region/regionShareSnapshotDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot/{...}` | 1 |
| [`regionShareSnapshotGetGet`](./`region/regionShareSnapshotGetGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot/{...}` | 1 |
| [`regionShareSnapshotListGet`](./`region/regionShareSnapshotListGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/share/{...}/snapshot` | 1 |
| [`regionShareUpdatePut`](./`region/regionShareUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/region/{...}/share/{...}` | 1 |
| [`regionVolumeCreatePost`](./`region/regionVolumeCreatePost.ts`) | POST | `/publicCloud/project/{...}/region/{...}/volume` | 1 |
| [`regionVolumeDeleteDelete`](./`region/regionVolumeDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/region/{...}/volume/{...}` | 1 |
| [`regionVolumeGetGet`](./`region/regionVolumeGetGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/volume/{...}` | 1 |
| [`regionVolumeListGet`](./`region/regionVolumeListGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/volume` | 1 |
| [`regionVolumeUpdatePut`](./`region/regionVolumeUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/region/{...}/volume/{...}` | 1 |
| [`regionWorkflowBackupCreatePost`](./`region/regionWorkflowBackupCreatePost.ts`) | POST | `/publicCloud/project/{...}/region/{...}/workflow/backup` | 1 |
| [`regionWorkflowBackupDeleteDelete`](./`region/regionWorkflowBackupDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}` | 1 |
| [`regionWorkflowBackupGetGet`](./`region/regionWorkflowBackupGetGet.ts`) | GET | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}` | 1 |
| [`regionWorkflowBackupUpdatePut`](./`region/regionWorkflowBackupUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/region/{...}/workflow/backup/{...}` | 1 |

### regionAvailable

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`checkRegionAvailableGet`](./`regionAvailable/checkRegionAvailableGet.ts`) | GET | `/publicCloud/project/{...}/regionAvailable` | 1 |

### retain

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`retainPost`](./`retain/retainPost.ts`) | POST | `/publicCloud/project/{...}/retain` | 1 |

### role

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`listGet`](./`role/listGet.ts`) | GET | `/publicCloud/project/{...}/role` | 1 |

### serviceInfos

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getServiceInfosGet`](./`serviceInfos/getServiceInfosGet.ts`) | GET | `/publicCloud/project/{...}/serviceInfos` | 1 |

### snapshot

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`snapshot/createPost.ts`) | POST | `/publicCloud/project/{...}/snapshot` | 1 |
| [`deleteDelete`](./`snapshot/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/snapshot/{...}` | 1 |
| [`listGet`](./`snapshot/listGet.ts`) | GET | `/publicCloud/project/{...}/snapshot` | 1 |

### sshkey

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`sshkey/createPost.ts`) | POST | `/publicCloud/project/{...}/sshkey` | 1 |
| [`deleteDelete`](./`sshkey/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/sshkey/{...}` | 1 |
| [`listGet`](./`sshkey/listGet.ts`) | GET | `/publicCloud/project/{...}/sshkey` | 1 |

### storage

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createContainerPost`](./`storage/createContainerPost.ts`) | POST | `/publicCloud/project/{...}/storage/{...}/container` | 1 |
| [`deleteContainerDelete`](./`storage/deleteContainerDelete.ts`) | DELETE | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1 |
| [`deleteDelete`](./`storage/deleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/storage/{...}` | 1 |
| [`getContainerDetailGet`](./`storage/getContainerDetailGet.ts`) | GET | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1 |
| [`getDetailGet`](./`storage/getDetailGet.ts`) | GET | `/publicCloud/project/{...}/storage/{...}` | 1 |
| [`listContainersGet`](./`storage/listContainersGet.ts`) | GET | `/publicCloud/project/{...}/storage/{...}/container` | 1 |
| [`listGet`](./`storage/listGet.ts`) | GET | `/publicCloud/project/{...}/storage` | 1 |
| [`updateContainerPut`](./`storage/updateContainerPut.ts`) | PUT | `/publicCloud/project/{...}/storage/{...}/container/{...}` | 1 |
| [`updatePut`](./`storage/updatePut.ts`) | PUT | `/publicCloud/project/{...}/storage/{...}` | 1 |

### terminate

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`terminatePost`](./`terminate/terminatePost.ts`) | POST | `/publicCloud/project/{...}/terminate` | 1 |

### unleash

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`unleashPost`](./`unleash/unleashPost.ts`) | POST | `/publicCloud/project/{...}/unleash` | 1 |

### usage

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getCurrentGet`](./`usage/getCurrentGet.ts`) | GET | `/publicCloud/project/{...}/usage/current` | 1 |
| [`getForecastGet`](./`usage/getForecastGet.ts`) | GET | `/publicCloud/project/{...}/usage/forecast` | 1 |
| [`getHistoryDetailGet`](./`usage/getHistoryDetailGet.ts`) | GET | `/publicCloud/project/{...}/usage/history/{...}` | 1 |
| [`listHistoryGet`](./`usage/listHistoryGet.ts`) | GET | `/publicCloud/project/{...}/usage/history` | 1 |

### user

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`user/createPost.ts`) | POST | `/publicCloud/project/{...}/user` | 1 |
| [`createS3CredentialSecretPost`](./`user/createS3CredentialSecretPost.ts`) | POST | `/cloud/project/{...}/user/{...}/s3Credentials/{...}/secret` | 1 |
| [`createUserPolicyPost`](./`user/createUserPolicyPost.ts`) | POST | `/cloud/project/{...}/user/{...}/policy` | 1 |
| [`createUserRolePost`](./`user/createUserRolePost.ts`) | POST | `/cloud/project/{...}/user/{...}/role` | 1 |
| [`createUserS3CredentialsPost`](./`user/createUserS3CredentialsPost.ts`) | POST | `/cloud/project/{...}/user/{...}/s3Credentials` | 1 |
| [`createUserTokenPost`](./`user/createUserTokenPost.ts`) | POST | `/cloud/project/{...}/user/{...}/token` | 1 |
| [`deleteDelete`](./`user/deleteDelete.ts`) | DELETE | `/cloud/project/{...}/user/{...}` | 1 |
| [`deleteUserRoleDelete`](./`user/deleteUserRoleDelete.ts`) | DELETE | `/cloud/project/{...}/user/{...}/role/{...}` | 1 |
| [`deleteUserS3CredentialDelete`](./`user/deleteUserS3CredentialDelete.ts`) | DELETE | `/cloud/project/{...}/user/{...}/s3Credentials/{...}` | 1 |
| [`getDetailGet`](./`user/getDetailGet.ts`) | GET | `/cloud/project/{...}/user/{...}` | 1 |
| [`getUserConfigurationGet`](./`user/getUserConfigurationGet.ts`) | GET | `/cloud/project/{...}/user/{...}/configuration` | 1 |
| [`getUserOpenrcGet`](./`user/getUserOpenrcGet.ts`) | GET | `/cloud/project/{...}/user/{...}/openrc` | 1 |
| [`getUserPolicyGet`](./`user/getUserPolicyGet.ts`) | GET | `/cloud/project/{...}/user/{...}/policy` | 1 |
| [`getUserRcloneGet`](./`user/getUserRcloneGet.ts`) | GET | `/cloud/project/{...}/user/{...}/rclone` | 1 |
| [`getUserRoleDetailGet`](./`user/getUserRoleDetailGet.ts`) | GET | `/cloud/project/{...}/user/{...}/role/{...}` | 1 |
| [`getUserRoleGet`](./`user/getUserRoleGet.ts`) | GET | `/cloud/project/{...}/user/{...}/role` | 1 |
| [`getUserS3CredentialDetailGet`](./`user/getUserS3CredentialDetailGet.ts`) | GET | `/cloud/project/{...}/user/{...}/s3Credentials/{...}` | 1 |
| [`getUserS3CredentialsGet`](./`user/getUserS3CredentialsGet.ts`) | GET | `/cloud/project/{...}/user/{...}/s3Credentials` | 1 |
| [`listGet`](./`user/listGet.ts`) | GET | `/publicCloud/project/{...}/user` | 1 |
| [`regeneratePasswordPost`](./`user/regeneratePasswordPost.ts`) | POST | `/cloud/project/{...}/user/{...}/regeneratePassword` | 1 |
| [`updateUserRolePut`](./`user/updateUserRolePut.ts`) | PUT | `/cloud/project/{...}/user/{...}/role` | 1 |

### vrack

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`listGet`](./`vrack/listGet.ts`) | GET | `/publicCloud/project/{...}/vrack` | 1 |

**Total:** 675 operations, 607 tests
