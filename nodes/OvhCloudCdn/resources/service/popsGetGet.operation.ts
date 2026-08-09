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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the pop',
			displayOptions,
		},
	];
}

/**
 * Executes the Get GetCdnPop operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/pops/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/pops/${encodeURIComponent(name)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
