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
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
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
			displayName: 'Brand Name',
			name: 'brandName',
			type: 'string',
			default: '',
			description: 'Brand name of the modem',
			displayOptions,
		},
		{
			displayName: 'Easy Firewall Level',
			name: 'easyFirewallLevel',
			type: 'options',
			default: "blockAll",
			options: [
				{ name: 'Block All', value: 'blockAll' },
				{ name: 'Disabled', value: 'disabled' },
				{ name: 'Normal', value: 'normal' },
			],
			description: 'Easy firewall level of the modem',
			displayOptions,
		},
		{
			displayName: 'IPv6 Support',
			name: 'ipv6Support',
			type: 'options',
			default: "disabled",
			options: [
				{ name: 'Disabled', value: 'disabled' },
				{ name: 'Enabled', value: 'enabled' },
				{ name: 'SLAAC', value: 'slaac' },
			],
			description: 'IPv6 support mode of the modem',
			displayOptions,
		},
	];
}

/**
 * Modify the modem properties associated with an xDSL service.
 *
 * HTTP method: PUT
 * Endpoint: /xdsl/{serviceName}/modem
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const brandName = (this.getNodeParameter('brandName', 0, '') as string) || '';
	const easyFirewallLevel = (this.getNodeParameter('easyFirewallLevel', 0, '') as string) || '';
	const ipv6Support = (this.getNodeParameter('ipv6Support', 0, '') as string) || '';

	const body: IDataObject = {};
	if (brandName) body.brandName = brandName;
	if (easyFirewallLevel) body.easyFirewallLevel = easyFirewallLevel;
	if (ipv6Support) body.ipv6Support = ipv6Support;

	const data = (await client.httpPut(`/xdsl/${encodeURIComponent(serviceName)}/modem`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
