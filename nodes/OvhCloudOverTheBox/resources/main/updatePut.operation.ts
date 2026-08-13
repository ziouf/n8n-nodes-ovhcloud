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
			displayName: 'Auto Upgrade',
			name: 'autoUpgrade',
			type: 'boolean',
			default: false,
			description: 'Whether device auto upgrade is enabled',
			displayOptions,
		},
		{
			displayName: 'Customer Description',
			name: 'customerDescription',
			type: 'string',
			default: '',
			description: 'Editable field for customer',
			displayOptions,
		},
		{
			displayName: 'Release Channel',
			name: 'releaseChannel',
			type: 'string',
			default: '',
			description: 'Release channel of the service',
			displayOptions,
		},
	];
}

/**
 * Alter the properties of an OverTheBox service.
 *
 * HTTP method: PUT
 * Endpoint: /overTheBox/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const autoUpgrade = this.getNodeParameter('autoUpgrade', _itemIndex ?? 0, false) as boolean;
	const customerDescription = (this.getNodeParameter('customerDescription', _itemIndex ?? 0, '') as string) || '';
	const releaseChannel = (this.getNodeParameter('releaseChannel', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (autoUpgrade !== undefined) body.autoUpgrade = autoUpgrade;
	if (customerDescription) body.customerDescription = customerDescription;
	if (releaseChannel) body.releaseChannel = releaseChannel;
	await client.httpPut(`/overTheBox/${encodeURIComponent(serviceName)}`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
