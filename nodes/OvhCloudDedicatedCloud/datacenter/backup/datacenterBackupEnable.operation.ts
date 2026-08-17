import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
			displayName: 'Backup Offer',
			name: 'backupOffer',
			type: 'options',
			options: [
				{ name: 'Advanced', value: 'advanced' },
				{ name: 'Backup', value: 'backup' },
				{ name: 'Classic', value: 'classic' },
				{ name: 'Legacy', value: 'legacy' },
				{ name: 'Premium', value: 'premium' },
			],
			default: 'advanced',
			description: 'Backup offer type',
			displayOptions,
		},
	];
}

/**
 * Executes the Enable Backup Option operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const backupOffer = this.getNodeParameter('backupOffer', _itemIndex, '') as string; if (backupOffer !== '') { body.backupOffer = backupOffer; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/enable`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
