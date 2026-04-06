import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get DNS Zone Option operation
 *
 * Retrieves a specific DNS zone option.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/option/{name}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Option Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the option',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DNS Zone Option operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/option/${name}`)) as IDataObject;
	return [{ json: data }];
}
