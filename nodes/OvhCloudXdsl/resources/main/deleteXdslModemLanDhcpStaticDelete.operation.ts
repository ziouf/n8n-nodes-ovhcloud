import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The xdsl service name (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Lan ID',
			name: 'lanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Lan ID parameter',
			displayOptions,
		},
		{
			displayName: 'Dhcp ID',
			name: 'dhcpId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Dhcp ID parameter',
			displayOptions,
		},
		{
			displayName: 'Static ID',
			name: 'staticId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Static ID parameter',
			displayOptions,
		},
	];
}

/**
 * Delete a DHCP static address
 *
 * HTTP method: DELETE
 * Endpoint: /xdsl/{serviceName}/modem/lan/{lanId}/dhcp/{dhcpId}/DHCPStaticAddresses/{staticId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const lanId = this.getNodeParameter('lanId', _itemIndex ?? 0) as string;
	const dhcpId = this.getNodeParameter('dhcpId', _itemIndex ?? 0) as string;
	const staticId = this.getNodeParameter('staticId', _itemIndex ?? 0) as string;

	const data = (await client.httpDelete(`/xdsl/${encodeURIComponent(serviceName)}/modem/lan/${lanId}/dhcp/${dhcpId}/DHCPStaticAddresses/${staticId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
