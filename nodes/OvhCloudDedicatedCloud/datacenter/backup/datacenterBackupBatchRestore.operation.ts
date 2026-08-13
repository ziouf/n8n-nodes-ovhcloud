import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
			displayName: 'Backup Job Name',
			name: 'backupJobName',
			type: 'string',
			default: '',
			description: 'The backup job name pcc-XXX-XXX-XXX-XXX_vm-XXX if you want to restore one single virtual machine. It can be retrieved in the report sent by generateReport.',
			displayOptions,
		},
		{
			displayName: 'Backup Repository Name',
			name: 'backupRepositoryName',
			type: 'string',
			default: '',
			required: true,
			description: 'The backup files location name bkp-XXXXX, it can be retrieved in the report sent by generateReport',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore Backup Jobs in Batch operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const backupJobName = this.getNodeParameter('backupJobName', _itemIndex, '') as string; if (backupJobName !== '') { body.backupJobName = backupJobName; }
	body.backupRepositoryName = this.getNodeParameter('backupRepositoryName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/batchRestore`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
