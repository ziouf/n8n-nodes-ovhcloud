import type {
	IDataObject,
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
 * Executes the Get Get an AllDom resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom/{alldomName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const alldomName = this.getNodeParameter('alldomName', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain/alldom/' + alldomName)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
