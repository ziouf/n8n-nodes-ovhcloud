import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
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
			description: 'The snapshot from which to create the share',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
		{
			displayName: 'SubPath',
			name: 'subPath',
			type: 'string',
			default: '/',
			description: 'The subpath within the snapshot to share',
			placeholder: 'e.g. /data',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Share operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/share
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const snapshotId = (this.getNodeParameter('snapshotId', _itemIndex ?? 0) as string) || '';
	const subPath = (this.getNodeParameter('subPath', _itemIndex ?? 0, '/') as string) || '/';

	const body: IDataObject = { snapshotId, subPath };
	const data = (await client.httpPost(`/dedicated/nasha/${serviceName}/share`, body)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
