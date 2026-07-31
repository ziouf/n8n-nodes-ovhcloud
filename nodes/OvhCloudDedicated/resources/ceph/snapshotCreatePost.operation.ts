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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Snapshot description',
			placeholder: 'e.g. Before major update',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Snapshot operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/snapshot
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const description = (this.getNodeParameter('description', 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (description !== undefined && description !== '') {
		body.description = description;
	}

	const data = (await client.httpPost(`/dedicated/nasha/${serviceName}/snapshot`, body)) as string;
	return this.helpers.returnJsonArray([{ snapshotId: data }]);
}
