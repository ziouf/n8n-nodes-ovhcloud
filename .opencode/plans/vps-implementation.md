# Plan: Complete VPS Actions Implementation

## Overview

Implement all missing VPS operations in `nodes/OvhCloud/actions/vps/*` following the existing pattern.
Based on `docs/v1/vps.md` documentation, there are ~30+ missing operations across existing and new resources.

## Files to Create (27 new files)

### 1. VPS Root Level (2 files)

- `nodes/OvhCloud/actions/vps/edit.operation.ts` — PUT /vps/{serviceName}
- `nodes/OvhCloud/actions/vps/abortSnapshot.operation.ts` — POST /vps/{serviceName}/abortSnapshot

### 2. automatedBackup (4 files)

- `nodes/OvhCloud/actions/vps/resources/automatedBackup/listAttached.operation.ts` — GET /vps/{serviceName}/automatedBackup/attachedBackup
- `nodes/OvhCloud/actions/vps/resources/automatedBackup/detach.operation.ts` — POST /vps/{serviceName}/automatedBackup/detachBackup
- `nodes/OvhCloud/actions/vps/resources/automatedBackup/reschedule.operation.ts` — POST /vps/{serviceName}/automatedBackup/reschedule
- `nodes/OvhCloud/actions/vps/resources/automatedBackup/restore.operation.ts` — POST /vps/{serviceName}/automatedBackup/restore

### 3. backupftp (5 files)

- `nodes/OvhCloud/actions/vps/resources/backupftp/listAcls.operation.ts` — GET /vps/{serviceName}/backupftp/access
- `nodes/OvhCloud/actions/vps/resources/backupftp/createAcl.operation.ts` — POST /vps/{serviceName}/backupftp/access
- `nodes/OvhCloud/actions/vps/resources/backupftp/deleteAcl.operation.ts` — DELETE /vps/{serviceName}/backupftp/access/{ipBlock}
- `nodes/OvhCloud/actions/vps/resources/backupftp/listAuthorizableBlocks.operation.ts` — GET /vps/{serviceName}/backupftp/authorizableBlocks
- `nodes/OvhCloud/actions/vps/resources/backupftp/setPassword.operation.ts` — POST /vps/{serviceName}/backupftp/password

### 4. disks (3 files)

- `nodes/OvhCloud/actions/vps/resources/disks/update.operation.ts` — PUT /vps/{serviceName}/disks/{id}
- `nodes/OvhCloud/actions/vps/resources/disks/getMonitoring.operation.ts` — GET /vps/{serviceName}/disks/{id}/monitoring
- `nodes/OvhCloud/actions/vps/resources/disks/getUsage.operation.ts` — GET /vps/{serviceName}/disks/{id}/use

### 5. distribution (2 files)

- `nodes/OvhCloud/actions/vps/resources/distribution/listSoftware.operation.ts` — GET /vps/{serviceName}/distribution/software
- `nodes/OvhCloud/actions/vps/resources/distribution/getSoftware.operation.ts` — GET /vps/{serviceName}/distribution/software/{softwareId}

### 6. ips (3 files)

- `nodes/OvhCloud/actions/vps/resources/ips/get.operation.ts` — GET /vps/{serviceName}/ips/{ipAddress}
- `nodes/OvhCloud/actions/vps/resources/ips/release.operation.ts` — DELETE /vps/{serviceName}/ips/{ipAddress}
- `nodes/OvhCloud/actions/vps/resources/ips/update.operation.ts` — PUT /vps/{serviceName}/ips/{ipAddress}

### 7. images (NEW resource, 3 files)

- `nodes/OvhCloud/actions/vps/resources/images/index.ts`
- `nodes/OvhCloud/actions/vps/resources/images/listAvailable.operation.ts` — GET /vps/{serviceName}/images/available
- `nodes/OvhCloud/actions/vps/resources/images/getCurrent.operation.ts` — GET /vps/{serviceName}/images/current
- `nodes/OvhCloud/actions/vps/resources/images/getDetails.operation.ts` — GET /vps/{serviceName}/images/available/{id}

### 8. migration2020 (NEW resource, 2 files)

- `nodes/OvhCloud/actions/vps/resources/migration2020/index.ts`
- `nodes/OvhCloud/actions/vps/resources/migration2020/get.operation.ts` — GET /vps/{serviceName}/migration2020
- `nodes/OvhCloud/actions/vps/resources/migration2020/cancel.operation.ts` — DELETE /vps/{serviceName}/migration2020

### 9. console (NEW resource, 1 file)

- `nodes/OvhCloud/actions/vps/resources/console/index.ts`
- `nodes/OvhCloud/actions/vps/resources/console/getUrl.operation.ts` — POST /vps/{serviceName}/getConsoleUrl

### 10. contactChange (NEW resource, 1 file)

- `nodes/OvhCloud/actions/vps/resources/contactChange/index.ts`
- `nodes/OvhCloud/actions/vps/resources/contactChange/create.operation.ts` — POST /vps/{serviceName}/changeContact

### 11. confirmTermination (NEW resource, 1 file)

- `nodes/OvhCloud/actions/vps/resources/confirmTermination/index.ts`
- `nodes/OvhCloud/actions/vps/resources/confirmTermination/create.operation.ts` — POST /vps/{serviceName}/confirmTermination

## Files to Modify (3 files)

### 1. `nodes/OvhCloud/actions/vps/resources/index.ts`

Add exports for new resources: images, migration2020, console, contactChange, confirmTermination

### 2. `nodes/OvhCloud/actions/vps/resources/automatedBackup/index.ts`

Change from single export to multi-export with all operations

### 3. `nodes/OvhCloud/actions/vps/resources/backupftp/index.ts`

Change from single export to multi-export with all operations

### 4. `nodes/OvhCloud/actions/vps/resources/disks/index.ts`

Add exports for update, getMonitoring, getUsage operations

### 5. `nodes/OvhCloud/actions/vps/resources/distribution/index.ts`

Add exports for listSoftware, getSoftware operations

### 6. `nodes/OvhCloud/actions/vps/resources/ips/index.ts`

Add exports for get, release, update operations

### 7. `nodes/OvhCloud/actions/vps/index.ts`

- Add edit and abortSnapshot operations to vpsResource options
- Add new resources: images, migration2020, console, contactChange, confirmTermination
- Wire up all new operations in the execute switch

## Implementation Pattern

Each operation file follows this pattern:

```typescript
import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Service Name',
            name: 'serviceName',
            description: '...',
            type: 'resourceLocator',
            required: true,
            default: { mode: 'str', value: '' },
            modes: [
                { displayName: 'By Name', name: 'str', type: 'string' },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select a VPS service...',
                    typeOptions: {
                        searchListMethod: 'getVpsServices',
                        searchable: true,
                    },
                },
            ],
            displayOptions,
        },
        // ... operation-specific parameters
    ];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
    // ... operation-specific logic
    const response = (await client.httpGet(`/vps/${serviceName}/...`)) as IDataObject;
    return this.helpers.returnJsonArray(response);
}
```

## Execution Order

1. Create all new operation files (batch by resource)
2. Update all index.ts barrel files
3. Update vps/index.ts with new resources and operations
4. Run `npm run build` and `npm run lint` to verify
