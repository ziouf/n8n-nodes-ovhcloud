import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
    IDataObject,
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
            displayName: 'IP ID',
            name: 'ipId',
            type: 'string',
            default: '',
            required: true,
            description: 'IP address ID',
            displayOptions,
        },
    ];
}

/**
 * Executes the Update IP operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/ip/{ipId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const ipId = this.getNodeParameter('ipId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpPut(
        `/publicCloud/project/${projectId}/ip/${ipId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
