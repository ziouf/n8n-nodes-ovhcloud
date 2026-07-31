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
			displayName: 'permissions Group U R N',
			name: 'permissionsGroupURN',
			type: 'string',
			default: '',
			required: true,
			description: 'The permissionsGroupURN identifier',
		},

	];
}

/**
 * Executes the Put Update a permissions group operation.
 *
 * HTTP method: PUT
 * Endpoint: /iam/permissionsGroup/{permissionsGroupURN}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const permissionsGroupURN = this.getNodeParameter('permissionsGroupURN', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/iam/permissionsGroup/' + permissionsGroupURN, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
