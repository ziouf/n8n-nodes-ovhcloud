import type { IExecuteFunctions, IDataObject, IDisplayOptions, INodeExecutionData, INodeProperties  } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Updates a dedicated server by modifying its name and/or status. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'getDedicatedServerServices',
						displayName: 'Dedicated Server Service Name',
						description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
						placeholder: 'ns123456.ip-123-45-678.eu',
					}),
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
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const serverName = (this.getNodeParameter('serverName', _itemIndex ?? 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (serverName !== undefined && serverName !== '') {
		body.name = serverName;
	}

	const data = (await client.httpPut(`/dedicated/server/${serviceName}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
