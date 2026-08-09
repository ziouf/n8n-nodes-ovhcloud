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
                displayName: 'Filer Profile',
                name: 'filerProfile',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The filerProfile',
                displayOptions,
            }
    ];
}

/**
 * Get price of dedicated Cloud monthly filer ressources
 *
 * HTTP method: GET
 * Endpoint: /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const filerProfile = this.getNodeParameter('filerProfile', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/${filerProfile}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
