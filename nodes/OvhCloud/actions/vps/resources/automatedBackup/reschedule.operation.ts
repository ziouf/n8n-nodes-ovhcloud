import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function descriptionAutomatedBackupReschedule(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to reschedule backup for. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'New Schedule Time',
			name: 'scheduleTime',
			description: 'The new schedule time for the automated backup (e.g., 02:00)',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

export async function executeAutomatedBackupReschedule(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const scheduleTime = this.getNodeParameter('scheduleTime', 0) as string;

	const response = (await client.httpPost(`/vps/${serviceName}/automatedBackup/reschedule`, {
		body: { schedule: scheduleTime },
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
