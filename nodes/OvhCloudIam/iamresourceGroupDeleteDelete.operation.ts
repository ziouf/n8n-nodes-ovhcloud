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
			displayName: 'Group ID',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'Resource group ID',
			displayOptions,
		},

	];
}

/**
 * Executes the Delete Delete the given resource group operation.
 *
 * HTTP method: DELETE
 * Endpoint: /iam/resourceGroup/{groupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const groupId = this.getNodeParameter('groupId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/iam/resourceGroup/' + groupId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
