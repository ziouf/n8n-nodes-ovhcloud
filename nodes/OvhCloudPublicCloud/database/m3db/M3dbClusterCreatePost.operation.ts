import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			description: 'Plan parameter',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Version parameter',
			displayOptions,
		},
		{
			displayName: 'Nodes List',
			name: 'nodesList',
			type: 'string',
			default: '',
			description: 'NodesList parameter',
			displayOptions,
		},
		{
			displayName: 'Nodes Pattern',
			name: 'nodesPattern',
			type: 'string',
			default: '',
			description: 'NodesPattern parameter',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			description: 'NetworkId parameter',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			description: 'SubnetId parameter',
			displayOptions,
		},
		{
			displayName: 'Disk',
			name: 'disk',
			type: 'string',
			default: '',
			description: 'Disk parameter',
			displayOptions,
		},
		{
			displayName: 'Backup',
			name: 'backup',
			type: 'string',
			default: '',
			description: 'Backup parameter',
			displayOptions,
		},
		{
			displayName: 'Backup Time',
			name: 'backupTime',
			type: 'string',
			default: '',
			description: 'BackupTime parameter',
			displayOptions,
		},
		{
			displayName: 'Maintenance Time',
			name: 'maintenanceTime',
			type: 'string',
			default: '',
			description: 'MaintenanceTime parameter',
			displayOptions,
		},
		{
			displayName: 'Ip Restrictions',
			name: 'ipRestrictions',
			type: 'string',
			default: '',
			description: 'IpRestrictions parameter',
			displayOptions,
		},
		{
			displayName: 'Fork From',
			name: 'forkFrom',
			type: 'string',
			default: '',
			description: 'ForkFrom parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new m3db cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3db
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('description', _itemIndex ?? 0)) body.description = this.getNodeParameter('description', _itemIndex ?? 0);
	if (this.getNodeParameter('plan', _itemIndex ?? 0)) body.plan = this.getNodeParameter('plan', _itemIndex ?? 0);
	if (this.getNodeParameter('version', _itemIndex ?? 0)) body.version = this.getNodeParameter('version', _itemIndex ?? 0);
	if (this.getNodeParameter('nodesList', _itemIndex ?? 0)) body.nodesList = this.getNodeParameter('nodesList', _itemIndex ?? 0);
	if (this.getNodeParameter('nodesPattern', _itemIndex ?? 0)) body.nodesPattern = this.getNodeParameter('nodesPattern', _itemIndex ?? 0);
	if (this.getNodeParameter('networkId', _itemIndex ?? 0)) body.networkId = this.getNodeParameter('networkId', _itemIndex ?? 0);
	if (this.getNodeParameter('subnetId', _itemIndex ?? 0)) body.subnetId = this.getNodeParameter('subnetId', _itemIndex ?? 0);
	if (this.getNodeParameter('disk', _itemIndex ?? 0)) body.disk = this.getNodeParameter('disk', _itemIndex ?? 0);
	if (this.getNodeParameter('backup', _itemIndex ?? 0)) body.backup = this.getNodeParameter('backup', _itemIndex ?? 0);
	if (this.getNodeParameter('backupTime', _itemIndex ?? 0)) body.backupTime = this.getNodeParameter('backupTime', _itemIndex ?? 0);
	if (this.getNodeParameter('maintenanceTime', _itemIndex ?? 0)) body.maintenanceTime = this.getNodeParameter('maintenanceTime', _itemIndex ?? 0);
	if (this.getNodeParameter('ipRestrictions', _itemIndex ?? 0)) body.ipRestrictions = this.getNodeParameter('ipRestrictions', _itemIndex ?? 0);
	if (this.getNodeParameter('forkFrom', _itemIndex ?? 0)) body.forkFrom = this.getNodeParameter('forkFrom', _itemIndex ?? 0);

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/m3db`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
