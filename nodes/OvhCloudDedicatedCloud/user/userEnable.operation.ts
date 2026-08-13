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
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Enable user operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/enable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user/${userId}/enable`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
