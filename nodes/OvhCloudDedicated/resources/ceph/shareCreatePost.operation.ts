import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Nasha Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Nasha (NAS) service name (e.g. ns12345678.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'nashaListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns12345678.ovh.net',
				},
			],
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const snapshotId = (this.getNodeParameter('snapshotId', 0) as string) || '';
	const subPath = (this.getNodeParameter('subPath', 0, '/') as string) || '/';

	const body: IDataObject = { snapshotId, subPath };
	const data = (await client.httpPost(`/dedicated/nasha/${serviceName}/share`, body)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
