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
			displayName: 'Mtu Auto',
			name: 'mtuAuto',
			type: 'options',
			default: 'disabled',
			options: [
				{ name: 'Disabled', value: 'disabled' },
				{ name: 'Enabled', value: 'enabled' },
			],
			required: true,
			description: 'Enable or disable autoMTU',
			displayOptions,
		},
	];
}

/**
 * Change the value of autoMTU.
 *
 * HTTP method: PUT
 * Endpoint: /overTheBox/{serviceName}/autoMTU
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const mtuAuto = (this.getNodeParameter('mtuAuto', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (mtuAuto) body.mtuAuto = mtuAuto;
	await client.httpPut(`/overTheBox/${encodeURIComponent(serviceName)}/autoMTU`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
