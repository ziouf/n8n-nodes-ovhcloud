import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get DNS Zone Record operation
 *
 * Retrieves a specific DNS record.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/record/{id}
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
			displayName: 'Record ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the DNS record',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DNS Zone Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/record/${id}`)) as IDataObject;
	return [{ json: data }];
}
