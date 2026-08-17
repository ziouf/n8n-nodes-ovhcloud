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
            displayName: 'ACL ID',
            name: 'aclId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Delete ACL operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/acl/{aclId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const aclId = this.getNodeParameter('aclId', _itemIndex ?? 0) as string;
    
    await client.httpDelete(`/cloud/project/${serviceName}/acl/${aclId}`);

    return this.helpers.returnJsonArray([{ deleted: aclId }]);
}
