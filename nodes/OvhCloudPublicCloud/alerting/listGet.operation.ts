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
    ];
}

/**
 * Executes the List Alerting Rules operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/alerting
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    
    const data = (await client.httpGet(
        `/cloud/project/${serviceName}/alerting`,
    )) as unknown[];

    if (!Array.isArray(data)) {
        return this.helpers.returnJsonArray([data]);
    }

    return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
