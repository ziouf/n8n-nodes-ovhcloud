import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description: 'The internal name of your IP services',
		displayOptions,
	},
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		default: '',
		required: true,
		typeOptions: { password: true },
		description: 'The termination token sent by email to the admin contact',
		displayOptions,
	},
	{
		displayName: 'Commentary',
		name: 'commentary',
		type: 'string',
		default: '',
		description: 'Commentary about your termination request',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Confirm IP Service Termination operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/service/{serviceName}/confirmTermination
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const token = (this.getNodeParameter('token', _itemIndex) as string) || '';
	const commentary = (this.getNodeParameter('commentary', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.token = token;
	if (commentary) body.commentary = commentary;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/service/${encodeURIComponent(serviceName)}/confirmTermination`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
