import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Enable DNS Zone DNSSEC operation
 *
 * Enables DNSSEC for a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dnssec
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
	];
}

/**
 * Executes the Enable DNS Zone DNSSEC operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/dnssec`)) as IDataObject;
	return [{ json: data }];
}
