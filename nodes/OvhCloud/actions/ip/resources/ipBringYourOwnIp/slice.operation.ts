import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Slice a BYOIP Additional IP.
 *
 * Slices a BYOIP Additional IP into smaller Additional IPs.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/slice
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Slice BYOIP operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'Slicing Size',
			name: 'slicingSize',
			type: 'number',
			default: 0,
			required: true,
			description: 'The size for slicing',
			displayOptions,
		},
	];
}

/**
 * Executes the Slice BYOIP operation.
 *
 * Slices a BYOIP Additional IP into smaller Additional IPs.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/slice
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const slicingSize = this.getNodeParameter('slicingSize', 0) as number;
	const data = (await client.httpPost(`/ip/${ipBlock}/bringYourOwnIp/slice`, {
		body: { slicingSize },
	})) as IDataObject;
	return [{ json: data }];
}
