import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change hostname for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/changeHostname
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
			displayName: 'Hostname',
			name: 'hostname',
			type: 'string',
			default: '',
			required: true,
			description: 'The new hostname',
			displayOptions,
		},
		{
			displayName: 'Use DNS Assist',
			name: 'useDnsAssist',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to use DNS assistance',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Hostname operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const hostname = this.getNodeParameter('hostname', 0) as string;
	const useDnsAssist = this.getNodeParameter('useDnsAssist', 0) as boolean;

	const body: IDataObject = { hostname, useDnsAssist };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/changeHostname`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
