import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Remote Access ID',
			name: 'remoteAccessId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the remote access',
			displayOptions,
		},
	];
}

/**
 * Get the properties of a remote access.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const remoteAccessId = this.getNodeParameter('remoteAccessId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/overTheBox/${encodeURIComponent(serviceName)}/remoteAccesses/${encodeURIComponent(remoteAccessId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
