import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
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
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The roleId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the DELETE roleDeleteDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const roleId = this.getNodeParameter('roleId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/dbaas/logs/${encodeURIComponent(serviceName)}/role/${encodeURIComponent(roleId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
