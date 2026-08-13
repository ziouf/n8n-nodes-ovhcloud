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
			'This will permanently terminate the dedicated server. This action is irreversible.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Terminate server',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
	];
}

/**
 * Terminate server
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/terminate`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
