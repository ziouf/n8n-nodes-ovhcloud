import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update service information for an MS service.
 * HTTP method: PUT
 * Endpoint: /msServices/sharepoint/{domain}/serviceInfos
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The SharePoint domain',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [],
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut(`/msServices/sharepoint/${domain}/serviceInfos`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}
