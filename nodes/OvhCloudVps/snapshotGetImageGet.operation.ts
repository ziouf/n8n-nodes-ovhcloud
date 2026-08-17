import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Get image of a specific snapshot. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const imageId = this.getNodeParameter('imageId', itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/snapshot/image/get`, {
		query: { imageId },
	})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
