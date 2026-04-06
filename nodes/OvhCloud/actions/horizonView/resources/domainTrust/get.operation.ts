import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a specific domain trust.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Domain Trust ID',
			name: 'domainTrustId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the domain trust',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Domain Trust operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', 0) as string;
	const data = (await client.httpGet(
		`/horizonView/${serviceName}/domainTrust/${domainTrustId}`,
	)) as IDataObject;
	return [{ json: data }];
}
