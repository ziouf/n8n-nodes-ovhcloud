import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a send connector for an Email Exchange service.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}
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
			displayName: 'Send Connector ID',
			name: 'sendConnectorId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the send connector',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Send Connector operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sendConnectorId = this.getNodeParameter('sendConnectorId', 0) as number;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${sendConnectorId}`,
	)) as IDataObject;
	return [{ json: data }];
}
