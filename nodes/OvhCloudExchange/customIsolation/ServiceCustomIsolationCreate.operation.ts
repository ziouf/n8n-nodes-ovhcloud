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
			displayName: 'Isolation Field',
			name: 'isolationField',
			type: 'string',
			default: '',
			required: true,
			description: 'Field use for isolation',
		},
		{
			displayName: 'Isolation Value',
			name: 'isolationValue',
			type: 'string',
			default: '',
			required: true,
			description: 'Value used for isolation',
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Display name of isolation',
		},
	];
}

/**
 * Create new custom isolation for mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/customIsolation
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const isolationField = this.getNodeParameter('isolationField', _itemIndex ?? 0) as string;
	const isolationValue = this.getNodeParameter('isolationValue', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    isolationField: isolationField,
    isolationValue: isolationValue,
    name: name
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/customIsolation", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
