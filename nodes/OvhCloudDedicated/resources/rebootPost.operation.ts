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
			'This will reboot the dedicated server. Running workloads will be interrupted.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Reboot server',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Mode',
			name: 'mode',
			type: 'string',
			default: '',
			required: true,
			description: 'Reboot server',
			displayOptions,
		},
	];
}

/**
 * Reboot server
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/reboot
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const mode = this.getNodeParameter('mode', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (mode) {
		body.mode = mode;
	}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/reboot`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
