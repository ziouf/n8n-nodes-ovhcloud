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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.name = this.getNodeParameter('name', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/iam/addRole`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
