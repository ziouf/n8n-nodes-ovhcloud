import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'Virtual Machine ID',
			name: 'vmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the virtual machine',
			displayOptions,
		},
		{
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the filer where we should restore this Backup',
			displayOptions,
		},
		{
			displayName: 'Filer Type',
			name: 'filerType',
			type: 'options',
			options: [
				{ name: 'Nas', value: 'nas' },
				{ name: 'Vsan', value: 'vsan' },
			],
			default: 'nas',
			description: 'Type of filer where vm will be restored(Default value : nas)',
			displayOptions,
		},
		{
			displayName: 'Restore Point ID',
			name: 'restorePointId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the restorePoint you want to restore',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore backup operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const body: IDataObject = {};
	body.filerId = this.getNodeParameter('filerId', _itemIndex) as number;
	const filerType = this.getNodeParameter('filerType', _itemIndex, '') as string;
	if (filerType !== '') { body.filerType = filerType; }
	body.restorePointId = this.getNodeParameter('restorePointId', _itemIndex) as number;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/restoreBackup`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
