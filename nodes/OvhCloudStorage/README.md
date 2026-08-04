# OVH Cloud Storage

> Manage NetApp object storage services via /storage/netapp API v1

## Overview

This node provides **47 operations** with **47 tests** for managing OVHcloud NetApp storage services.

## Available Operations

### Network Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`networkGetGet`](./`networkGetGet`.ts) | GET | `/storage/netapp/{...}/network/{...}` | 1 |
| [`networkListGet`](./`networkListGet`.ts) | GET | `/storage/netapp/{...}/network` | 1 |

### Service Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`changeContactPost`](./`changeContactPost`.ts) | POST | `/storage/netapp/{...}/changeContact` | 1 |
| [`confirmTerminationPost`](./`confirmTerminationPost`.ts) | POST | `/storage/netapp/{...}/confirmTermination` | 1 |
| [`metricsTokenGet`](./`metricsTokenGet`.ts) | GET | `/storage/netapp/{...}/metricsToken` | 1 |
| [`serviceGetGet`](./`serviceGetGet`.ts) | GET | `/storage/netapp/{...}` | 1 |
| [`serviceInfosGet`](./`serviceInfosGet`.ts) | GET | `/storage/netapp/{...}/serviceInfos` | 1 |
| [`serviceInfosUpdatePut`](./`serviceInfosUpdatePut`.ts) | PUT | `/storage/netapp/{...}/serviceInfos` | 1 |
| [`serviceListGet`](./`serviceListGet`.ts) | GET | `/storage/netapp` | 1 |
| [`serviceUpdatePut`](./`serviceUpdatePut`.ts) | PUT | `/storage/netapp/{...}` | 1 |
| [`terminatePost`](./`terminatePost`.ts) | POST | `/storage/netapp/{...}/terminate` | 1 |

### Share Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`shareCreatePost`](./`shareCreatePost`.ts) | POST | `/storage/netapp/{...}/share` | 1 |
| [`shareDeleteDelete`](./`shareDeleteDelete`.ts) | DELETE | `/storage/netapp/{...}/share/{...}` | 1 |
| [`shareExtendPost`](./`shareExtendPost`.ts) | POST | `/storage/netapp/{...}/share/{...}/extend` | 1 |
| [`shareGetGet`](./`shareGetGet`.ts) | GET | `/storage/netapp/{...}/share/{...}` | 1 |
| [`shareListGet`](./`shareListGet`.ts) | GET | `/storage/netapp/{...}/share` | 1 |
| [`shareRevertPost`](./`shareRevertPost`.ts) | POST | `/storage/netapp/{...}/share/{...}/revert` | 1 |
| [`shareShrinkPost`](./`shareShrinkPost`.ts) | POST | `/storage/netapp/{...}/share/{...}/shrink` | 1 |
| [`shareUpdatePut`](./`shareUpdatePut`.ts) | PUT | `/storage/netapp/{...}/share/{...}` | 1 |

### Share Replication Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`shareReplicationAcceptPost`](./`shareReplicationAcceptPost`.ts) | POST | `/storage/netapp/{...}/shareReplication/{...}/accept` | 1 |
| [`shareReplicationCreatePost`](./`shareReplicationCreatePost`.ts) | POST | `/storage/netapp/{...}/shareReplication` | 1 |
| [`shareReplicationCutoverPost`](./`shareReplicationCutoverPost`.ts) | POST | `/storage/netapp/{...}/shareReplication/{...}/cutover` | 1 |
| [`shareReplicationDeleteDelete`](./`shareReplicationDeleteDelete`.ts) | DELETE | `/storage/netapp/{...}/shareReplication/{...}` | 1 |
| [`shareReplicationGetGet`](./`shareReplicationGetGet`.ts) | GET | `/storage/netapp/{...}/shareReplication/{...}` | 1 |
| [`shareReplicationListGet`](./`shareReplicationListGet`.ts) | GET | `/storage/netapp/{...}/shareReplication` | 1 |
| [`shareReplicationServicesCompatibilityGet`](./`shareReplicationServicesCompatibilityGet`.ts) | GET | `/storage/netapp/{...}/shareReplicationServicesCompatibility` | 1 |

### Snapshot Policy Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`snapshotPolicyCreatePost`](./`snapshotPolicyCreatePost`.ts) | POST | `/storage/netapp/{...}/snapshotPolicy` | 1 |
| [`snapshotPolicyDeleteDelete`](./`snapshotPolicyDeleteDelete`.ts) | DELETE | `/storage/netapp/{...}/snapshotPolicy/{...}` | 1 |
| [`snapshotPolicyGetGet`](./`snapshotPolicyGetGet`.ts) | GET | `/storage/netapp/{...}/snapshotPolicy/{...}` | 1 |
| [`snapshotPolicyListGet`](./`snapshotPolicyListGet`.ts) | GET | `/storage/netapp/{...}/snapshotPolicy` | 1 |
| [`snapshotPolicyUpdatePut`](./`snapshotPolicyUpdatePut`.ts) | PUT | `/storage/netapp/{...}/snapshotPolicy/{...}` | 1 |

### Share Access Path Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`accessPathGetGet`](./`accessPathGetGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/accessPath/{...}` | 1 |
| [`accessPathListGet`](./`accessPathListGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/accessPath` | 1 |

### Share ACL Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`aclCreatePost`](./`aclCreatePost`.ts) | POST | `/storage/netapp/{...}/share/{...}/acl` | 1 |
| [`aclDeleteDelete`](./`aclDeleteDelete`.ts) | DELETE | `/storage/netapp/{...}/share/{...}/acl/{...}` | 1 |
| [`aclGetGet`](./`aclGetGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/acl/{...}` | 1 |
| [`aclListGet`](./`aclListGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/acl` | 1 |

### Share Snapshot Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`shareSnapshotPolicyGet`](./`shareSnapshotPolicyGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/snapshotPolicy` | 1 |
| [`shareSnapshotPolicyUpdatePut`](./`shareSnapshotPolicyUpdatePut`.ts) | PUT | `/storage/netapp/{...}/share/{...}/snapshotPolicy` | 1 |
| [`shareSnapshotReserveGet`](./`shareSnapshotReserveGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/snapshotReserve` | 1 |
| [`shareSnapshotReserveUpdatePut`](./`shareSnapshotReserveUpdatePut`.ts) | PUT | `/storage/netapp/{...}/share/{...}/snapshotReserve` | 1 |
| [`snapshotCreatePost`](./`snapshotCreatePost`.ts) | POST | `/storage/netapp/{...}/share/{...}/snapshot` | 1 |
| [`snapshotDeleteDelete`](./`snapshotDeleteDelete`.ts) | DELETE | `/storage/netapp/{...}/share/{...}/snapshot/{...}` | 1 |
| [`snapshotGetGet`](./`snapshotGetGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/snapshot/{...}` | 1 |
| [`snapshotHoldPost`](./`snapshotHoldPost`.ts) | POST | `/storage/netapp/{...}/share/{...}/snapshot/{...}/hold` | 1 |
| [`snapshotListGet`](./`snapshotListGet`.ts) | GET | `/storage/netapp/{...}/share/{...}/snapshot` | 1 |
| [`snapshotUpdatePut`](./`snapshotUpdatePut`.ts) | PUT | `/storage/netapp/{...}/share/{...}/snapshot/{...}` | 1 |

**Total:** 47 operations, 47 tests
