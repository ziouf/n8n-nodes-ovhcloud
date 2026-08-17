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
            displayName: 'Subnet ID',
            name: 'subnetId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Subnet Details operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/network/subnet/{subnetId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const subnetId = this.getNodeParameter('subnetId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/network/subnet/${subnetId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
