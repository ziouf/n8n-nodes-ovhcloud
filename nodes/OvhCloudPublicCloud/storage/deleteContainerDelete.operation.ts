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
            displayName: 'Storage ID',
            name: 'storageId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
        {
            displayName: 'Container ID',
            name: 'containerId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Delete Container operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/storage/{storageId}/container/{containerId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const storageId = this.getNodeParameter('storageId', _itemIndex ?? 0) as string;
    const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/storage/${storageId}/container/${containerId}`);

    return this.helpers.returnJsonArray([{ deleted: containerId }]);
}
