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
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vrack = this.getNodeParameter('vrack', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vrack/${vrack}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
