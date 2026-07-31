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
            displayName: 'SSH Key ID',
            name: 'sshKeyId',
            type: 'string',
            default: '',
            required: true,
            description: 'The sshKeyId identifier',
            displayOptions,
        },
    ];
}

/**
 * Executes the Delete SSH Key operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/sshkey/{sshKeyId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
        extractValue: true,
    }) as string;
    const sshKeyId = this.getNodeParameter('sshKeyId', 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/sshkey/${sshKeyId}`);

    return this.helpers.returnJsonArray([{ deleted: sshKeyId }]);
}
