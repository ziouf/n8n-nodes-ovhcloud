import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Aggregate sliced BYOIP Additional IPs.
 *
 * Aggregates sliced BYOIP Additional IPs and their neighbors into a single bigger Additional IP parent.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/aggregate
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Aggregate BYOIP operation
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
			displayName: 'Aggregation IP',
			name: 'aggregationIp',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Aggregate BYOIP operation.
 *
 * Aggregates sliced BYOIP Additional IPs into a single bigger Additional IP parent.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/aggregate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const aggregationIp = this.getNodeParameter('aggregationIp', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/bringYourOwnIp/aggregate`, {
		body: { aggregationIp },
	})) as IDataObject;
	return [{ json: data }];
}
