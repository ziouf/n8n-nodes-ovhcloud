/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionVolumeCreatePost.operation';

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

describe('region regionVolumeCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
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

		it('should call the correct API endpoint with body', async () => {
			const mockData = { id: 'vol-id', name: 'test-volume' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined | number => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'regionName') return 'GRA63';
					if (param === 'availabilityZone') return 'GRA63';
					if (param === 'volumeSize') return 1073741824;
					if (param === 'volumeTypeId') return '0d37f84a-96c1-4b56-b2cd-c3efdc0cb6eb';
					if (param === 'volumeName') return 'test-volume';
					if (param === 'description') return '';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/volume',
				expect.objectContaining({
					availabilityZone: 'GRA63',
					size: 1073741824,
					volumeType: { id: '0d37f84a-96c1-4b56-b2cd-c3efdc0cb6eb' },
					name: 'test-volume',
				}),
			);
			expect(result).toBeDefined();
		});
	});
});
