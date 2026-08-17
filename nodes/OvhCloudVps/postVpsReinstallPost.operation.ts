import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will reinstall the VPS, erasing all current data.', displayOptions),
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Reinstall a VPS
 *
 * HTTP method: POST
 * Endpoint: /vps/{serviceName}/reinstall
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpPost(`/vps/${serviceName}/reinstall`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
