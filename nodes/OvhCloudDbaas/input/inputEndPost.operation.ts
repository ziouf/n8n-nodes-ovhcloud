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
	];
}

/**
 * Executes the POST inputEndPost operation.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/input/{inputId}/end
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const inputId = this.getNodeParameter('inputId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/dbaas/logs/${encodeURIComponent(serviceName)}/input/${encodeURIComponent(inputId)}/end`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
