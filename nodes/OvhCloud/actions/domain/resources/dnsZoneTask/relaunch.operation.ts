import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Relaunch DNS Zone Task operation
 *
 * Relaunches a DNS zone task.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/task/{id}/relaunch
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
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the task to relaunch',
			displayOptions,
		},
	];
}

/**
 * Executes the Relaunch DNS Zone Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/task/${id}/relaunch`)) as IDataObject;
	return [{ json: data }];
}
