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
		destructiveActionNotice(
			'This will terminate the VPS service. This action is irreversible.',
			displayOptions,
		),
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Terminate a VPS service
 *
 * HTTP method: POST
 * Endpoint: /vps/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpPost(`/vps/${serviceName}/terminate`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
