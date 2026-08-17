import { SERVICE_NAME } from './serviceName';
import type { IExecuteFunctions, INodeExecutionData, IDisplayOptions } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const ips = (await client.httpGet(`/vps/${serviceName}/ip`)) as string[];
	return this.helpers.returnJsonArray(ips.map((ip) => ({ name: ip })));
}
