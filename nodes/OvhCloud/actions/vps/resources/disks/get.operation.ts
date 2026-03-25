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
			name: 'serviceName',
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
			displayName: 'Operation',
			name: 'vpsDisksOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Disks',
					value: 'list',
					action: 'Get all disks of a VPS',
				},
				{
					name: 'Get Disk',
					value: 'get',
					action: 'Get details of a disk of a VPS',
				},
			],
			default: 'list',
			displayOptions,
		},
		{
			displayName: 'Disk ID',
			name: 'diskId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const operation = this.getNodeParameter('vpsDisksOperation', 0, { extractValue: true }) as string;
	const id = this.getNodeParameter('diskId', 0, { extractValue: true }) as string;

	switch (operation) {
		case 'list':
			const disks = (await client.httpGet(`/vps/${serviceName}/disks`)) as IDataObject[];
			return disks.map((item) => ({ json: item }));
		case 'get':
			const disk = (await client.httpGet(`/vps/${serviceName}/disks/${id}`)) as IDataObject;
			return [{ json: disk }];
	}

	throw new Error('Invalid operation for VPS Disks resource');
}
