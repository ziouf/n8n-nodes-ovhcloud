import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Identity',
			name: 'identity',
			type: 'string',
			default: '',
			required: true,
			description: 'Exchange identity',
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const identity = this.getNodeParameter('identity', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPut("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/device/" + encodeURIComponent(identity))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
