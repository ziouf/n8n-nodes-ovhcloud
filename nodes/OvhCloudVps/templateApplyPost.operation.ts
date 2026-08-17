import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Apply a netboot template to the VPS. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			required: true,
			description: 'The netboot template name to apply (e.g. centos, ubuntu)',
			placeholder: 'centos',
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
	const template = this.getNodeParameter('template', itemIndex ?? 0) as string;

	const body: IDataObject = { template };
	const data = (await client.httpPost(
		`/vps/${serviceName}/netboot/order/applyTemplate`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
