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
			displayName: 'service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},
		{
			displayName: 'user Id',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userId identifier',
		},

	];
}

/**
 * Executes the Put UpdateUser operation.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/{serviceName}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userId = this.getNodeParameter('userId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/cdn/' + serviceName + '/user/' + userId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
