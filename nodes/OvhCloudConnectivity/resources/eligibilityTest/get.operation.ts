import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get eligibility result by reference.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/eligibility/test
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Eligibility operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const eligibilityReference = this.getNodeParameter('eligibilityReference', 0) as string;
	const data = (await client.httpGet('/connectivity/eligibility/test', {
		eligibilityReference,
	})) as IDataObject;
	return [{ json: data }];
}
