import type { INodeExecutionData, IDataObject, GenericValue, IDisplayOptions } from 'n8n-workflow';
import { IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'orderBy',
			name: 'svcOrderBy',
			type: 'options',
			options: [
				{
					name: 'Service ID',
					value: 'serviceId',
				},
			],
			default: 'serviceId',
			description: 'Order the results by the selected field',
			displayOptions,
		},
		{
			displayName: 'Sort',
			name: 'svcSort',
			type: 'options',
			options: [
				{
					name: 'Ascending',
					value: 'asc',
				},
				{
					name: 'Descending',
					value: 'desc',
				},
			],
			default: 'asc',
			description: 'Sort the results in ascending or descending order',
			displayOptions,
		},
		{
			displayName: 'Filter by Service Name',
			name: 'svcResourceName',
			type: 'string',
			default: '',
			description: 'Filter the results by service name (supports partial matches)',
			displayOptions,
		},
		{
			displayName: 'Filter by Route',
			name: 'svcRoutes',
			type: 'string',
			default: '',
			description: 'Filter the results by route (comma-separated)',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const routes = this.getNodeParameter('svcRoutes', 0, { extractValue: true, default: null });
	const resourceName = this.getNodeParameter('svcResourceName', 0, { extractValue: true, default: null });
	const orderBy = this.getNodeParameter('svcOrderBy', 0, { extractValue: true });
	const sort = this.getNodeParameter('svcSort', 0, { extractValue: true });

	const serviceIds = (await client.httpGet(`/services`, { orderBy, resourceName, routes, sort })) as GenericValue[];

	const services: INodeExecutionData[] = [];
	for (const serviceId of serviceIds) {
		const service = (await client.httpGet(`/services/${serviceId}`)) as IDataObject;
		services.push({ json: service });
	}

	return services;
}
