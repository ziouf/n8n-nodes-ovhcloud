import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function descriptionDisksUpdate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'disk.serviceName',
			description:
				'The name of the VPS service that contains the disk. This can be set manually or selected from the list of services.',
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
			displayName: 'Disk ID',
			name: 'disk.diskId',
			type: 'string',
			required: true,
			default: '',
			description: 'The unique identifier of the disk to update',
			displayOptions,
		},
		{
			displayName: 'Properties',
			name: 'disk.properties',
			description: 'Disk properties to update (JSON object)',
			type: 'json',
			default: '{}',
			displayOptions,
		},
	];
}

export async function executeDisksUpdate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, { extractValue: true }) as string;
	const diskId = this.getNodeParameter('disk.diskId', 0) as string;
	const propertiesStr = this.getNodeParameter('disk.properties', 0, '{}') as string;

	let body: IDataObject = {};
	try {
		body = JSON.parse(propertiesStr) as IDataObject;
	} catch {
		// Use empty body if JSON is invalid
	}

	await client.httpPut(`/vps/${serviceName}/disks/${diskId}`, { body });

	const disk = (await client.httpGet(`/vps/${serviceName}/disks/${diskId}`)) as IDataObject;
	return this.helpers.returnJsonArray(disk);
}
