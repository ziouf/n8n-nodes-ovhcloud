import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter the value of name property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}

/**
 * List of actions scheduled for this device.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/{serviceName}/device/actions
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') as string) || '';
	const status = (this.getNodeParameter('status', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (name) qs.name = name;
	if (status) qs.status = status;
	const data = (await client.httpGet(
		`/overTheBox/${encodeURIComponent(serviceName)}/device/actions`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { actionId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
