import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Add a failover IP to the VPS. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'VPS Service Name',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
		{
			displayName: 'IP Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The failover IP address to add (e.g. 123.456.789.0)',
			placeholder: '123.456.789.0',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex!, '', {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ipAddress', _itemIndex!) as string;

	const data = (await client.httpPost(`/vps/${serviceName}/ips`, { ip: ipAddress })) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
