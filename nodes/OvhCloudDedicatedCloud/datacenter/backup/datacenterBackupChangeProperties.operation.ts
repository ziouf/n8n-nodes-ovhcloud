import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
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
			displayName: 'Backup Duration In Report',
			name: 'backupDurationInReport',
			type: 'boolean',
			default: false,
			description: 'Whether to include the deprecated backup duration in the email report',
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
			required: true,
			description: 'Backup offer type',
			displayOptions,
		},
		{
			displayName: 'Backup Size In Report',
			name: 'backupSizeInReport',
			type: 'boolean',
			default: false,
			description: 'Whether to include the deprecated backup size in the email report',
			displayOptions,
		},
		{
			displayName: 'Disk Size In Report',
			name: 'diskSizeInReport',
			type: 'boolean',
			default: false,
			description: 'Whether to include the deprecated disk size in the email report',
			displayOptions,
		},
		{
			displayName: 'Full Day In Report',
			name: 'fullDayInReport',
			type: 'boolean',
			default: false,
			description: 'Whether to include the deprecated full day in the email report',
			displayOptions,
		},
		{
			displayName: 'Mail Address',
			name: 'mailAddress',
			type: 'string',
			default: '',
			description: 'Unique additional email address for backup daily report',
			displayOptions,
		},
		{
			displayName: 'Restore Point In Report',
			name: 'restorePointInReport',
			type: 'boolean',
			default: false,
			description: 'Whether to include the deprecated restore point number in the email report',
			displayOptions,
		},
		{
			displayName: 'Schedule Hour',
			name: 'scheduleHour',
			type: 'string',
			default: '',
			description: 'Schedule hour for start backup. UTC Timezone.',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Backup Option operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const backupDurationInReport = this.getNodeParameter(
		'backupDurationInReport',
		_itemIndex,
	) as boolean;
	if (backupDurationInReport) {
		body.backupDurationInReport = backupDurationInReport;
	}
	body.backupOffer = this.getNodeParameter('backupOffer', _itemIndex) as string;
	const backupSizeInReport = this.getNodeParameter('backupSizeInReport', _itemIndex) as boolean;
	if (backupSizeInReport) {
		body.backupSizeInReport = backupSizeInReport;
	}
	const diskSizeInReport = this.getNodeParameter('diskSizeInReport', _itemIndex) as boolean;
	if (diskSizeInReport) {
		body.diskSizeInReport = diskSizeInReport;
	}
	const fullDayInReport = this.getNodeParameter('fullDayInReport', _itemIndex) as boolean;
	if (fullDayInReport) {
		body.fullDayInReport = fullDayInReport;
	}
	const mailAddress = this.getNodeParameter('mailAddress', _itemIndex, '') as string;
	if (mailAddress !== '') {
		body.mailAddress = mailAddress;
	}
	const restorePointInReport = this.getNodeParameter('restorePointInReport', _itemIndex) as boolean;
	if (restorePointInReport) {
		body.restorePointInReport = restorePointInReport;
	}
	const scheduleHour = this.getNodeParameter('scheduleHour', _itemIndex, '') as string;
	if (scheduleHour !== '') {
		body.scheduleHour = scheduleHour;
	}
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/changeProperties`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
