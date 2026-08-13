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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Role name, e.g. mygroup',
			displayOptions,
		},
	];
}

/**
 * Executes the Create IAM Role operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/iam/addRole
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.name = this.getNodeParameter('name', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/iam/addRole`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
