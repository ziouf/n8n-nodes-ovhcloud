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
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'vLAN ID',
			name: 'vlanId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get vLAN operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/vlan/{vlanId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vlanId = this.getNodeParameter('vlanId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vlan/${vlanId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
