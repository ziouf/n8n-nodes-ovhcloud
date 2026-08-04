import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Data',
			name: 'data',
			type: 'string',
			default: '',
			required: true,
			description: 'SMD file content in base64',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a SMD file operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/data/smd
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const body: IDataObject = {};
	const data = this.getNodeParameter('data', itemIndex, '') as string;
	body['data'] = data;

	const response = (await client.httpPost(`/domain/data/smd`, body)) as IDataObject;

	return this.helpers.returnJsonArray([response]);
}
