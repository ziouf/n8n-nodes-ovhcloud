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
 * Executes the List Quantum Capabilities operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/quantum/capabilities
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    
    const data = (await client.httpGet(
        `/publicCloud/project/${projectId}/quantum/capabilities`,
    )) as unknown[];

    if (!Array.isArray(data)) {
        return this.helpers.returnJsonArray([data]);
    }

    return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
