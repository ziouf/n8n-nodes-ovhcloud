import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Accelerate the task operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/task/{id}/accelerate
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const id = this.getNodeParameter('id', itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/task/${encodeURIComponent(id)}/accelerate`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
