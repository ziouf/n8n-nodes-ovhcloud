import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific IAM policy.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/policy/{policyId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Policy ID',
			name: 'policyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the policy',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Policy operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const policyId = this.getNodeParameter('policyId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/policy/${policyId}`)) as IDataObject;
	return [{ json: data }];
}
