import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'List compatible template partition schemes',
				placeholder: 'server-12345',
			}),
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const templateName = this.getNodeParameter('templateName', _itemIndex) as string;

	const qs: IDataObject = {};
	if (templateName) {
		qs.templateName = templateName;
	}

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/install/compatibleTemplatePartitionSchemes`,
		{ qs },
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
