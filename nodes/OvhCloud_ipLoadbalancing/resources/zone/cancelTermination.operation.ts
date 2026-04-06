import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Cancel zone termination.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Cancel Termination Zone operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/zone/${name}/cancelTermination`,
	)) as IDataObject;
	return [{ json: data }];
}
