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
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Request Body',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a SAP Pre-installation Task operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/sap
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const bodyRaw = this.getNodeParameter('body', _itemIndex, '{}') as string;
	const body = JSON.parse(bodyRaw || '{}') as IDataObject;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/sap`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
