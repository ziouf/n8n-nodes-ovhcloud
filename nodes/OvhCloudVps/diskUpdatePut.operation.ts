import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Update a specific VPS disk (resize or rename). */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const diskId = this.getNodeParameter('diskId', itemIndex ?? 0) as string;

	const body: IDataObject = {};
	try {
		const nameParam = (this.getNodeParameter('name', itemIndex ?? 0) ?? '') as string;
		if (nameParam) body.name = nameParam;
	} catch {
		/* name is optional */
	}
	try {
		const sizeParam = this.getNodeParameter('sizeInGB', itemIndex ?? 0, 0);
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
