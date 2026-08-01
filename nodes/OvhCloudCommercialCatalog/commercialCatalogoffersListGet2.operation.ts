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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
		},

	];
}

/**
 * Executes the Get Get details of an offer operation.
 *
 * HTTP method: GET
 * Endpoint: /commercialCatalog/offers/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/commercialCatalog/offers/' + id)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
