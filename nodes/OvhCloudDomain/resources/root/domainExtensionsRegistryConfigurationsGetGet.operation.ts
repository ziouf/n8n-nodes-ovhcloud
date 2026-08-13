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
 * Executes the Retrieve registry configuration for an extension operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/{name}/registryConfigurations
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const name = this.getNodeParameter('name', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/extensions/${encodeURIComponent(name)}/registryConfigurations`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
