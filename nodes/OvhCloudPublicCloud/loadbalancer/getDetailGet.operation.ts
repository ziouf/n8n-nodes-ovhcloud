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
            displayName: 'Load Balancer ID',
            name: 'lbId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Load Balancer Details operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/loadbalancer/{lbId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const lbId = this.getNodeParameter('lbId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/loadbalancer/${lbId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
