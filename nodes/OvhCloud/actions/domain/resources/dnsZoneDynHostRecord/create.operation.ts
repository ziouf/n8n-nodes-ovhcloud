import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create DynHost Record operation
 *
 * Creates a new DynHost record for a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dynHost/record
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
			required: true,
			description: 'The subdomain for the DynHost record',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'The target IP address',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'Time to live in seconds',
			displayOptions,
		},
	];
}

/**
 * Executes the Create DynHost Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0) as string;
	const target = this.getNodeParameter('target', 0) as string;
	const ttl = this.getNodeParameter('ttl', 0, 0) as number;

	const body: IDataObject = { subDomain, target };
	if (ttl > 0) body.ttl = ttl;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/dynHost/record`, body)) as IDataObject;
	return [{ json: data }];
}
