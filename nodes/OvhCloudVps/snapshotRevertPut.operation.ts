import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

/** Revert the VPS to a specific snapshot. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will revert the VPS to a previous snapshot. Current data will be lost.',
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
		{
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The snapshot image identifier to revert the VPS to',
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
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const imageId = this.getNodeParameter('imageId', itemIndex ?? 0) as string;

	const data = (await client.httpPost(`/vps/${serviceName}/snapshot/revert`, {
		query: { imageId },
	})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
