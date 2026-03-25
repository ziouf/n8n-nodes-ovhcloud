import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeAutomatedBackup } from './resources/automatedBackup';
import { execute as executeAvailableUpgrade } from './resources/availableUpgrade';
import { execute as executeBackupftp } from './resources/backupftp';
import { execute as executeDatacenter } from './resources/datacenter';
import { execute as executeDistribution } from './resources/distribution';
import { execute as executeIpCountryAvailable } from './resources/ipCountryAvailable';
import { execute as executeIps } from './resources/ips';
import { execute as executeModels } from './resources/models';
import { execute as executeOption } from './resources/option';
import { execute as executeSecondaryDnsDomains } from './resources/secondaryDnsDomains';
import { execute as executeServiceInfos } from './resources/serviceInfos';
import { executeSnapshotGet } from './resources/snapshot';
import { execute as executeStatus } from './resources/status';
import { execute as executeVps } from './resources/vps';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Sub-Resource',
			name: 'subResource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Automated Backup',
					value: 'automatedBackup',
					action: 'Get automated backup configuration',
				},
				{
					name: 'Available Upgrade',
					value: 'availableUpgrade',
					action: 'Get available upgrades',
				},
				{
					name: 'Backup FTP',
					value: 'backupftp',
					action: 'Get backup FTP configuration',
				},
				{
					name: 'Datacenter',
					value: 'datacenter',
					action: 'Get datacenter information',
				},
				{
					name: 'Distribution',
					value: 'distribution',
					action: 'Get OS distribution',
				},
				{
					name: 'IP Country Available',
					value: 'ipCountryAvailable',
					action: 'Get available IP countries',
				},
				{
					name: 'IPs',
					value: 'ips',
					action: 'List IP addresses',
				},
				{
					name: 'Models',
					value: 'models',
					action: 'List VPS models',
				},
				{
					name: 'Option',
					value: 'option',
					action: 'Get options',
				},
				{
					name: 'Secondary DNS Domains',
					value: 'secondaryDnsDomains',
					action: 'List secondary DNS domains',
				},
				{
					name: 'Service Infos',
					value: 'serviceInfos',
					action: 'Get service information',
				},
				{
					name: 'Snapshot',
					value: 'snapshot',
					action: 'Get snapshot',
				},
				{
					name: 'Status',
					value: 'status',
					action: 'Get status',
				},
				{
					name: 'VPS',
					value: 'vps',
					action: 'Get VPS details',
				},
			],
			default: 'status',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const subResource = this.getNodeParameter('subResource', 0, { extractValue: true }) as string;

	switch (subResource) {
		case 'automatedBackup':
			return await executeAutomatedBackup.call(this);
		case 'availableUpgrade':
			return await executeAvailableUpgrade.call(this);
		case 'backupftp':
			return await executeBackupftp.call(this);
		case 'datacenter':
			return await executeDatacenter.call(this);
		case 'distribution':
			return await executeDistribution.call(this);
		case 'ipCountryAvailable':
			return await executeIpCountryAvailable.call(this);
		case 'ips':
			return await executeIps.call(this);
		case 'models':
			return await executeModels.call(this);
		case 'option':
			return await executeOption.call(this);
		case 'secondaryDnsDomains':
			return await executeSecondaryDnsDomains.call(this);
		case 'serviceInfos':
			return await executeServiceInfos.call(this);
		case 'snapshot':
			return await executeSnapshotGet.call(this);
		case 'status':
			return await executeStatus.call(this);
		case 'vps':
			return await executeVps.call(this);
	}

	throw new Error(`Unsupported sub-resource "${subResource}" for VPS resource`);
}
