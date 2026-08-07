import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskFilterGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Id',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Id of task',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskFilterGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/filter/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const id = this.getNodeParameter('id', 0) as any;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/filter/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
