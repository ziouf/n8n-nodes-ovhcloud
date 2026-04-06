import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Restore DNS Zone History operation
 *
 * Restores a DNS zone from a history entry.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/history/{creationDate}/restore
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
			displayName: 'Creation Date',
			name: 'creationDate',
			type: 'string',
			default: '',
			required: true,
			description: 'The creation date of the history entry to restore',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore DNS Zone History operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const creationDate = this.getNodeParameter('creationDate', 0) as string;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/history/${creationDate}/restore`)) as IDataObject;
	return [{ json: data }];
}
