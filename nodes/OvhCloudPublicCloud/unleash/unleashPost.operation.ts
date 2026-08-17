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
 * Executes the Unleash Service operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/unleash
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    
    const data = (await client.httpPost(
        `/cloud/project/${serviceName}/unleash`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
