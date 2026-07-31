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
			displayName: 'policy Id',
			name: 'policyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The policyId identifier',
		},

	];
}

/**
 * Executes the Put Update an existing policy operation.
 *
 * HTTP method: PUT
 * Endpoint: /iam/policy/{policyId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const policyId = this.getNodeParameter('policyId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/iam/policy/' + policyId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
