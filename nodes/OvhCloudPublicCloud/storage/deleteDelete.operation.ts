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
    ];
}

/**
 * Executes the Delete Storage Account operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/storage/{storageId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
        extractValue: true,
    }) as string;
    const storageId = this.getNodeParameter('storageId', 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/storage/${storageId}`);

    return this.helpers.returnJsonArray([{ deleted: storageId }]);
}
