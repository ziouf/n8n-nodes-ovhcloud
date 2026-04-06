import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a mailing list for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList
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
			displayName: 'Depart Restriction',
			name: 'departRestriction',
			type: 'options',
			options: [
				{ name: 'Closed', value: 'closed' },
				{ name: 'Open', value: 'open' },
			],
			default: 'closed',
			required: true,
			description: 'Depart restriction for the mailing list',
			displayOptions,
		},
		{
			displayName: 'Join Restriction',
			name: 'joinRestriction',
			type: 'options',
			options: [
				{ name: 'Closed', value: 'closed' },
				{ name: 'Open', value: 'open' },
			],
			default: 'closed',
			required: true,
			description: 'Join restriction for the mailing list',
			displayOptions,
		},
		{
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Create Mailing List operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const departRestriction = this.getNodeParameter('departRestriction', 0) as string;
	const joinRestriction = this.getNodeParameter('joinRestriction', 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as string;

	const body: IDataObject = { departRestriction, joinRestriction, mailingListAddress };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/mailingList`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
