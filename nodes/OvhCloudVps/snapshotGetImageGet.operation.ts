import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Get image of a specific snapshot. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The VPS service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'vps1234567.ovh.net' },
			],
			displayOptions,
		},
		{
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The snapshot image identifier to get the image for',
			placeholder: 'snapshot-ID-1234567890',
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
	const imageId = this.getNodeParameter('imageId', itemIndex!) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/snapshot/image/get`, {
		query: { imageId },
	})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
