import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Update VPS distribution to a new image. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Image',
			name: 'image',
			type: 'string',
			default: '',
			required: true,
			description: 'The distribution image name to update the VPS to (e.g. debian-12)',
			placeholder: 'debian-12',
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
	const image = this.getNodeParameter('image', itemIndex ?? 0) as string;

	const body: IDataObject = { image };
	const data = (await client.httpPost(
		`/vps/${serviceName}/distribution/update`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
