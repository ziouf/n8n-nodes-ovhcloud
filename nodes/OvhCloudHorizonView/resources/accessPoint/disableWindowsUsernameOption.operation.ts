import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Disable Windows Username option on Unified Access Gateway.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Disable Windows Username Option operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/disableWindowsUsernameOption`,
	)) as IDataObject;
	return [{ json: data }];
}
