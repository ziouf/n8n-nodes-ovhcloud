import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Extra Sql Perso Name',
                name: 'extraSqlPersoName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The extraSqlPersoName',
                displayOptions,
            }
    ];
}

/**
 * Get the price for extra sql perso option
 *
 * HTTP method: GET
 * Endpoint: /price/hosting/web/extraSqlPerso/{extraSqlPersoName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const extraSqlPersoName = this.getNodeParameter('extraSqlPersoName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/hosting/web/extraSqlPerso/${extraSqlPersoName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
