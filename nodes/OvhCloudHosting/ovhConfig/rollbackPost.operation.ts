import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Configuration ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Configuration\'s ID',
			displayOptions,
		},
		{
			displayName: 'Rollback Configuration ID',
			name: 'rollbackId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The configuration\'s ID you want to rollback to',
			displayOptions,
		},
	];
}

/**
 * Rollback an ovhConfig to a previous configuration
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ovhConfig/{id}/rollback
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const id = this.getNodeParameter('id', itemIndex as number) as number;
	const rollbackId = this.getNodeParameter('rollbackId', itemIndex as number) as number;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/ovhConfig/${encodeURIComponent(String(id))}/rollback`,
		{ rollbackId } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
