import { SERVICE_NAME } from './serviceName';
import type { IExecuteFunctions, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions) {
	return [
		destructiveActionNotice(
			'This will power off the VPS. It will stop running workloads.',
			displayOptions,
		),
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

	await client.httpDelete(`/vps/${serviceName}/stop`);
	return this.helpers.returnJsonArray([{ message: 'VPS stopped' }]);
}
