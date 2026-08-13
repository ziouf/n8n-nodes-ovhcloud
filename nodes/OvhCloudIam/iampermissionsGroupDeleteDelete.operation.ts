import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

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
 * Executes the Delete Delete the given permissions group operation.
 *
 * HTTP method: DELETE
 * Endpoint: /iam/permissionsGroup/{permissionsGroupURN}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const permissionsGroupURN = this.getNodeParameter('permissionsGroupURN', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/iam/permissionsGroup/' + permissionsGroupURN)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
