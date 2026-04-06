import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update DNS Zone Redirection operation
 *
 * Updates a redirection for a DNS zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/redirection/{id}
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
			displayName: 'Redirection ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the redirection to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS Zone Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/redirection/${id}`)) as IDataObject;
	return [{ json: data }];
}
