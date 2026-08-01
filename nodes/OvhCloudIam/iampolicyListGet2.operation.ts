import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Policy ID',
			name: 'policyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The policyId identifier',
		},

	];
}

/**
 * Executes the Get Retrieve the given policy operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/policy/{policyId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const policyId = this.getNodeParameter('policyId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/iam/policy/' + policyId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
