import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
    IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
        	...projectIdLocator(),
            displayOptions,
        },
        {
            displayName: 'Snapshot ID',
            name: 'snapshotId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Delete Snapshot operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/snapshot/{snapshotId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const snapshotId = this.getNodeParameter('snapshotId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/snapshot/${snapshotId}`);

    return this.helpers.returnJsonArray([{ deleted: snapshotId }]);
}
