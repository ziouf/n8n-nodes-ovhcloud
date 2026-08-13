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
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
	];
}

/**
 * Executes the Get network allowed on infrastructure firewall operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const networkAccessId = this.getNodeParameter('networkAccessId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
