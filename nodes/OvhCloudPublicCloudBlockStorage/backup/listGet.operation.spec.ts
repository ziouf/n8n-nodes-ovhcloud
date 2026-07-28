/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('volume listGet.operation', () => {
	describe('description', () => {
		it('should return project locator parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for project locator', () => {
			const result = description({ show: {} });
			expect((result[0] as any).modes).toHaveLength(2);
			expect((result[0] as any).modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should have correct searchListMethod for project locator', () => {
			const result = description({ show: {} });
			const listMode = (result[0] as any).modes.find((m: any) => m.name === 'list');
			expect(listMode?.typeOptions?.searchListMethod).toBe('getPublicCloudProjects');
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should list volumes via GET', async () => {
			const mockData = [{ id: 'vol-1' }, { id: 'vol-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/blockStorage/backup',
			);
			expect(result).toEqual(mockData);
		});

	});
});
