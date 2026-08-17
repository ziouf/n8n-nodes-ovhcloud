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
            displayName: 'Region',
            name: 'region',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Region Capability operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/capabilities/region/{region}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/capabilities/region/${region}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
