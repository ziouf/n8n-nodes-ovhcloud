import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'AllDom Name',
			name: 'alldomName',
			type: 'string',
			default: '',
			required: true,
			description: 'The alldomName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the List tasks related to a managed AllDom resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom/{alldomName}/task
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const alldomName = this.getNodeParameter('alldomName', _itemIndex) as string;

	const data = (await client.httpGet(
		`/domain/alldom/${encodeURIComponent(alldomName)}/task`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
