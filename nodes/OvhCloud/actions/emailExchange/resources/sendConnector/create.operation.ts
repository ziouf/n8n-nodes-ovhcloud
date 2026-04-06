import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a send connector for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sendConnector
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			required: true,
			description: 'Display name for the send connector',
			displayOptions,
		},
		{
			displayName: 'Smart Host',
			name: 'smartHost',
			type: 'string',
			default: '',
			required: true,
			description: 'The smart host for the send connector',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Send Connector operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const displayName = this.getNodeParameter('displayName', 0) as string;
	const smartHost = this.getNodeParameter('smartHost', 0) as string;

	const body: IDataObject = { displayName, smartHost };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/sendConnector`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
