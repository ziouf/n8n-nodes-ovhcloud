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
			displayName: 'group Id',
			name: 'groupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The groupId identifier',
		},

	];
}

/**
 * Executes the Get Retrieve the given resource group operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/resourceGroup/{groupId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const groupId = this.getNodeParameter('groupId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/iam/resourceGroup/' + groupId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
