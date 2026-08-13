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
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'Path for public folder',
		},
		{
			displayName: 'Access Rights',
			name: 'accessRights',
			type: 'string',
			default: '',
			required: true,
			description: 'Access rights to be set for the account',
		},
		{
			displayName: 'Allowed Account ID',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to have access to public folder',
		},
	];
}

/**
 * Create public folder permission
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const path = this.getNodeParameter('path', _itemIndex ?? 0) as string;
	const accessRights = this.getNodeParameter('accessRights', _itemIndex ?? 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    accessRights: accessRights,
    allowedAccountId: allowedAccountId
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/publicFolder/" + encodeURIComponent(path) + "/permission", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
