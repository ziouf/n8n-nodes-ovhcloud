import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create DNS Zone Redirection operation
 *
 * Creates a new redirection for a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/redirection
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'The subdomain to redirect',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'The target URL for the redirection',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Visible', value: 'visible' },
				{ name: 'Invisible', value: 'invisible' },
			],
			default: 'visible',
			description: 'The type of redirection',
			displayOptions,
		},
	];
}

/**
 * Executes the Create DNS Zone Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	const target = this.getNodeParameter('target', 0) as string;
	const type = this.getNodeParameter('type', 0, '') as string;

	const body: IDataObject = { target };
	if (subDomain) body.subDomain = subDomain;
	if (type) body.type = type;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/redirection`, body)) as IDataObject;
	return [{ json: data }];
}
