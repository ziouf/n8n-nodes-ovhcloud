import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific backup service VSPC.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices/vspc/{vspcId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VSPC ID',
			name: 'vspcId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the VSPC',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Backup Service VSPC operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const vspcId = this.getNodeParameter('vspcId', 0) as string;
	const data = (await client.httpGet(`/v2/backupServices/vspc/${vspcId}`)) as IDataObject;
	return [{ json: data }];
}
