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
			displayOptions,
		},
	];
}

/**
 * Executes the Get GetLogKind operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/log/kind/{name}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/log/kind/${encodeURIComponent(name)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
