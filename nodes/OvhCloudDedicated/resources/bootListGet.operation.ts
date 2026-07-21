import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;

	const bootType = (this.getNodeParameter('bootType', itemIndex) as string) || undefined;

	if (!bootType) {
		const data = (await client.httpGet(`/dedicated/server/${serviceName}/boot`)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	}

	const qs: IDataObject = { bootType } as unknown as IDataObject;
	const data = (await client.httpGet(`/dedicated/server/${serviceName}/boot`, qs)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
