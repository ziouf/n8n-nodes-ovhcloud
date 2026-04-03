import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function descriptionAutomatedBackupRestore(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to restore from backup. This can be set manually or selected from the list of services.',
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
			displayName: 'Restore Point',
			name: 'restorePoint',
			description: 'The restore point identifier to restore from',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

export async function executeAutomatedBackupRestore(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const restorePoint = this.getNodeParameter('restorePoint', 0) as string;

	const response = (await client.httpPost(`/vps/${serviceName}/automatedBackup/restore`, {
		body: { restorePoint },
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
