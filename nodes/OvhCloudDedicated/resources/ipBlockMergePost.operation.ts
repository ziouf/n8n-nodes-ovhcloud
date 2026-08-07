import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			description: 'Merge IP blocks',
			displayOptions,
		},
		{
			displayName: 'Block',
			name: 'block',
			type: 'string',
			default: '',
			required: true,
			description: 'IP block to merge',
			displayOptions,
		},
	];
}

/**
 * Merge IP blocks
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ipBlockMerge
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const block = this.getNodeParameter('block', itemIndex) as string;

	const body: IDataObject = {};
	if (block) {
		body.block = block;
	}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ipBlockMerge`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
