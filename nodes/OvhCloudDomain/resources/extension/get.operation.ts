import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Extension operation
 *
 * Retrieves details of a specific domain extension.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/{name}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Extension Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the extension (e.g., .com, .fr)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Extension operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', 0) as string;

	const data = (await client.httpGet(`/domain/extensions/${name}`)) as IDataObject;
	return [{ json: data }];
}
