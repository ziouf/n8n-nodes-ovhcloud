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
			displayName: 'vRack',
			name: 'vrack',
			type: 'string',
			default: '',
			required: true,
			description: 'Vrack name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get vRack operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/vrack/{vrack}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vrack = this.getNodeParameter('vrack', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vrack/${vrack}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
