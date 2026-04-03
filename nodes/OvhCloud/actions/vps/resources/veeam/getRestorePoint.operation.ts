import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function descriptionVeeamGetRestorePoint(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service. This can be set manually or selected from the list of services.',
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
			displayName: 'Restore Point ID',
			name: 'restorePointId',
			description: 'The ID of the restore point to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

export async function executeVeeamGetRestorePoint(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const restorePointId = this.getNodeParameter('restorePointId', 0) as string;

	const response = (await client.httpGet(`/vps/${serviceName}/veeam/restorePoints/${restorePointId}`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
