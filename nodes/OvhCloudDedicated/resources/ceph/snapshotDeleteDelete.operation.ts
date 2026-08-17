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
		{
			displayName: 'Snapshot ID',
			name: 'snapshotId',
			type: 'string',
			default: '',
			required: true,
			description: 'The snapshot identifier to delete',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Snapshot operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/nasha/{serviceName}/snapshot/{snapshotId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const snapshotId = (this.getNodeParameter('snapshotId', _itemIndex ?? 0) as string) || '';
	await client.httpDelete(`/dedicated/nasha/${serviceName}/snapshot/${snapshotId}`);
	return this.helpers.returnJsonArray([{ snapshotId, success: true }]);
}
