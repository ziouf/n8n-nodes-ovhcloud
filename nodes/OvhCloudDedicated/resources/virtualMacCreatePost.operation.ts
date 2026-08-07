import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Create virtual machine',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Create virtual machine',
			displayOptions,
		},
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			required: true,
			description: 'Create virtual machine',
			displayOptions,
		},
	];
}

/**
 * Create virtual machine
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/virtualMac
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex, '') as string;
	const template = this.getNodeParameter('template', itemIndex, '') as string;

	const body: IDataObject = {};
		if (name) {
			body.name = name;
		}
		if (template) {
			body.template = template;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualMac`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
