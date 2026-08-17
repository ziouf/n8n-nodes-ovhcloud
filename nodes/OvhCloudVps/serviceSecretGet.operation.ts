import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Get the authentication secret key for a VPS. */
export function description(displayOptions: IDisplayOptions) {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/secret/key/get`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
