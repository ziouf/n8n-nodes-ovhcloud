/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './servicesToDeleteUnpackTermsPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('servicesToDeleteUnpackTermsPost.operation', () => {
	describe('description', () => {
		it('should return packName, offerName and options parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Pack Xdsl Service Name',
				name: 'packName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Offer Name',
				name: 'offerName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Options',
				name: 'options',
				type: 'string',
				default: '',
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should calculate services to delete via POST with options', async () => {
			const mockData = [{ service: 'xdsl', toDelete: true }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'offerName':
							return 'offer-vdsl';
						case 'options':
							return '[{"name": "option1"}]';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/packabcd-ovh/migration/servicesToDeleteUnpackTerms',
				{ offerName: 'offer-vdsl', options: [{ name: 'option1' }] },
			);
			expect(result).toEqual(mockData);
		});

		it('should send no options when not provided', async () => {
			const mockData = [{ service: 'xdsl' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'offerName':
							return 'offer-vdsl';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/packabcd-ovh/migration/servicesToDeleteUnpackTerms',
				{ offerName: 'offer-vdsl' },
			);
		});

		it('should encode special characters in packName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'pack abcd';
					switch (param) {
						case 'packName':
							return 'pack abcd';
						case 'offerName':
							return 'offer-vdsl';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/pack%20abcd/migration/servicesToDeleteUnpackTerms',
				{ offerName: 'offer-vdsl' },
			);
		});
	});
});
