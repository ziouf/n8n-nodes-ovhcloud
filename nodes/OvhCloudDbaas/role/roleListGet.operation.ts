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
			displayName: 'Name Pattern',
			name: 'namePattern',
			type: 'string',
			default: '',
			description: 'Filter by name (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET roleListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/role
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const namePattern = (this.getNodeParameter('namePattern', _itemIndex, '') as string) || '';
	if (namePattern) {
		qs.namePattern = namePattern;
	}
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/role`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
