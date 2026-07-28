/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from '../../../shared/transport/ApiClient';
import {
	executeAcceptAgreement,
	executeGetContract,
	descriptionAcceptAgreement,
	descriptionGetContract,
} from './agreement.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

describe('agreement.operation', () => {
	let client: any;
	let mockExecuteFunctions: any;

	beforeEach(() => {
		client = new ApiClient({} as any);
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: (data: unknown) => data },
		};
	});

	// ============================================================
	// descriptionAcceptAgreement / descriptionGetContract UI params
	// ============================================================

	describe('description functions', () => {
		it('descriptionAcceptAgreement should return one "id" parameter with correct shape', () => {
			const result = descriptionAcceptAgreement({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0] as any).toMatchObject({
				displayName: 'Agreement ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: expect.stringContaining('agreement'),
			});
		});

		it('descriptionGetContract should return one "id" parameter with correct shape', () => {
			const result = descriptionGetContract({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0] as any).toMatchObject({
				displayName: 'Agreement/Contract ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: expect.stringContaining('agreement'),
			});
		});

		it('descriptionAcceptAgreement should have displayOptions set on parameter', () => {
			const result = descriptionAcceptAgreement({ show: {} });
			expect((result[0] as any).displayOptions).toEqual({ show: {} });
		});

		it('descriptionGetContract should have displayOptions set on parameter', () => {
			const result = descriptionGetContract({ show: {} });
			expect((result[0] as any).displayOptions).toEqual({ show: {} });
		});
	});

	// ============================================================
	// executeAcceptAgreement — POST /me/agreements/{id}/accept
	// ============================================================

	describe('executeAcceptAgreement', () => {
		it('should POST agreements/{id}/accept and return response data', async () => {
			client.httpPost.mockResolvedValue({ status: 'accepted' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-12345';
					default:
						return '';
				}
			});

			const result = await executeAcceptAgreement.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/me/agreements/agr-12345/accept', {});
			expect(result[0]).toEqual({ status: 'accepted' });
		});

		it('should POST agreements/{id}/accept with different agreement ID (edge case)', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-99999';
					default:
						return '';
				}
			});

			const result = await executeAcceptAgreement.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/me/agreements/agr-99999/accept', {});
			expect(result[0]).toEqual(undefined);
		});

		it('should POST agreements/{id}/accept with empty response body edge case', async () => {
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-empty';
					default:
						return '';
				}
			});

			const result = await executeAcceptAgreement.call(mockExecuteFunctions, 0);
			expect(result[0]).toEqual({ ok: true });
		});
	});

	// ============================================================
	// executeGetContract — GET /me/agreements/{id}/contract
	// ============================================================

	describe('executeGetContract', () => {
		it('should GET agreements/{id}/contract and return response data', async () => {
			client.httpGet.mockResolvedValue({ contractId: 'ctr-abc', status: 'active' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-12345';
					default:
						return '';
				}
			});

			const result = await executeGetContract.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/me/agreements/agr-12345/contract');
			expect(result[0]).toEqual({ contractId: 'ctr-abc', status: 'active' });
		});

		it('should GET agreements/{id}/contract with different agreement ID (edge case)', async () => {
			client.httpGet.mockResolvedValue({ contractNumber: 'N/A' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-000';
					default:
						return '';
				}
			});

			const result = await executeGetContract.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/me/agreements/agr-000/contract');
			expect(result[0]).toEqual({ contractNumber: 'N/A' });
		});

		it('should GET agreements/{id}/contract with empty response body edge case', async () => {
			client.httpGet.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-empty';
					default:
						return '';
				}
			});

			const result = await executeGetContract.call(mockExecuteFunctions, 0);
			expect(result[0]).toEqual({});
		});

		it('should return consistent shape from all executions', async () => {
			client.httpGet.mockResolvedValue({ id: 'ctr-1' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'agr-x';
					default:
						return '';
				}
			});

			const result = await executeGetContract.call(mockExecuteFunctions, 0);
			expect(Array.isArray(result)).toBe(true);
			expect(result.length).toBeGreaterThan(0);
			expect(typeof (result[0] as any)).toBe('object');
		});
	});
});
