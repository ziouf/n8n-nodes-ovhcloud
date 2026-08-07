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
 * Executes a factory reset on the device
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/device/{identity}/clearDevice
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const identity = this.getNodeParameter('identity', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/device/" + encodeURIComponent(identity) + "/clearDevice")) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
