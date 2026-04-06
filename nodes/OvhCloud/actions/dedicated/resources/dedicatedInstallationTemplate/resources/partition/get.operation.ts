/**
 * @brief Get partition properties for a partition scheme
 *
 * Retrieves detailed information for a specific partition:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}` endpoint
 * - Template name, scheme name, and mountpoint parameters are required
 * - Returns partition details
 */
import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

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
		{
			displayName: 'Mountpoint',
			name: 'mountpoint',
			type: 'string',
			default: '',
			required: true,
			description: 'The mountpoint of the partition',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition operation.
 *
 * Retrieves detailed information for a specific partition.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partition details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateName = this.getNodeParameter('templateName', 0) as string;
	const schemeName = this.getNodeParameter('schemeName', 0) as string;
	const mountpoint = this.getNodeParameter('mountpoint', 0) as string;
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`,
	)) as IDataObject;
	return [{ json: data }];
}
