/**
 * @brief Get partition scheme properties for a Dedicated Installation Template
 *
 * Retrieves detailed information for a specific partition scheme:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}` endpoint
 * - Template name and scheme name parameters are required
 * - Returns partition scheme details
 */
import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Template Name',
			name: 'templateName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the installation template',
			displayOptions,
		},
		{
			displayName: 'Scheme Name',
			name: 'schemeName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the partition scheme',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition Scheme operation.
 *
 * Retrieves detailed information for a specific partition scheme.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partition scheme details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateName = this.getNodeParameter('templateName', 0) as string;
	const schemeName = this.getNodeParameter('schemeName', 0) as string;
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}`,
	)) as IDataObject;
	return [{ json: data }];
}
