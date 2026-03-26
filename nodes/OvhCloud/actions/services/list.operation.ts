import type { INodeExecutionData, IDataObject, GenericValue, IDisplayOptions } from 'n8n-workflow';
import { IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Services operation for Services resource
 *
 * Retrieves all services for the authenticated account with optional filtering:
 * - HTTP GET request to `/services` endpoint
 * - Supports route filter (comma-separated)
 * - Supports resource name filter (partial match)
 * - Supports sorting by field and direction
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Services operation
 *
 * @example
 * // Input configuration:
 * // svcRoutes = '/hosting/web'
 * // svcResourceName = 'web'
 * // svcOrderBy = 'serviceId'
 * // svcSort = 'asc'
 * // Output: Array of service details with serviceId, state, options, etc.
 */
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

/**
 * Executes the List Services operation.
 *
 * Retrieves all services for the authenticated account, optionally filtered by:
 * - Route (comma-separated)
 * - Resource name (partial match)
 * - Sorting by field and direction
 *
 * HTTP method: GET
 * Endpoint: /services
 * Query parameters:
 * - routes: Service route filter (comma-separated)
 * - resourceName: Service name filter (partial match)
 * - orderBy: Sort field (serviceId)
 * - sort: Sort direction (asc, desc)
 *
 * First retrieves list of service IDs, then fetches details for each service.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 *
 * @example
 * // Input configuration:
 * // svcRoutes = '/hosting/web'
 * // svcResourceName = 'web'
 * // svcOrderBy = 'serviceId'
 * // svcSort = 'asc'
 * // Output: Array of service details with serviceId, state, options, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const routes = this.getNodeParameter('svcRoutes', 0, { extractValue: true, default: null });
	const resourceName = this.getNodeParameter('svcResourceName', 0, {
		extractValue: true,
		default: null,
	});
	const orderBy = this.getNodeParameter('svcOrderBy', 0, { extractValue: true });
	const sort = this.getNodeParameter('svcSort', 0, { extractValue: true });

	const serviceIds = (await client.httpGet(`/services`, {
		orderBy,
		resourceName,
		routes,
		sort,
	})) as GenericValue[];

	const services: INodeExecutionData[] = [];
	for (const serviceId of serviceIds) {
		const service = (await client.httpGet(`/services/${serviceId}`)) as IDataObject;
		services.push({ json: service });
	}

	return services;
}
