import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

/** Create a new disk on the VPS. */
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
			displayName: 'Size In GB',
			name: 'sizeInGB',
			type: 'number',
			default: 0,
			required: true,
			description: 'The size of the new disk in GB',
			placeholder: '25',
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
	const sizeInGB = this.getNodeParameter('sizeInGB', itemIndex ?? 0) as number;

	const body: IDataObject = { sizeInGB };
	const data = (await client.httpPost(`/vps/${serviceName}/disks/create`, body)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
