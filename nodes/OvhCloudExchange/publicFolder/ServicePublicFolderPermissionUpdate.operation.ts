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
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'Path for public folder',
		},
		{
			displayName: 'Allowed Account Id',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account id',
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPut("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/publicFolder/" + encodeURIComponent(path) + "/permission/" + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
