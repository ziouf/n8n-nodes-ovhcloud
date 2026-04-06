/**
 * Tests for the main OvhCloud node (OvhCloud.node.ts).
 *
 * Verifies that the execute function correctly routes to the appropriate
 * resource handler based on the selected resource parameter.
 */

import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

// Mock all resource execute handlers before importing the node
// Each mock must provide both `description` (called during class instantiation)
// and `execute` (called during node execution).

jest.mock('../nodes/OvhCloud/actions/me/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'me' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/services/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'services' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/email/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'email' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'vps' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/domain/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'domain' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/dedicated/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'dedicated' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/ipLoadbalancing/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'ipLoadbalancing' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/ip/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'ip' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vrack/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'vrack' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/sms/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'sms' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/ssl/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'ssl' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/hosting/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'hosting' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/dedicated/resources/dedicatedCloud/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'dedicatedCloud' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/dbaas/index', () => ({
	description: jest.fn().mockReturnValue([]),
	execute: jest.fn().mockResolvedValue([{ json: { resource: 'dbaas' } }]),
}));

// Import mocked handlers
import { execute as meExecute } from '../nodes/OvhCloud/actions/me/index';
import { execute as servicesExecute } from '../nodes/OvhCloud/actions/services/index';
import { execute as emailExecute } from '../nodes/OvhCloud/actions/email/index';
import { execute as vpsExecute } from '../nodes/OvhCloud/actions/vps/index';
import { execute as domainExecute } from '../nodes/OvhCloud/actions/domain/index';
import { execute as dedicatedExecute } from '../nodes/OvhCloud/actions/dedicated/index';
import { execute as ipLoadbalancingExecute } from '../nodes/OvhCloud/actions/ipLoadbalancing/index';
import { execute as ipExecute } from '../nodes/OvhCloud/actions/ip/index';
import { execute as vrackExecute } from '../nodes/OvhCloud/actions/vrack/index';
import { execute as smsExecute } from '../nodes/OvhCloud/actions/sms/index';
import { execute as sslExecute } from '../nodes/OvhCloud/actions/ssl/index';
import { execute as hostingExecute } from '../nodes/OvhCloud/actions/hosting/index';
import { execute as dedicatedCloudExecute } from '../nodes/OvhCloud/actions/dedicated/resources/dedicatedCloud/index';
import { execute as dbaasExecute } from '../nodes/OvhCloud/actions/dbaas/index';

// Import the node class after mocks
import { OvhCloud } from '../nodes/OvhCloud/OvhCloud.node';

