import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain identifier',
			displayOptions,
		},
	];
}

/**
 * Get service information
 *
 * HTTP method: GET
 * Endpoint: /msServices/sharepoint/{domain}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices' + '/' + 'sharepoint' + '/' + encodeURIComponent(domain) + '/' + 'serviceInfos')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

