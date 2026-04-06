/**
 * @brief Get hardware RAID properties for a partition scheme
 *
 * Retrieves detailed information for a specific hardware RAID configuration:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}` endpoint
 * - Template name, scheme name, and RAID name parameters are required
 * - Returns hardware RAID details
 */
import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hardware RAID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Hardware RAID operation.
 *
 * Retrieves detailed information for a specific hardware RAID configuration.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing hardware RAID details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateName = this.getNodeParameter('templateName', 0) as string;
	const schemeName = this.getNodeParameter('schemeName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`,
	)) as IDataObject;
	return [{ json: data }];
}
