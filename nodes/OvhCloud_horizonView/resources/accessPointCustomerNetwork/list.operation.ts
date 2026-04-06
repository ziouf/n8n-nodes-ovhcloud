import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List customer networks for an access point.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Access Point Customer Networks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const data = (await client.httpGet(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
