import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Model Name',
                name: 'modelName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The modelName',
                displayOptions,
            }
    ];
}

/**
 * Get price of VPS Classic 2013
 *
 * HTTP method: GET
 * Endpoint: /price/vps/2013v1/cloud/model/{modelName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const modelName = this.getNodeParameter('modelName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/vps/2013v1/cloud/model/${modelName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
