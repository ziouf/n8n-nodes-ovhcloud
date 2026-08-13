import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			description: 'Resource as email',
		},
		{
			displayName: 'Allowed Account ID',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Delegate\'s account ID',
		},
	];
}

/**
 * add new resource account delegate in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount/{resourceEmailAddress}/delegate
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', _itemIndex ?? 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    allowedAccountId: allowedAccountId
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/resourceAccount/" + encodeURIComponent(resourceEmailAddress) + "/delegate", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
