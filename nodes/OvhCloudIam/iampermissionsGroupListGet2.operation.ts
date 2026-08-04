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
			displayName: 'Permissions Group U R N',
			name: 'permissionsGroupURN',
			type: 'string',
			default: '',
			required: true,
			description: 'The permissionsGroupURN identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get Retrieve the given permissions group operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/permissionsGroup/{permissionsGroupURN}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const permissionsGroupURN = this.getNodeParameter('permissionsGroupURN', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/iam/permissionsGroup/' + permissionsGroupURN)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
