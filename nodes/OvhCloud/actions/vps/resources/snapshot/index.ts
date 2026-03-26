import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import { 
    description as descriptionSnapshotCreate, 
    execute as executeSnapshotCreate 
} from './create.operation';
import { 
    description as descriptionSnapshotGet, 
    execute as executeSnapshotGet 
} from './get.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Snapshot Operation',
            name: 'snapshotOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Create',
                    value: 'create',
                },
                {
                    name: 'Get',
                    value: 'get',
                },
                {
                    name: 'List',
                    value: 'list',
                },
            ],
            default: 'list',
            displayOptions,
        },
        ...descriptionSnapshotCreate({...displayOptions, show: { ...displayOptions?.show, snapshotOperation: ['create']} }),
        ...descriptionSnapshotGet({...displayOptions, show: { ...displayOptions?.show, snapshotOperation: ['get']} }),
        // TODO: add list operation description when implemented
    ];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('snapshotOperation', 0) as string;
    
    switch (operation) {
        case 'create':
            return await executeSnapshotCreate.call(this);
        case 'get':
            return await executeSnapshotGet.call(this);
        case 'list':
            // TODO: implement list operation
            throw new Error('The "list" operation is not implemented for the "snapshot" resource. Please use the "vps" resource with the appropriate operations to manage snapshots.');
        default:
            throw new Error(`The operation "${operation}" is not supported for the "snapshot" resource.`);
    }
}