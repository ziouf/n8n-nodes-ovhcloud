import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
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
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Network Access ID',
			name: 'networkAccessId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			description: 'Network name, e.g. 123.100.200.0/32',
			displayOptions,
		},
	];
}

/**
 * Executes the Update network allowed on infrastructure firewall operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const networkAccessId = this.getNodeParameter('networkAccessId', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const network = this.getNodeParameter('network', _itemIndex, '') as string;
	if (network !== '') { body.network = network; }
	const data = (await client.httpPut(`/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
