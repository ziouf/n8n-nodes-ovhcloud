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
			displayName: 'Group ID',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The groupId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Put Update an existing resource group operation.
 *
 * HTTP method: PUT
 * Endpoint: /iam/resourceGroup/{groupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const groupId = this.getNodeParameter('groupId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/iam/resourceGroup/' + groupId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
