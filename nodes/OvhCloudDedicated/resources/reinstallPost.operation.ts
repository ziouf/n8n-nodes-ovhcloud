import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will reinstall the dedicated server, erasing all data on it. This action is irreversible.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Reinstall server',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			required: true,
			description: 'Reinstall server',
			displayOptions,
		},
	];
}

/**
 * Reinstall server
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/reinstall
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const template = this.getNodeParameter('template', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (template) {
		body.template = template;
	}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/reinstall`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
