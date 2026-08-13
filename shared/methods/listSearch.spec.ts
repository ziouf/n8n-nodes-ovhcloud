/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createServiceListSearch,
	createProjectScopedServiceListSearch,
	resolveProjectId,
	ProjectIdContext,
} from './listSearch';
import { createMockApiClient } from '../../tests/helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('createServiceListSearch', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	it('should map string ids to name-value pairs', async () => {
		const loader = createServiceListSearch('/vps');
		mockClient.paginate.mockResolvedValue(['vps-1', 'vps-2']);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result).toEqual({
			results: [
				{ name: 'vps-1', value: 'vps-1' },
				{ name: 'vps-2', value: 'vps-2' },
			],
		});
	});

	it('should normalize numeric ids to strings', async () => {
		const loader = createServiceListSearch('/supportTicket');
		mockClient.paginate.mockResolvedValue([123, 456]);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result).toEqual({
			results: [
				{ name: '123', value: '123' },
				{ name: '456', value: '456' },
			],
		});
	});
});

describe('createProjectScopedServiceListSearch', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should resolve project id and build the route', async () => {
		const loader = createProjectScopedServiceListSearch(
			(projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
		);
		mockClient.paginate.mockResolvedValue(['vol-1']);

		const mockCtx: ProjectIdContext = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') return 'project-abc';
				return '';
			}),
		};
		const result = await loader.call(mockCtx);
		expect(result).toEqual({ results: [{ name: 'vol-1', value: 'vol-1' }] });
	});

	it('should handle resourceLocator object form', async () => {
		const loader = createProjectScopedServiceListSearch(
			(projectId) => `/publicCloud/project/${projectId}/rancher`,
		);
		mockClient.paginate.mockResolvedValue(['rancher-1']);

		const mockCtx: ProjectIdContext = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') return { mode: 'list', value: 'project-xyz' };
				return '';
			}),
		};
		const result = await loader.call(mockCtx);
		expect(result).toEqual({ results: [{ name: 'rancher-1', value: 'rancher-1' }] });
	});

	it('should throw when project id is invalid', async () => {
		const loader = createProjectScopedServiceListSearch((projectId) => `/p/${projectId}`);
		const mockCtx: ProjectIdContext = {
			getNodeParameter: jest.fn().mockReturnValue({ mode: 'id' }),
		};
		await expect(loader.call(mockCtx)).rejects.toThrow(
			'publicCloudProjectId parameter is not a valid string',
		);
	});
});

describe('resolveProjectId', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return plain string', () => {
		const mockCtx: ProjectIdContext = { getNodeParameter: jest.fn().mockReturnValue('proj-1') };
		expect(resolveProjectId(mockCtx)).toBe('proj-1');
	});

	it('should throw for invalid values', () => {
		const mockCtx: ProjectIdContext = { getNodeParameter: jest.fn().mockReturnValue(undefined) };
		expect(() => resolveProjectId(mockCtx)).toThrow(
			'publicCloudProjectId parameter is not a valid string',
		);
	});
});
