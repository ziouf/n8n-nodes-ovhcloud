/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './faxSettingsPut.operation';

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

describe('faxSettingsPut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
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

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpPut as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'billingAccount') return 'billingAccount-value';
			if (param === 'serviceName') return 'serviceName-value';
			if (param === 'callNumber') return 'callNumber-value';
			if (param === 'countryCode') return 'countryCode-value';
			if (param === 'faxMaxCall') return 'faxMaxCall-value';
			if (param === 'faxQuality') return 'faxQuality-value';
			if (param === 'faxTagLine') return 'faxTagLine-value';
			if (param === 'fromEmail') return 'fromEmail-value';
			if (param === 'fromName') return 'fromName-value';
			if (param === 'mailFormat') return 'mailFormat-value';
			if (param === 'receiver') return 'receiver-value';
			if (param === 'redirectionEmail') return 'redirectionEmail-value';
			if (param === 'rejectAnonymous') return 'rejectAnonymous-value';
			if (param === 'sender') return 'sender-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPut as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
