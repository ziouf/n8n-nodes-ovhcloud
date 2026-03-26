/**
 * @brief Services resource operations for n8n node
 *
 * Provides operations for managing various OVH services including:
 * - List all services (with filtering by route, resource name, and sorting)
 * - Get service details (web hosting, domain, email, VPS, dedicated servers, etc.)
 * - Get available options for upgrades and configurations
 * - Get available upgrade paths with pricing information
 * - Get configuration forms for service setup
 *
 * Available operations:
 * - `getForms`: GetServiceForms - Retrieve configuration forms for a service
 * - `getOptions`: GetServiceOptions - List available options for a service
 * - `get`: GetService - Retrieve details of a specific service
 * - `getUpgrades`: GetServiceUpgrades - List available upgrade offers
 * - `list`: ListServices - Query all services with filtering and sorting
 *
 * Supported service types:
 * - Dedicated Ceph, Cluster, Housing, Server
 * - Domain, Email, Email Pro, Hosting
 *
 * @remarks
 * Service type selection is required for non-list operations.
 * Available routes include: `/dedicated/ceph`, `/dedicated/cluster`, `/dedicated/housing`,
 * `/dedicated/server`, `/domain`, `/email/domain`, `/email/pro`, `/hosting/web`.
 *
 * @example
 * // Configure in n8n node
 * Resource: Services
 * Operation: List Services
 * Filter: Route = "/hosting/web", orderBy = "serviceId", sort = "asc"
 * Output: Array of service details with serviceId, state, options, etc.
 *
 * @example
 * // Get specific service details
 * // Resource: Services -> Get Service
 * // svcType = "/hosting/web", svcID = "web123456"
 * // Output: Service details with state, options, upgrades, forms, etc.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeGetOptions,
	description as descriptionGetOptions,
} from './getOptions.operation';
import {
	execute as executeGetForms,
	description as descriptionGetForms,
} from './getForms.operation';
import { execute as executeGetUpgrades } from './getUpgrades.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	/**
	 * @brief Services resource operations for n8n node
	 *
	 * Provides operations for managing various OVH services including:
	 * - List all services
	 * - Get service details (web hosting, domain, email, VPS, etc.)
	 * - Get available options for upgrades and configurations
	 * - Get available upgrade paths
	 *
	 * Available operations:
	 * - `list`: ListServices - Query all services with filtering and sorting
	 * - `get`: GetService - Retrieve details of a specific service
	 * - `getOptions`: GetServiceOptions - List available options for a service
	 * - `getForms`: GetServiceForms - Retrieve configuration forms for a service
	 * - `getUpgrades`: GetServiceUpgrades - List available upgrade offers
	 *
	 * Supported service types:
	 * - Dedicated Ceph, Cluster, Housing, Server
	 * - Domain, Email, Email Pro, Hosting
	 *
	 * @example
	 * // Configure in n8n node
	 * Resource: Services
	 * Operation: List Services
	 * Filter: Route = "/hosting/web", orderBy = "serviceId", sort = "asc"
	 * Output: Array of service IDs and details
	 */
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Services Operation',
			name: 'svcOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Forms',
					value: 'getForms',
					action: 'Get forms for service configuration',
				},
				{
					name: 'Get Options',
					value: 'getOptions',
					action: 'Get available options for a service',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a specific service',
				},
				{
					name: 'Get Upgrades',
					value: 'getUpgrades',
					action: 'Get available upgrades for a service',
				},
				{
					name: 'List Services',
					value: 'list',
					action: 'List all OVH services',
				},
			],
			default: 'list',
			displayOptions,
		},
		{
			displayName: 'Service Type',
			name: 'svcType',
			type: 'options',
			options: [
				{
					name: 'Dedicated Ceph',
					value: '/dedicated/ceph',
				},
				{
					name: 'Dedicated Cluster',
					value: '/dedicated/cluster',
				},
				{
					name: 'Dedicated Housing',
					value: '/dedicated/housing',
				},
				{
					name: 'Dedicated Server',
					value: '/dedicated/server',
				},
				{
					name: 'Domain',
					value: '/domain',
				},
				{
					name: 'Email',
					value: '/email/domain',
				},
				{
					name: 'Email Pro',
					value: '/email/pro',
				},
				{
					name: 'Hosting',
					value: '/hosting/web',
				},
			],
			default: '/hosting/web',
			description: 'The type of service to retrieve (used when listing or getting services).',
			displayOptions: {
				show: {
					svcOperation: ['get', 'getOptions', 'getForms', 'getUpgrades'],
				},
			},
		},
		{
			displayName: 'Service ID',
			name: 'svcID',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service ID',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a service ID...',
					typeOptions: {
						searchListMethod: 'getServiceIds',
						searchable: false,
					},
				},
			],
			displayOptions: {
				show: {
					svcOperation: ['get', 'getOptions', 'getForms', 'getUpgrades'],
				},
			},
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, svcOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, svcOperation: ['get'] },
		}),
		...descriptionGetOptions({
			...displayOptions,
			show: { ...displayOptions?.show, svcOperation: ['getOptions'] },
		}),
		...descriptionGetForms({
			...displayOptions,
			show: { ...displayOptions?.show, svcOperation: ['getForms'] },
		}),
	];
}

/**
 * Executes the selected services operation (list, get, getOptions, getForms, getUpgrades).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('svcOperation', 0, { extractValue: true });

	this.logger.debug(`Selected operation: ${operation}`);

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getOptions':
			return await executeGetOptions.call(this);
		case 'getForms':
			return await executeGetForms.call(this);
		case 'getUpgrades':
			return await executeGetUpgrades.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "services"`);
}
