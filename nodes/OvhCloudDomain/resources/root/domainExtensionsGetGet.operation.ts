import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get an extension operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const name = this.getNodeParameter('name', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/extensions/${encodeURIComponent(name)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
