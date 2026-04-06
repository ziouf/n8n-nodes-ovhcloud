import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Change Organisation operation.
 *
 * Changes the organisation of this IP.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/changeOrg
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
			displayName: 'Organisation',
			name: 'organisation',
			type: 'string',
			default: '',
			required: true,
			description: 'The target organisation',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Organisation operation.
 *
 * Changes the organisation of this IP.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const organisation = this.getNodeParameter('organisation', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/changeOrg`, {
		body: { organisation },
	})) as IDataObject;
	return [{ json: data }];
}
