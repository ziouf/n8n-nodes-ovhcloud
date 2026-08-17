import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
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
			displayName: 'Boot Type Filter',
			name: 'bootType',
			type: 'options',
			default: '',
			description: 'Filter netboots by boot type',
			options: [
				{ name: 'Hardware', value: '' },
				{ name: 'Hardware Boot', value: 'hardware' },
				{ name: 'Netboot', value: 'netboot' },
				{ name: 'Rescue', value: 'rescue' },
			],
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;

	const bootType = (this.getNodeParameter('bootType', _itemIndex) as string) || undefined;

	if (!bootType) {
		const data = (await client.httpGet(`/dedicated/server/${serviceName}/boot`)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	}

	const qs: IDataObject = { bootType } as unknown as IDataObject;
	const data = (await client.httpGet(`/dedicated/server/${serviceName}/boot`, qs)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
