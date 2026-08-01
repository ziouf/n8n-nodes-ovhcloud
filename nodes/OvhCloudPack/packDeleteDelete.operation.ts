import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},

	];
}

/**
 * Executes the Delete DeletePack operation.
 *
 * HTTP method: DELETE
 * Endpoint: /pack/{serviceName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/pack/' + serviceName)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
