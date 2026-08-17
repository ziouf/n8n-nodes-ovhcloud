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
            displayName: 'Operation ID',
            name: 'operationId',
            type: 'string',
            default: '',
            required: true,
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Operation Details operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/operation/{operationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
        extractValue: true,
    }) as string;
    const operationId = this.getNodeParameter('operationId', _itemIndex ?? 0) as string;
    
    const data = (await client.httpGet(
        `/cloud/project/${serviceName}/operation/${operationId}`,
    )) as IDataObject;

    return this.helpers.returnJsonArray([data]);
}
