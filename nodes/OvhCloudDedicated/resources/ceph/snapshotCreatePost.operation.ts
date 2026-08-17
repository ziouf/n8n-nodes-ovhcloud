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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (description !== undefined && description !== '') {
		body.description = description;
	}

	const data = (await client.httpPost(`/dedicated/nasha/${serviceName}/snapshot`, body)) as string;
	return this.helpers.returnJsonArray([{ snapshotId: data }]);
}
