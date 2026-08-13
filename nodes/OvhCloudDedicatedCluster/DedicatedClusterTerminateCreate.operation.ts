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
			'This will permanently terminate the dedicated cluster. This action is irreversible.',
			displayOptions,
		),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedClusterServices',
				displayName: 'Service Name',
				description: 'Service name',
				placeholder: 'cluster-12345',
			}),
			displayOptions,
		},
	];
}

/**
 * Ask for the termination of your service
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpPost(
		'/dedicated/cluster/' + encodeURIComponent(serviceName) + '/terminate',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
