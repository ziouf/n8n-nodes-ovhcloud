import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Get detail of a specific VPS disk. */
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

	const data = (await client.httpGet(
		`/vps/${serviceName}/disks/${encodeURIComponent(diskId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
