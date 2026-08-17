import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Retrieve automated backup settings for this VPS
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/automatedBackup
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/automatedBackup`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
