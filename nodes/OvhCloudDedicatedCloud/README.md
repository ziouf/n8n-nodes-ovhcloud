# OVH Cloud Dedicated Cloud

> Manage dedicated cloud services via /dedicatedCloud API v1

## Overview

This node provides operations for managing OVHcloud resources, covering **100% des 305 endpoints** de la spec `/dedicatedCloud` v1 (Phase 1 à 4e).

## Available Operations

### Root Operations

| Operation                       | Method | Endpoint                                                        | Tests |
| ------------------------------- | ------ | --------------------------------------------------------------- | ----- |
| `commercialRangeGet`            | GET    | `/dedicatedCloud/commercialRange/{commercialRangeName}`         | 2     |
| `commercialRangeList`           | GET    | `/dedicatedCloud/commercialRange`                               | 2     |
| `commercialRangeComplianceList` | GET    | `/dedicatedCloud/{serviceName}/commercialRange/compliance`      | 2     |
| `commercialRangeOrderableList`  | GET    | `/dedicatedCloud/{serviceName}/commercialRange/orderable`       | 2     |
| `get`                           | GET    | `/dedicatedCloud/{serviceName}`                                 | 2     |
| `hostProfileGet`                | GET    | `/dedicatedCloud/location/{pccZone}/hostProfile/{id}`           | 2     |
| `hostProfileList`               | GET    | `/dedicatedCloud/location/{pccZone}/hostProfile`                | 2     |
| `hostProfileServiceGet`         | GET    | `/dedicatedCloud/{serviceName}/location/hostProfile/{id}`       | 2     |
| `hostProfileServiceList`        | GET    | `/dedicatedCloud/{serviceName}/location/hostProfile`            | 2     |
| `hypervisorGet`                 | GET    | `/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}`     | 2     |
| `hypervisorList`                | GET    | `/dedicatedCloud/location/{pccZone}/hypervisor`                 | 2     |
| `hypervisorServiceGet`          | GET    | `/dedicatedCloud/{serviceName}/location/hypervisor/{shortName}` | 2     |
| `hypervisorServiceList`         | GET    | `/dedicatedCloud/{serviceName}/location/hypervisor`             | 2     |
| `list`                          | GET    | `/dedicatedCloud`                                               | 2     |
| `locationGet`                   | GET    | `/dedicatedCloud/location/{pccZone}`                            | 2     |
| `locationList`                  | GET    | `/dedicatedCloud/location`                                      | 2     |
| `locationServiceGet`            | GET    | `/dedicatedCloud/{serviceName}/location`                        | 2     |
| `stockHostList`                 | GET    | `/dedicatedCloud/location/{pccZone}/stock/host`                 | 2     |
| `stockPccList`                  | GET    | `/dedicatedCloud/location/{pccZone}/stock/pcc`                  | 2     |
| `stockZpoolList`                | GET    | `/dedicatedCloud/location/{pccZone}/stock/zpool`                | 2     |

### LOT 1 Operations (by family)

| Family              | Operations                                                                                                                                                                                                                                         | Endpoints                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `root/`             | update, terminate, confirmTermination, changeContact, changeProperties                                                                                                                                                                             | `PUT /dedicatedCloud/{serviceName}`, `POST /dedicatedCloud/{serviceName}/{terminate,confirmTermination,changeContact,changeProperties}` |
| `allowedNetwork/`   | allowedNetworkList/Create/Get/Update/Delete, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState                                                                                                                                | `/dedicatedCloud/{serviceName}/allowedNetwork`                                                                                          |
| `datacenter/`       | datacenterList/Create/Get/Update/Delete, BackupRepositoryList/Get, CheckBackupJobs, OrderableFilerProfiles, OrderableHostProfiles, OrderNewFilerHourly, OrderNewHostHourly, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState | `/dedicatedCloud/{serviceName}/datacenter`                                                                                              |
| `host/`             | hostList/Get/AddHostSpare/HourlyConsumption/Location/Remove, Resilience/ResilienceCanBeEnabled/ResilienceDisable/ResilienceEnable, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState                                          | `/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host`                                                                          |
| `filer/`            | filerList/Get/CheckGlobalCompatible/ConvertToGlobal/HourlyConsumption/Location/Remove, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState                                                                                      | `/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer`                                                                         |
| `vm/`               | vmList/Get, BackupJobGet/Update/Disable/Enable, RestorePointsList, RestorePointGet/Restore, DisableBackup/DisableCarp/EditBackup/EnableBackup/EnableCarp/RemoveLicense/RestoreBackup/SetLicense, VmLicensedList                                    | `/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm`                                                                            |
| `serviceInfos/`     | serviceInfosGet/Update                                                                                                                                                                                                                             | `/dedicatedCloud/{serviceName}/serviceInfos`                                                                                            |
| `user/`             | userList/Create/Get/Delete, ChangePassword/ChangeProperties/ConfirmPhoneNumber/Disable/Enable, ObjectRightList/Create/Get/Delete, RightList/Get/Update, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState                     | `/dedicatedCloud/{serviceName}/user`                                                                                                    |
| `task/`             | taskList/Get, ChangeMaintenanceExecutionDate, ResetTaskState                                                                                                                                                                                       | `/dedicatedCloud/{serviceName}/task`                                                                                                    |
| `backupRepository/` | backupRepositoryList/Get                                                                                                                                                                                                                           | `/dedicatedCloud/{serviceName}/backupRepository`                                                                                        |
| `ip/`               | ipList/Get/Details, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState                                                                                                                                                         | `/dedicatedCloud/{serviceName}/ip`                                                                                                      |

**Total:** 305 endpoints couverts (couverture 100%), voir `docs/api-reference/coverage-report.md`.

## Phase 4e — Lot final (23 endpoints legacy)

| Famille                | Opérations                                                                                                                                                          | Endpoints                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `filer/`               | filerGlobalList/Get/CheckGlobalCompatible/ConvertToGlobal/HourlyConsumption/Location/Remove, TaskList/TaskGet/TaskChangeMaintenanceExecutionDate/TaskResetTaskState | `/dedicatedCloud/{serviceName}/filer` (datastores globaux, sans `datacenterId`) |
| `datacenter/nsxtEdge/` | nsxtEdgesResizingCapabilities, nsxtEdgesScalingCapabilities, resizeNsxtEdgeCluster                                                                                  | `/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/...`                   |
