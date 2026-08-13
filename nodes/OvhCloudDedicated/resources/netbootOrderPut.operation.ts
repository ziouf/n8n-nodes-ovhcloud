import type {
	IExecuteFunctions,
	IDataObject,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Netboot Order',
			name: 'netbootOrder',
			type: 'options',
			default: '',
			description: 'The netboot order to set for the dedicated server',
			options: [
				{ name: 'Harddisk Boot', value: '' },
				{ name: 'Internal Boot', value: 'internal' },
				{ name: 'Network Boot (PXE)', value: 'network' },
				{ name: 'Rescue Mode', value: 'rescue' },
			],
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const netbootOrder = (this.getNodeParameter('netbootOrder', _itemIndex ?? 0) as string) || undefined;

	const body: IDataObject = {};
	if (netbootOrder !== '' && netbootOrder !== undefined) {
		body.bootMode = netbootOrder;
	}

	await client.httpPut(`/dedicated/server/${serviceName}/netboot/order`, body);

	return this.helpers.returnJsonArray([{ ok: true }]);
}
