/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createServiceListSearch,
	createProjectScopedServiceListSearch,
	resolveProjectId,
} from './listSearch';

jest.mock('../transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../transport/ApiClient';

describe('createServiceListSearch', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	it('should map string ids to name-value pairs', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		const result = await loader.call(mockLoadOptionsFunctions as any);
		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps');
		expect(result).toEqual({
			results: [
				{ name: 'vps-1', value: 'vps-1' },
				{ name: 'vps-2', value: 'vps-2' },
			],
		});
	});

	it('should normalize numeric ids to strings', async () => {
		const loader = createServiceListSearch('/supportTicket');
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue([123, 456]);

		const result = await loader.call(mockLoadOptionsFunctions as any);
		expect(result).toEqual({
			results: [
				{ name: '123', value: '123' },
				{ name: '456', value: '456' },
			],
		});
	});
});

describe('createProjectScopedServiceListSearch', () => {
	it('should resolve project id and build the route', async () => {
		const loader = createProjectScopedServiceListSearch(
			(projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
		);
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(['vol-1']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockReturnValue('project-abc'),
		};
		const result = await loader.call(mockCtx as any);
		expect(mockClient.httpGet).toHaveBeenCalledWith(
			'/publicCloud/project/project-abc/blockStorage/volume',
		);
		expect(result).toEqual({ results: [{ name: 'vol-1', value: 'vol-1' }] });
	});

	it('should handle resourceLocator object form', async () => {
		const loader = createProjectScopedServiceListSearch(
			(projectId) => `/publicCloud/project/${projectId}/rancher`,
		);
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(['rancher-1']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockReturnValue({ mode: 'list', value: 'project-xyz' }),
		};
		const result = await loader.call(mockCtx as any);
		expect(mockClient.httpGet).toHaveBeenCalledWith('/publicCloud/project/project-xyz/rancher');
		expect(result).toEqual({ results: [{ name: 'rancher-1', value: 'rancher-1' }] });
	});

	it('should throw when project id is invalid', async () => {
		const loader = createProjectScopedServiceListSearch((projectId) => `/p/${projectId}`);
		const mockCtx = { getNodeParameter: jest.fn().mockReturnValue({ mode: 'id' }) };
		await expect(loader.call(mockCtx as any)).rejects.toThrow(
			'publicCloudProjectId parameter is not a valid string',
		);
	});
});

describe('resolveProjectId', () => {
	it('should return plain string', () => {
		const mockCtx = { getNodeParameter: jest.fn().mockReturnValue('proj-1') };
		expect(resolveProjectId(mockCtx as any)).toBe('proj-1');
	});

	it('should throw for invalid values', () => {
		const mockCtx = { getNodeParameter: jest.fn().mockReturnValue(undefined) };
		expect(() => resolveProjectId(mockCtx as any)).toThrow(
			'publicCloudProjectId parameter is not a valid string',
		);
	});
});
