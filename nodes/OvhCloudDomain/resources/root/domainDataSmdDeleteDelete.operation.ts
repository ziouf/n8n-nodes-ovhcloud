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
	];
}

/**
 * Executes the Delete a SMD file operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/data/smd/{smdId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const smdId = this.getNodeParameter('smdId', itemIndex) as string;

	const data = (await client.httpDelete(`/domain/data/smd/${encodeURIComponent(smdId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
