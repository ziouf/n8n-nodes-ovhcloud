import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the dedicated cluster. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Service name',
			displayOptions,
		},
	];
}

/**
 * Ask for the termination of your service
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPost(
		'/dedicated/cluster/' + encodeURIComponent(serviceName) + '/terminate',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
