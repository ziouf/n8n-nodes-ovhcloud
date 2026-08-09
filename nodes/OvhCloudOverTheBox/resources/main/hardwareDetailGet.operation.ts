import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Hardware Name',
			name: 'hardwareName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hardware',
			displayOptions,
		},
	];
}

/**
 * Get hardware properties.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/hardware/{hardwareName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const hardwareName = this.getNodeParameter('hardwareName', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/overTheBox/hardware/${encodeURIComponent(hardwareName)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
