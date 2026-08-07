import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'List compatible template partition schemes',
			displayOptions,
		},
		{
			displayName: 'Template Name',
			name: 'templateName',
			type: 'string',
			default: '',
			required: true,
			description: 'Template name to filter by',
			displayOptions,
		},
	];
}

/**
 * List compatible template partition schemes
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const templateName = this.getNodeParameter('templateName', itemIndex) as string;

	const qs: IDataObject = {};
	if (templateName) {
		qs.templateName = templateName;
	}

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/install/compatibleTemplatePartitionSchemes`,
		{ qs },
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
