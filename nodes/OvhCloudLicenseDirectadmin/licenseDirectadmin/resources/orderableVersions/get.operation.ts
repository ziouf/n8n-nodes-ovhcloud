import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get orderable Directadmin versions.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin/orderableVersions
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Your license IP',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Orderable Versions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpGet('/license/directadmin/orderableVersions', {
		qs: { ip },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
