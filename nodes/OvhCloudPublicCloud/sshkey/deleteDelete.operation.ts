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
            displayName: 'SSH Key ID',
            name: 'sshKeyId',
            type: 'string',
            default: '',
            required: true,
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const sshKeyId = this.getNodeParameter('sshKeyId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/publicCloud/project/${projectId}/sshkey/${sshKeyId}`);

    return this.helpers.returnJsonArray([{ deleted: sshKeyId }]);
}
