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
 * Update service information
 *
 * HTTP method: PUT
 * Endpoint: /msServices/sharepoint/{domain}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpPut('/msServices' + '/' + 'sharepoint' + '/' + encodeURIComponent(domain) + '/' + 'serviceInfos', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

