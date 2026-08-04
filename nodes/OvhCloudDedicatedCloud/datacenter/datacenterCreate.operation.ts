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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.commercialRangeName = this.getNodeParameter('commercialRangeName', itemIndex) as string;
	const vrackName = this.getNodeParameter('vrackName', itemIndex, '') as string;
	if (vrackName !== '') { body.vrackName = vrackName; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
