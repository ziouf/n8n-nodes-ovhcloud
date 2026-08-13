import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Merge IP blocks',
				placeholder: 'server-12345',
			}),
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const block = this.getNodeParameter('block', _itemIndex) as string;

	const body: IDataObject = {};
	if (block) {
		body.block = block;
	}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ipBlockMerge`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
