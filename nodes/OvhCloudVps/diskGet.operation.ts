import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Get detail of a specific VPS disk. */
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
			displayName: 'Disk ID',
			name: 'diskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The disk identifier (e.g. primary)',
			placeholder: 'primary',
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
	const diskId = this.getNodeParameter('diskId', _itemIndex!) as string;

	const data = (await client.httpGet(
		`/vps/${serviceName}/disks/${encodeURIComponent(diskId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
