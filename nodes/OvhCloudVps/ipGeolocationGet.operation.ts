import { SERVICE_NAME } from './serviceName';
import type { IExecuteFunctions, INodeExecutionData, IDisplayOptions } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address',
			placeholder: 'e.g. 198.51.100.1',
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
	const address = this.getNodeParameter('address', _itemIndex) as string;
	const data = await client.httpGet(`/vps/${serviceName}/ip/${address}`, { geoLocation: true });
	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
