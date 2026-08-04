import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

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
			displayName: 'Short Name',
			name: 'shortName',
			type: 'string',
			default: '',
			required: true,
			description: 'Short name of the hypervisor',
			displayOptions,
		},
	];
}

/**
 * Executes the Get hypervisor operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/location/hypervisor/{shortName}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const shortName = this.getNodeParameter('shortName', itemIndex) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/location/hypervisor/${shortName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
