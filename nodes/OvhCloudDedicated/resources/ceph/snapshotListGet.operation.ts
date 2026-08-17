import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'nashaListGet',
						displayName: 'Nasha Service Name',
						description: 'The Nasha (NAS) service name (e.g. ns12345678.ovh.net)',
						placeholder: 'ns12345678.ovh.net',
					}),
					displayOptions,
				},
	];
}

/**
 * Executes the List Snapshots operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/snapshot
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/dedicated/nasha/${serviceName}/snapshot`)) as string[];
	return this.helpers.returnJsonArray(data.map((snapshotId) => ({ snapshotId })));
}
