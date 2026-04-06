import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get hardware properties.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/hardware/{hardwareName}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Hardware Name',
			name: 'hardwareName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hardware',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Hardware operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const hardwareName = this.getNodeParameter('hardwareName', 0) as string;
	const data = (await client.httpGet(`/overTheBox/hardware/${hardwareName}`)) as IDataObject;
	return [{ json: data }];
}
