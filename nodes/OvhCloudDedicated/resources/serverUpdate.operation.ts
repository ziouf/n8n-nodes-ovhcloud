import type { IExecuteFunctions, IDataObject, IDisplayOptions, INodeExecutionData, INodeProperties  } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Updates a dedicated server by modifying its name and/or status. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Server Name',
			name: 'serverName',
			type: 'string',
			default: '',
			description:
				'The new name for the dedicated server (optional). If not provided, only status can be changed.',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const serverName = (this.getNodeParameter('serverName', _itemIndex ?? 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (serverName !== undefined && serverName !== '') {
		body.name = serverName;
	}

	const data = (await client.httpPut(`/dedicated/server/${serviceName}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
