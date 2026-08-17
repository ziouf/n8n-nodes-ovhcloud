import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for your ACL',
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			description: 'Network name, e.g. 123.100.200.0/32',
			displayOptions,
		},
	];
}

/**
 * Executes the Create network allowed on infrastructure firewall operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	body.network = this.getNodeParameter('network', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/allowedNetwork`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
