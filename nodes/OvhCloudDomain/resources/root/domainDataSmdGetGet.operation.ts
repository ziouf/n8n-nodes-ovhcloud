import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SMD ID',
			name: 'smdId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get details about a SMD file operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/data/smd/{smdId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const smdId = this.getNodeParameter('smdId', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/data/smd/${encodeURIComponent(smdId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
