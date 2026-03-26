import {
	IExecuteFunctions,
	NodeApiError,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import { getServiceIds, getEmailDomains, getVpsServices } from './methods/index';
import { description as meDescription, execute as meExecute } from './actions/me/index';
import {
	description as servicesDescription,
	execute as servicesExecute,
} from './actions/services/index';
import { description as emailDescription, execute as emailExecute } from './actions/email/index';
import { description as vpsDescription, execute as vpsExecute } from './actions/vps/index';

/**
 * Main OVH Cloud n8n node for interacting with the OVHcloud API.
 *
 * Provides integration with OVHcloud APIs for managing:
 * - Services (Dedicated servers, domains, hosting, etc.)
 * - Account information (Me resource)
 * - Email services (email domains)
 * - VPS instances (Virtual Private Servers)
 *
 * Supports multiple OVHcloud endpoints: Europe, Canada, USA, SoYouStart, and Kimsufi.
 * Uses SHA1-based signature authentication for all API requests.
 *
 * @see OvhCloudApi.credentials.ts for credential type definition
 * @see ApiClient for the API client implementation
 * @see https://api.ovh.com/console/ OVH API Documentation
 *
 * @example
 * ```typescript
 * // In an n8n workflow, the node can be configured as:
 * // Resource: VPS -> Operation: Get -> Service ID: my-vps
 * // Resource: Me -> Sub-resource: Bills -> Operation: List
 * // Resource: Services -> Operation: List -> Filter by route: /hosting/web
 * ```
 */
export class OvhCloud implements INodeType {
	/** @inheritdoc */
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud',
		name: 'ovhCloud',
		icon: 'file:../../icons/ovh_vertical.svg',
		group: ['input'],
		version: 2,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'Manage OVH Cloud services. Supports Services, Me, Email, and VPS resources with over 30+ sub-resources for VPS management.',
		defaults: {
			name: 'OVH Cloud',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		/** @inheritdoc */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Service',
						value: 'services',
						action: 'Manage OVH Cloud services',
					},
					{
						name: 'Me',
						value: 'me',
						action: 'Manage your OVH account',
					},
					{
						name: 'Email',
						value: 'email',
						action: 'Manage OVH email services',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'VPS',
						value: 'vps',
						action: 'Manage OVH VPS instances',
					},
				],
				default: 'services',
			},
			...meDescription({ show: { resource: ['me'] } }),
			...servicesDescription({ show: { resource: ['services'] } }),
			...emailDescription({ show: { resource: ['email'] } }),
			...vpsDescription({ show: { resource: ['vps'] } }),
		],
	};

	/** @inheritdoc */
	methods = {
		/**
		 * Dynamic list search methods for n8n node UI operations.
		 *
		 * Provides dynamic dropdown options for service IDs, email domains, and VPS services.
		 */
		listSearch: {
			getServiceIds, // Dynamic list search for service IDs
			getEmailDomains, // Dynamic list search for email domains
			getVpsServices, // Dynamic list search for VPS service names
		},
	};

	/**
	 * Executes the selected resource operation.
	 *
	 * Routes the execution to the appropriate handler based on the selected
	 * resource (services, me, email, or vps) and operation.
	 *
	 * @param this - The n8n execute function context
	 * @returns Array of execution results
	 */
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0);

		let responseData: INodeExecutionData[];

		switch (resource) {
			case 'me':
				responseData = await meExecute.call(this);
				break;
			case 'services':
				responseData = await servicesExecute.call(this);
				break;
			case 'email':
				responseData = await emailExecute.call(this);
				break;
			case 'vps':
				responseData = await vpsExecute.call(this);
				break;
			default:
				throw new NodeApiError(this.getNode(), {
					message: `The resource "${resource}" cannot be executed directly. Please select an operation to execute.`,
				});
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}
