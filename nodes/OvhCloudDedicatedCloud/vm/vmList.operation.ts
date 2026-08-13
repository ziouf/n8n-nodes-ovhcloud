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
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the List virtual machines within virtual datacenter operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm`)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
