import type { IExecuteFunctions, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions) {
	return [
		destructiveActionNotice(
			'This will power off the VPS. It will stop running workloads.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'VPS Service Name',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', {
		extractValue: true,
	}) as string;

	await client.httpDelete(`/vps/${serviceName}/stop`);
	return this.helpers.returnJsonArray([{ message: 'VPS stopped' }]);
}
