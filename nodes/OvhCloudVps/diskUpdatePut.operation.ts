import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Update a specific VPS disk (resize or rename). */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The VPS service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'vps1234567.ovh.net' },
			],
			displayOptions,
		},
		{
			displayName: 'Disk ID',
			name: 'diskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The disk identifier (e.g. primary)',
			placeholder: 'primary',
			displayOptions,
		},
		{
			displayName: 'New Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The new name for the disk (optional)',
			placeholder: 'primary',
			displayOptions,
		},
		{
			displayName: 'Size In GB',
			name: 'sizeInGB',
			type: 'number',
			default: 0,
			description: 'The new size of the disk in GB (optional)',
			placeholder: '25',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', {
		extractValue: true,
	}) as string;
	const diskId = this.getNodeParameter('diskId', itemIndex!) as string;

	const body: IDataObject = {};
	try {
		const nameParam = (this.getNodeParameter('name', itemIndex!) ?? '') as string;
		if (nameParam) body.name = nameParam;
	} catch {
		/* name is optional */
	}
	try {
		const sizeParam = this.getNodeParameter('sizeInGB', itemIndex!, 0);
		if ((sizeParam as number) > 0) body.sizeInGB = sizeParam as number;
	} catch {
		/* sizeInGB is optional */
	}

	const data = (await client.httpPost(
		`/vps/${serviceName}/disks/${encodeURIComponent(diskId)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
