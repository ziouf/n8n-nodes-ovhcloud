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
	];
}

/**
 * Executes the Check if Aria Operations Can Be Enabled operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/vrops/canBeEnabled
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vrops/canBeEnabled`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
