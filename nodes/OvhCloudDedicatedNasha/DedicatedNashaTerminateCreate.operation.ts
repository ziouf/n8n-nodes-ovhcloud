import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { destructiveActionNotice } from '../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the NAS-HA service. This action is irreversible.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedNashaServices',
				displayName: 'Service Name',
				description: 'The internal name of your storage',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
	];
}

/**
 * Ask for the termination of your service
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpPost(
		'/dedicated/nasha/' + encodeURIComponent(serviceName) + '/terminate',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
