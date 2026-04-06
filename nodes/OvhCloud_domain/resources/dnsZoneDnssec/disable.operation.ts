import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Disable DNS Zone DNSSEC operation
 *
 * Disables DNSSEC for a DNS zone.
 *
 * HTTP method: DELETE
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
 * Executes the Disable DNS Zone DNSSEC operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const data = (await client.httpDelete(`/domain/zone/${zoneName}/dnssec`)) as IDataObject;
	return [{ json: data }];
}
