import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief Get Dedicated Installation Template operation for DedicatedInstallationTemplate resource
 *
 * Retrieves detailed information for a specific Dedicated Installation Template:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}` endpoint
 * - Template name parameter is required
 * - Returns template details
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Template Name',
			name: 'templateName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the template name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedInstallationTemplates',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Dedicated Installation Template operation.
 *
 * Retrieves detailed information for a specific Dedicated Installation Template.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing template details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: templateName } = this.getNodeParameter('templateName', 0, {
		extractValue: true,
	}) as { value: string };
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}`,
	)) as IDataObject;
	return [{ json: data }];
}
