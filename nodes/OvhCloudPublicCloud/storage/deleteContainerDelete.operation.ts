import type {
    IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Public Cloud Project',
            name: 'publicCloudProjectId',
            type: 'resourceLocator',
            default: { mode: 'list', value: '' },
            required: true,
            description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
            modes: [
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    typeOptions: { searchListMethod: 'getPublicCloudProjects' },
                },
                {
                    displayName: 'By ID',
                    name: 'name',
                    type: 'string',
                    placeholder: '12345678-1234-1234-1234-1234567890ab',
                },
            ],
            displayOptions,
        },
        {
            displayName: 'Storage ID',
            name: 'storageId',
            type: 'string',
            default: '',
            required: true,
            description: 'The storageId identifier',
            displayOptions,
        },
        {
            displayName: 'Container ID',
            name: 'containerId',
            type: 'string',
            default: '',
            required: true,
            description: 'The containerId identifier',
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
    const client = new ApiClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const storageId = this.getNodeParameter('storageId', _itemIndex ?? 0) as string;
    const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/storage/${storageId}/container/${containerId}`);

    return this.helpers.returnJsonArray([{ deleted: containerId }]);
}
