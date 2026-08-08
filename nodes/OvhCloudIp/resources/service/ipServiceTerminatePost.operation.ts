import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the IP service. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your IP services',
			displayOptions,
		},
	];
}

/**
 * Executes the Post Terminate IP Service operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/service/{serviceName}/terminate
 */

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost(
		`/ip/service/${encodeURIComponent(serviceName)}/terminate`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
