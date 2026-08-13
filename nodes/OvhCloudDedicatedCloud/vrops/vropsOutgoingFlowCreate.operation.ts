import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Outgoing flow description',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address of the remote service, e.g. 123.100.200.0',
			displayOptions,
		},
		{
			displayName: 'Service Port',
			name: 'servicePort',
			type: 'number',
			default: 0,
			required: true,
			description: 'Remote service port (25, 465, 587 or 2525)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Aria Operations Outgoing Flow operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vrops/outgoingFlow
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string; if (description !== '') { body.description = description; }
	body.ip = this.getNodeParameter('ip', _itemIndex) as string;
	body.servicePort = this.getNodeParameter('servicePort', _itemIndex) as number;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vrops/outgoingFlow`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
