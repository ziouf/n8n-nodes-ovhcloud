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
			'This will permanently terminate the NAS-HA service. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your storage',
			displayOptions,
		},
	];
}

/**
 * Ask for the termination of your service
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPost(
		'/dedicated/nasha/' + encodeURIComponent(serviceName) + '/terminate',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
