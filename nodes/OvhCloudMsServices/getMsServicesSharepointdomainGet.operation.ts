import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /msServices/sharepoint/{domain}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpGet('/msServices' + '/' + 'sharepoint' + '/' + encodeURIComponent(domain))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

