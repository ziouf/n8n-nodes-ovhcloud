import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Nutanix Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Nutanix cluster service name (e.g. nutanix-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNutanixServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'nutanix-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Control Panel URL',
			name: 'controlPanelURL',
			type: 'string',
			default: '',
			required: true,
			description: 'The control panel URL for the cluster',
			displayOptions,
		},
		{
			displayName: 'Dataservice Ip',
			name: 'dataserviceIp',
			type: 'string',
			default: '',
			required: true,
			description: 'The dataservice IP address',
			displayOptions,
		},
		{
			displayName: 'Erasure Coding',
			name: 'erasureCoding',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether erasure coding is enabled',
			displayOptions,
		},
		{
			displayName: 'Gateway Cidr',
			name: 'gatewayCidr',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal gateway IP block with mask',
			displayOptions,
		},
		{
			displayName: 'Infra Vlan Number',
			name: 'infraVlanNumber',
			type: 'number',
			default: 0,
			required: true,
			description: 'The infra-VLAN number',
			displayOptions,
		},
		{
			displayName: 'Ipfo',
			name: 'ipfo',
			type: 'string',
			default: '',
			required: true,
			description: 'The external gateway IP block with mask',
			displayOptions,
		},
		{
			displayName: 'Iplb',
			name: 'iplb',
			type: 'string',
			default: '',
			required: true,
			description: 'The IPLB ID',
			displayOptions,
		},
		{
			displayName: 'License',
			name: 'license',
			type: 'string',
			default: '',
			required: true,
			description: 'The cluster license',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The cluster name',
			displayOptions,
		},
		{
			displayName: 'Prism Element Vip',
			name: 'prismElementVip',
			type: 'string',
			default: '',
			required: true,
			description: 'The Prism Element VIP address',
			displayOptions,
		},
		{
			displayName: 'Prism Secret ID',
			name: 'prismSecretId',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'The UUID for the secret',
			displayOptions,
		},
		{
			displayName: 'Rack Awareness',
			name: 'rackAwareness',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether rack awareness is enabled',
			displayOptions,
		},
		{
			displayName: 'Redundancy Factor',
			name: 'redundancyFactor',
			type: 'number',
			default: 2,
			required: true,
			description: 'The redundancy factor for the cluster (2 or 3)',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The AOS version',
			displayOptions,
		},
		{
			displayName: 'Vrack',
			name: 'vrack',
			type: 'string',
			default: '',
			required: true,
			description: 'The vRack name',
			displayOptions,
		},
		{
			displayName: 'Redeploycluster',
			name: 'redeploycluster',
			type: 'boolean',
			default: false,
			description: 'Whether the cluster will be reinstalled',
			displayOptions,
		},
		{
			displayName: 'Scale Out',
			name: 'scaleOut',
			type: 'boolean',
			default: false,
			description: 'Whether the cluster will be scaled out',
			displayOptions,
		},
	];
}

/**
 * Update the configuration of a Nutanix cluster.
 *
 * HTTP method: PUT
 * Endpoint: /nutanix/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const redeploycluster = this.getNodeParameter('redeploycluster', _itemIndex ?? 0, false) as boolean;
	const scaleOut = this.getNodeParameter('scaleOut', _itemIndex ?? 0, false) as boolean;
	const controlPanelURL = (this.getNodeParameter('controlPanelURL', _itemIndex ?? 0, '') as string) || '';
	const dataserviceIp = (this.getNodeParameter('dataserviceIp', _itemIndex ?? 0, '') as string) || '';
	const erasureCoding = this.getNodeParameter('erasureCoding', _itemIndex ?? 0, true) as boolean;
	const gatewayCidr = (this.getNodeParameter('gatewayCidr', _itemIndex ?? 0, '') as string) || '';
	const infraVlanNumber = this.getNodeParameter('infraVlanNumber', _itemIndex ?? 0, 0) as number;
	const ipfo = (this.getNodeParameter('ipfo', _itemIndex ?? 0, '') as string) || '';
	const iplb = (this.getNodeParameter('iplb', _itemIndex ?? 0, '') as string) || '';
	const license = (this.getNodeParameter('license', _itemIndex ?? 0, '') as string) || '';
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') as string) || '';
	const prismElementVip = (this.getNodeParameter('prismElementVip', _itemIndex ?? 0, '') as string) || '';
	const prismSecretId = (this.getNodeParameter('prismSecretId', _itemIndex ?? 0, '') as string) || '';
	const rackAwareness = this.getNodeParameter('rackAwareness', _itemIndex ?? 0, true) as boolean;
	const redundancyFactor = this.getNodeParameter('redundancyFactor', _itemIndex ?? 0, 2) as number;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') as string) || '';
	const vrack = (this.getNodeParameter('vrack', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (redeploycluster !== undefined) qs.redeploycluster = redeploycluster;
	if (scaleOut !== undefined) qs.scaleOut = scaleOut;

	const body: IDataObject = {};
	if (controlPanelURL) body.controlPanelURL = controlPanelURL;
	if (dataserviceIp) body.dataserviceIp = dataserviceIp;
	if (erasureCoding !== undefined) body.erasureCoding = erasureCoding;
	if (gatewayCidr) body.gatewayCidr = gatewayCidr;
	if (infraVlanNumber !== undefined) body.infraVlanNumber = infraVlanNumber;
	if (ipfo) body.ipfo = ipfo;
	if (iplb) body.iplb = iplb;
	if (license) body.license = license;
	if (name) body.name = name;
	if (prismElementVip) body.prismElementVip = prismElementVip;
	if (prismSecretId) body.prismSecretId = prismSecretId;
	if (rackAwareness !== undefined) body.rackAwareness = rackAwareness;
	if (redundancyFactor !== undefined) body.redundancyFactor = redundancyFactor;
	if (version) body.version = version;
	if (vrack) body.vrack = vrack;
	await client.httpPut(`/nutanix/${encodeURIComponent(serviceName)}`, body, qs);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
