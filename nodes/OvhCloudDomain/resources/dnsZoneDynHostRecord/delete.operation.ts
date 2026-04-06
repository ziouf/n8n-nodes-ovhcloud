import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Delete DynHost Record operation
 *
 * Deletes a DynHost record from a DNS zone.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/zone/{zoneName}/dynHost/record/{id}
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
			description: 'The ID of the DynHost record to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete DynHost Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const data = (await client.httpDelete(`/domain/zone/${zoneName}/dynHost/record/${id}`)) as IDataObject;
	return [{ json: data }];
}
