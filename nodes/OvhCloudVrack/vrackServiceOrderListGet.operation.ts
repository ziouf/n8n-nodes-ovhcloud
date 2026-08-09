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
			displayName: 'Vrack ID',
			name: 'vrackId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vrackId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get ListServiceOrders operation.
 *
 * HTTP method: GET
 * Endpoint: /vrack/{vrackId}/serviceOrder
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackId = this.getNodeParameter('vrackId', _itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack/' + vrackId + '/serviceOrder')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
