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
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the global datastore',
			displayOptions,
		},
	];
}

/**
 * Executes the Convert datastore to global datastore operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/filer/{filerId}/convertToGlobal
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/filer/${filerId}/convertToGlobal`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
