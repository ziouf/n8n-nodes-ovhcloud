import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List DNS Zone Redirections operation
 *
 * Lists redirections for a DNS zone.
 *
 * HTTP method: GET
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
			description: 'Filter by subdomain',
			displayOptions,
		},
	];
}

/**
 * Executes the List DNS Zone Redirections operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const qs: IDataObject = {};
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	if (subDomain) qs.subDomain = subDomain;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/redirection`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
