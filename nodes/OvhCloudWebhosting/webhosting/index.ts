/**
 * @brief Web Hosting resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH web hosting services including:
 * - List all web hosting services
 * - Get detailed information about a specific web hosting service
 * - Manage attached domains, resources, certificates, and websites
 *
 * Available operations:
 * - `list`: List all web hosting services
 * - `get`: Get details of a specific web hosting service
 * - `listAttachedDomains`: List web hosting attached domains
 * - `getAttachedDomain`: Get a specific attached domain
 * - `listResources`: List web hosting resources
 * - `getResource`: Get a specific resource
 * - `listCertificates`: List web hosting certificates
 * - `getCertificate`: Get a specific certificate
 * - `listWebsites`: List web hosting websites
 * - `getWebsite`: Get a specific website
 *
 * @remarks
 * Web hosting services are managed under `/v2/webhosting` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Web Hosting Operation',
			name: 'webhostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a web hosting service',
				},
				{
					name: 'Get Attached Domain',
					value: 'getAttachedDomain',
					action: 'Get a specific attached domain',
				},
				{
					name: 'Get Certificate',
					value: 'getCertificate',
					action: 'Get a specific certificate',
				},
				{
					name: 'Get Resource',
					value: 'getResource',
					action: 'Get a specific resource',
				},
				{
					name: 'Get Website',
					value: 'getWebsite',
					action: 'Get a specific website',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all web hosting services',
				},
				{
					name: 'List Attached Domains',
					value: 'listAttachedDomains',
					action: 'List web hosting attached domains',
				},
				{
					name: 'List Certificates',
					value: 'listCertificates',
					action: 'List web hosting certificates',
				},
				{
					name: 'List Resources',
					value: 'listResources',
					action: 'List web hosting resources',
				},
				{
					name: 'List Websites',
					value: 'listWebsites',
					action: 'List web hosting websites',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['get'] },
		}),
		...resources.attachedDomain.descriptionListWebhostingAttachedDomains({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['listAttachedDomains'] },
		}),
		...resources.attachedDomain.descriptionGetWebhostingAttachedDomain({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['getAttachedDomain'] },
		}),
		...resources.resource.descriptionListWebhostingResources({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['listResources'] },
		}),
		...resources.resource.descriptionGetWebhostingResource({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['getResource'] },
		}),
		...resources.certificate.descriptionListWebhostingCertificates({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['listCertificates'] },
		}),
		...resources.certificate.descriptionGetWebhostingCertificate({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['getCertificate'] },
		}),
		...resources.website.descriptionListWebhostingWebsites({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['listWebsites'] },
		}),
		...resources.website.descriptionGetWebhostingWebsite({
			...displayOptions,
			show: { ...displayOptions?.show, webhostingOperation: ['getWebsite'] },
		}),
	];
}

/**
 * Executes the selected web hosting operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('webhostingOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listAttachedDomains':
			return await resources.attachedDomain.executeListWebhostingAttachedDomains.call(this);
		case 'getAttachedDomain':
			return await resources.attachedDomain.executeGetWebhostingAttachedDomain.call(this);
		case 'listResources':
			return await resources.resource.executeListWebhostingResources.call(this);
		case 'getResource':
			return await resources.resource.executeGetWebhostingResource.call(this);
		case 'listCertificates':
			return await resources.certificate.executeListWebhostingCertificates.call(this);
		case 'getCertificate':
			return await resources.certificate.executeGetWebhostingCertificate.call(this);
		case 'listWebsites':
			return await resources.website.executeListWebhostingWebsites.call(this);
		case 'getWebsite':
			return await resources.website.executeGetWebhostingWebsite.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "webhosting"`);
}
