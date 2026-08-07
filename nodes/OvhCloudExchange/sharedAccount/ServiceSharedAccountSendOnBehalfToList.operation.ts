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
			displayName: 'Shared Email Address',
			name: 'sharedEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this shared mailbox',
		},
	];
}

/**
 * SendOnBehalfTo granted users for this shared mailbox
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sharedAccount/" + encodeURIComponent(sharedEmailAddress) + "/sendOnBehalfTo")) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
