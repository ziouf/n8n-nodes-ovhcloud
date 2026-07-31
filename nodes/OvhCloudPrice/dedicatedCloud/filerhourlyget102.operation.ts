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
 * Get price of dedicated Cloud hourly filer ressources
 *
 * HTTP method: GET
 * Endpoint: /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const filerProfile = this.getNodeParameter('filerProfile', 0) as string;
    const data = (await client.httpGet(`/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/${filerProfile}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
