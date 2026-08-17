import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID parameter',
			displayOptions,
		},
	];
}

/**
 * Update a specific VPS disk
 *
 * HTTP method: PUT
 * Endpoint: /vps/{serviceName}/disks/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const id = this.getNodeParameter('id', itemIndex ?? 0) as string;

	const data = (await client.httpPut(`/vps/${serviceName}/disks/${id}`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
