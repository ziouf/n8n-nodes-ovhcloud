import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

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
			displayName: 'Distribution ID',
			name: 'distId',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. stretch-64-buster',
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
	const distId = this.getNodeParameter('distId', itemIndex) as string;
	const data = (await client.httpGet(`/vps/${serviceName}/distribution/${distId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
