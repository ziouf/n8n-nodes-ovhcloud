import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the NetApp storage service. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate service operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
		`/storage/netapp/${encodeURIComponent(serviceName)}/terminate`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
