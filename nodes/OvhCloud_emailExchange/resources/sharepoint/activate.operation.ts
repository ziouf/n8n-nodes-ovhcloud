import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Activate SharePoint for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint
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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			required: true,
			description: 'The subdomain for SharePoint',
			displayOptions,
		},
	];
}

/**
 * Executes the Activate SharePoint operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0) as string;

	const body: IDataObject = { primaryEmailAddress, subDomain };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/activateSharepoint`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
