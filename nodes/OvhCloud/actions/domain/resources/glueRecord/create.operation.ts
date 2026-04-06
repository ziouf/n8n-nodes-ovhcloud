import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create Glue Record operation
 *
 * Creates a new glue record for a domain.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/glueRecord
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the domain. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a domain...',
					typeOptions: { searchListMethod: 'getDomainServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			required: true,
			description: 'The host name for the glue record',
			displayOptions,
		},
		{
			displayName: 'IPs',
			name: 'ips',
			type: 'string',
			default: '',
			description: 'Comma-separated list of IP addresses',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Glue Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const host = this.getNodeParameter('host', 0) as string;
	const ipsStr = this.getNodeParameter('ips', 0, '') as string;

	const body: IDataObject = { host };
	if (ipsStr) {
		body.ips = ipsStr.split(',').map((ip) => ip.trim());
	}

	const data = (await client.httpPost(`/domain/${serviceName}/glueRecord`, body)) as IDataObject;
	return [{ json: data }];
}
