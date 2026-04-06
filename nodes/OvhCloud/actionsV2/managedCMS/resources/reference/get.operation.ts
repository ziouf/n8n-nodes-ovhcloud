import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific Managed CMS reference.
 *
 * HTTP method: GET
 * Endpoint: /v2/managedCMS/reference/{referenceId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Reference ID',
			name: 'referenceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the reference',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Managed CMS Reference operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const referenceId = this.getNodeParameter('referenceId', 0) as string;
	const data = (await client.httpGet(`/v2/managedCMS/reference/${referenceId}`)) as IDataObject;
	return [{ json: data }];
}
