import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Input ID',
			name: 'inputId',
			type: 'string',
			default: '',
			required: true,
			description: 'The inputId identifier',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.InputUpdate)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT inputUpdatePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/input/{inputId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const inputId = this.getNodeParameter('inputId', itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/dbaas/logs/${encodeURIComponent(serviceName)}/input/${encodeURIComponent(inputId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
