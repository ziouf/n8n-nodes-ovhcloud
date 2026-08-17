import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Reschedule a specific automated backup for the VPS. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The identifier of the backup to reschedule',
			placeholder: '1234567890',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const backupId = this.getNodeParameter('backupId', itemIndex ?? 0) as string;

	const body: IDataObject = { id: backupId };
	const data = (await client.httpPost(
		`/vps/${serviceName}/automatedBackup/reschedule`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
