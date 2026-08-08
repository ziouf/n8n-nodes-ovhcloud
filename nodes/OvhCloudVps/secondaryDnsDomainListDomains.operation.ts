import type { IExecuteFunctions, INodeExecutionData, IDisplayOptions } from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'Secondary DNS Domains',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const domains = (await client.httpGet(`/vps/${serviceName}/secdns/domain`)) as string[];
	return this.helpers.returnJsonArray(domains.map((name) => ({ name })));
}
