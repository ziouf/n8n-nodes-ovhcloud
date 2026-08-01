import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Alldom Name',
			name: 'alldomName',
			type: 'string',
			default: '',
			required: true,
			description: 'The alldomName identifier',
		},

	];
}

/**
 * Executes the Get List tasks related to a managed AllDom resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom/{alldomName}/task
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const alldomName = this.getNodeParameter('alldomName', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain/alldom/' + alldomName + '/task')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
