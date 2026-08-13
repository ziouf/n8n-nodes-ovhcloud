/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './deleteUserS3CredentialDelete.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('user deleteUserS3CredentialDelete operation', () => {
	describe('description', () => {
		it('should return required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(3);
			expect(result[2]).toMatchObject({ name: 'access', required: true });
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

		it('should delete the S3 credential via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'userId':
							return 'userid';
						case 'access':
							return 'accesskey';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/user/userid/s3Credentials/accesskey',
			);
			expect(result).toEqual([{ deleted: 'accesskey' }]);
		});
	});
});
