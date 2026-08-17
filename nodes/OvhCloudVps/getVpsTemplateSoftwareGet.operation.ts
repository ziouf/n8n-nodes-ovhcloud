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
		{
			displayName: 'Software ID',
			name: 'softwareId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Software ID parameter',
			displayOptions,
		},
	];
}

/**
 * Get software details for a template
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/templates/{id}/software/{softwareId}
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
	const softwareId = this.getNodeParameter('softwareId', itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/vps/${serviceName}/templates/${id}/software/${softwareId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
