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
			displayName: 'Title Pattern',
			name: 'titlePattern',
			type: 'string',
			default: '',
			description: 'Filter by title (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET inputListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/input
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const qs: IDataObject = {};
	const titlePattern = (this.getNodeParameter('titlePattern', itemIndex, '') as string) || '';
	if (titlePattern) {
		qs.titlePattern = titlePattern;
	}
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/input`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
