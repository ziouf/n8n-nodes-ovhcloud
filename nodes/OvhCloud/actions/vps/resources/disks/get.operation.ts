import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'disk.serviceName',
			description:
				'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a service...',
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
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('disk.serviceName', 0, {
		extractValue: true,
	}) as string;
	const id = this.getNodeParameter('disk.diskId', 0, { extractValue: true }) as string;

	const disk = (await client.httpGet(`/vps/${serviceName}/disks/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray(disk);
}
