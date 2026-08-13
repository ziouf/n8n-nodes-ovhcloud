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
			displayName: 'Commercial Range Name',
			name: 'commercialRangeName',
			type: 'string',
			default: '',
			required: true,
			description: 'The commercial range of this new datacenter. You can see what commercial ranges are orderable on this API section : /dedicatedCloud/commercialRange/.',
			displayOptions,
		},
		{
			displayName: 'vRack Name',
			name: 'vrackName',
			type: 'string',
			default: '',
			description: 'Name of the Vrack link to the new datacenter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create virtual datacenter operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.commercialRangeName = this.getNodeParameter('commercialRangeName', _itemIndex) as string;
	const vrackName = this.getNodeParameter('vrackName', _itemIndex, '') as string;
	if (vrackName !== '') { body.vrackName = vrackName; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
