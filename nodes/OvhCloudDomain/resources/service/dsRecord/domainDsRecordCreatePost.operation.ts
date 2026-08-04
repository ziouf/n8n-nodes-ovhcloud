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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Keys',
			name: 'keys',
			type: 'json',
			default: '',
			required: true,
			description: 'New Keys',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DS records operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/dsRecord
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const body: IDataObject = {};
		const keys = this.getNodeParameter('keys', itemIndex, '') as string;
		if (keys !== '') body['keys'] = JSON.parse(keys);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/dsRecord`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
