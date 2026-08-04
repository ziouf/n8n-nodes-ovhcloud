/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	description as dbCapabilitiesGetDescription,
	execute as dbCapabilitiesGetExecute,
} from './capabilitiesGet.operation';
import {
	description as dbChangePasswordPutDescription,
	execute as dbChangePasswordPutExecute,
} from './changePasswordPut.operation';
import {
	description as dbCopyPostDescription,
	execute as dbCopyPostExecute,
} from './copyPost.operation';
import {
	description as dbDumpGetDescription,
	execute as dbDumpGetExecute,
} from './dumpGet.operation';
import {
	description as dbDumpCreatePostDescription,
	execute as dbDumpCreatePostExecute,
} from './dumpCreatePost.operation';
import {
	description as dbImportPostDescription,
	execute as dbImportPostExecute,
} from './importPost.operation';
import {
	description as dbMetricsTokenGetDescription,
	execute as dbMetricsTokenGetExecute,
} from './metricsTokenGet.operation';
import {
	description as dbRequestListGetDescription,
	execute as dbRequestListGetExecute,
} from './requestListGet.operation';
import {
	description as dbRestoreGetDescription,
	execute as dbRestoreGetExecute,
} from './restoreGet.operation';
import {
	description as dbRestoreCreatePostDescription,
	execute as dbRestoreCreatePostExecute,
} from './restoreCreatePost.operation';
import {
	description as dbStatisticsGetDescription,
	execute as dbStatisticsGetExecute,
} from './statisticsGet.operation';

const mockHttpClient = {
	httpGet: jest.fn(),
	httpPost: jest.fn(),
	httpPut: jest.fn(),
};

jest.mock('../../../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
}));

import { ApiClient } from '../../../shared/transport/ApiClient';

const serviceName = 'myservice.ovh';
const databaseName = 'mydb';

const baseParams = {
	serviceName,
	databaseName,
};

describe('OvhCloudHosting Database Sub-Resources', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		Object.assign(mockHttpClient, {
			httpGet: jest.fn().mockResolvedValue({ status: 'ok' }),
			httpPost: jest.fn().mockResolvedValue({ status: 'ok' }),
			httpPut: jest.fn().mockResolvedValue({ status: 'ok' }),
		});
	});

	describe('capabilitiesGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbCapabilitiesGetDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET capabilities endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbCapabilitiesGetExecute.call(mockFn);
			expect(mockFn.getNodeParameter).toHaveBeenCalledWith('serviceName', 0);
			expect(mockFn.getNodeParameter).toHaveBeenCalledWith('databaseName', 0);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/capabilities`,
			);
		});
	});

	describe('changePasswordPut', () => {
		it('description should return serviceName, databaseName and newPassword parameters', () => {
			const result = dbChangePasswordPutDescription({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'New Password',
				name: 'newPassword',
				type: 'string',
				default: '',
				typeOptions: { password: true },
				required: true,
			});
		});

		it('execute should PUT changePassword endpoint with password', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams] ?? 'newpass123',
			);
			await dbChangePasswordPutExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpPut).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/changePassword`,
				{ password: 'newpass123' },
			);
		});
	});

	describe('copyPost', () => {
		it('description should return serviceName, databaseName and targetDatabase parameters', () => {
			const result = dbCopyPostDescription({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Target Database',
				name: 'targetDatabase',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should POST copy endpoint with target database', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams] ?? 'targetdb',
			);
			await dbCopyPostExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/copy`,
				{ database: 'targetdb' },
			);
		});
	});

	describe('dumpGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbDumpGetDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET dump endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbDumpGetExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/dump`,
			);
		});
	});

	describe('dumpCreatePost', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbDumpCreatePostDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should POST dump endpoint to create dump', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbDumpCreatePostExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/dump`,
			);
		});
	});

	describe('importPost', () => {
		it('description should return serviceName, databaseName and dumpUrl parameters', () => {
			const result = dbImportPostDescription({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Dump URL',
				name: 'dumpUrl',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should POST import endpoint with dump URL', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams] ?? 'https://example.com/dump.sql',
			);
			await dbImportPostExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/import`,
				{ url: 'https://example.com/dump.sql' },
			);
		});
	});

	describe('metricsTokenGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbMetricsTokenGetDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET metricsToken endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbMetricsTokenGetExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/metricsToken`,
			);
		});
	});

	describe('requestListGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbRequestListGetDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET request list endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbRequestListGetExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/request`,
			);
		});
	});

	describe('restoreGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbRestoreGetDescription({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET restore endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbRestoreGetExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/restore`,
			);
		});
	});

	describe('restoreCreatePost', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbRestoreCreatePostDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should POST restore endpoint to restore from dump', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbRestoreCreatePostExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/restore`,
			);
		});
	});

	describe('statisticsGet', () => {
		it('description should return serviceName and databaseName parameters', () => {
			const result = dbStatisticsGetDescription();
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('execute should GET statistics endpoint', async () => {
			const mockFn: any = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((d: any[]) => d) },
			};
			mockFn.getNodeParameter.mockImplementation(
				(p: string) => baseParams[p as keyof typeof baseParams],
			);
			await dbStatisticsGetExecute.call(mockFn);
			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockFn) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				`/hosting/web/database/${serviceName}/${databaseName}/statistics`,
			);
		});
	});
});
