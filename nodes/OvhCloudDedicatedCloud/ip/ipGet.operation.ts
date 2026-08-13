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
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			description: 'IP ex: 213.186.33.34/24',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP block operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/ip/{network}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const network = this.getNodeParameter('network', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/ip/${encodeURIComponent(network)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
