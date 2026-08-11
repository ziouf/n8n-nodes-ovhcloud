import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Create a new netboot order config for the VPS. */
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
			displayName: 'Order',
			name: 'order',
			type: 'string',
			default: '',
			required: true,
			description: 'The netboot order value (e.g. disk,pxeInitrd)',
			placeholder: 'disk,pxeInitrd',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const order = this.getNodeParameter('order', itemIndex ?? 0) as string;

	const body: IDataObject = { order };
	const data = (await client.httpPost(
		`/vps/${serviceName}/netboot/order/create`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
