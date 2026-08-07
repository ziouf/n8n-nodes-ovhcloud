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
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'resource as email',
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPut("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/resourceAccount/" + encodeURIComponent(resourceEmailAddress))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
