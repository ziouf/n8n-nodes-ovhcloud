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
			displayName: 'SMD ID',
			name: 'smdId',
			type: 'string',
			default: '',
			required: true,
			description: 'The smdId identifier',
			displayOptions,
		},
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
 * Executes the Update a SMD file operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/data/smd/{smdId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const smdId = this.getNodeParameter('smdId', itemIndex) as string;

	const body: IDataObject = {};
	const data = this.getNodeParameter('data', itemIndex, '') as string;
	body['data'] = data;

	const response = (await client.httpPut(
		`/domain/data/smd/${encodeURIComponent(smdId)}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([response]);
}
