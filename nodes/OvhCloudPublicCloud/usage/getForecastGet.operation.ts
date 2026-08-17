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
    ];
}

/**
 * Executes the Get Usage Forecast operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/usage/forecast
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/usage/forecast`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
