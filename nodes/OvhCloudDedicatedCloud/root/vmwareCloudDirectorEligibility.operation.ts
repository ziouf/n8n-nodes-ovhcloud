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
 * Executes the Check PCC Eligibility for VCD Migration operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vmwareCloudDirectorEligibility
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vmwareCloudDirectorEligibility`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
