import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the service. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Termination Token',
			name: 'token',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
			description: 'The termination token sent by mail to the admin contact',
			displayOptions,
		},
	];
}

/**
 * Executes the Post ConfirmServiceTermination operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/terminate/confirm
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const token = this.getNodeParameter('token', itemIndex) as string;
	const body: IDataObject = { token };
	const client = new ApiClient(this);
	const data = (await client.httpPost(
		`/services/${encodeURIComponent(serviceName)}/terminate/confirm`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