function createMockExecuteFunctions(resource: string): jest.Mocked<IExecuteFunctions> {
	const returnJsonArray = jest.fn((data: unknown): INodeExecutionData[] =>
		Array.isArray(data)
			? data.map((item) => ({ json: item as unknown as IDataObject }))
			: [{ json: data as unknown as IDataObject }],
	);

	return {
		getNodeParameter: jest.fn().mockReturnValue(resource),
		getNode: jest.fn().mockReturnValue({ name: 'OVH Cloud', type: 'ovhCloud' }),
		helpers: {
			returnJsonArray,
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

describe('OvhCloud Node', () => {
	let node: OvhCloud;

	beforeAll(() => {
		node = new OvhCloud();
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('node description', () => {
		it('should have correct node metadata', () => {
			expect(node.description.displayName).toBe('OVH Cloud');
			expect(node.description.name).toBe('ovhCloud');
			expect(node.description.version).toBe(2);
		});

		it('should have all 75 resources defined', () => {
			const resourceProperty = node.description.properties.find((prop) => prop.name === 'resource');

			expect(resourceProperty).toBeDefined();
			expect(resourceProperty?.type).toBe('options');

			const options = resourceProperty?.options ?? [];
			expect(options).toHaveLength(75);
		});

		it('should include all expected resource options', () => {
			const resourceProperty = node.description.properties.find((prop) => prop.name === 'resource');
			const optionValues = (resourceProperty?.options ?? []).map((opt) =>
				typeof opt === 'object' && 'value' in opt ? opt.value : opt,
			);

			const expectedResources = [
				// Original 14 resources
				'services',
				'me',
				'email',
				'vps',
				'domain',
				'dedicated',
				'ipLoadbalancing',
				'ip',
				'vrack',
				'sms',
				'ssl',
				'hosting',
				'dedicatedCloud',
				'dbaas',
				// V1 New Resources
				'allDom',
				'auth',
				'cdn',
				'cloud',
				'connectivity',
				'contact',
				'dedicatedCeph',
				'dedicatedCluster',
				'dedicatedHousing',
				'dedicatedNasha',
				'dedicatedInstallationTemplate',
				'dedicatedServer',
				'emailExchange',
				'emailMxplan',
				'emailPro',
				'freefax',
				'horizonView',
				'licenseCloudLinux',
				'licenseCpanel',
				'licenseDirectadmin',
				'licenseHycu',
				'licenseOffice',
				'licenseOfficePrepaid',
				'licensePlesk',
				'licenseRedhat',
				'licenseSqlserver',
				'licenseVirtuozzo',
				'licenseWindows',
				'licenseWorklight',
				'metrics',
				'msServices',
				'newAccount',
				'nutanix',
				'order',
				'overTheBox',
				'ovhCloudConnect',
				'packXdsl',
				'partner',
				'price',
				'secret',
				'service',
				'sslGateway',
				'startup',
				'storage',
				'support',
				'telephony',
				'vip',
				'xdsl',
				// V2 New Resources
				'backupServices',
				'commercialCatalog',
				'iam',
				'location',
				'managedCMS',
				'networkDefense',
				'notification',
				'okms',
				'publicCloud',
				'vmwareCloudDirector',
				'vrackServices',
				'webhosting',
				'zimbra',
			];

			for (const resource of expectedResources) {
				expect(optionValues).toContain(resource);
			}
		});

		it('should have credentials configured', () => {
			expect(node.description.credentials).toBeDefined();
			expect(node.description.credentials).toHaveLength(1);
			expect(node.description.credentials![0].name).toBe('ovhCloud-Api');
			expect(node.description.credentials![0].required).toBe(true);
		});

		it('should have listSearch methods configured', () => {
			expect(node.methods).toBeDefined();
			expect(node.methods!.listSearch).toBeDefined();
			expect(node.methods!.listSearch).toHaveProperty('getServiceIds');
			expect(node.methods!.listSearch).toHaveProperty('getEmailDomains');
			expect(node.methods!.listSearch).toHaveProperty('getVpsServices');
		});
	});

	describe('execute() - resource routing', () => {
		const resourceCases = [
			{ resource: 'me', handler: meExecute },
			{ resource: 'services', handler: servicesExecute },
			{ resource: 'email', handler: emailExecute },
			{ resource: 'vps', handler: vpsExecute },
			{ resource: 'domain', handler: domainExecute },
			{ resource: 'dedicated', handler: dedicatedExecute },
			{ resource: 'ipLoadbalancing', handler: ipLoadbalancingExecute },
			{ resource: 'ip', handler: ipExecute },
			{ resource: 'vrack', handler: vrackExecute },
			{ resource: 'sms', handler: smsExecute },
			{ resource: 'ssl', handler: sslExecute },
			{ resource: 'hosting', handler: hostingExecute },
			{ resource: 'dedicatedCloud', handler: dedicatedCloudExecute },
			{ resource: 'dbaas', handler: dbaasExecute },
		];

		it.each(resourceCases)(
			'should route to correct handler for resource "$resource"',
			async ({ resource, handler }) => {
				const mockCtx = createMockExecuteFunctions(resource);

				await node.execute.call(mockCtx);

				expect(handler).toHaveBeenCalled();
			},
		);

		it.each(resourceCases)(
			'should return wrapped JSON array for resource "$resource"',
			async ({ resource }) => {
				const mockCtx = createMockExecuteFunctions(resource);

				const result = await node.execute.call(mockCtx);

				expect(result).toBeDefined();
				expect(Array.isArray(result)).toBe(true);
				expect(result).toHaveLength(1);
				expect(mockCtx.helpers.returnJsonArray).toHaveBeenCalled();
			},
		);

		it('should throw NodeApiError for unknown resource', async () => {
			const mockCtx = createMockExecuteFunctions('unknownResource');

			await expect(node.execute.call(mockCtx)).rejects.toThrow(
				'The resource "unknownResource" cannot be executed directly',
			);
		});

		it('should throw NodeApiError for empty resource', async () => {
			const mockCtx = createMockExecuteFunctions('');

			await expect(node.execute.call(mockCtx)).rejects.toThrow(
				'The resource "" cannot be executed directly',
			);
		});
	});
});
