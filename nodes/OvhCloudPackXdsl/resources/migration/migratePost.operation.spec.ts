/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './migratePost.operation';

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

describe('migratePost.operation', () => {
	describe('description', () => {
		it('should return packName and migration parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(20);
			expect(result[0]).toMatchObject({
				displayName: 'Pack Xdsl Service Name',
				name: 'packName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Accept Contracts',
				name: 'acceptContracts',
				type: 'boolean',
				default: false,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Modem',
				name: 'modem',
				type: 'options',
				default: 'yes',
				required: true,
				options: [
					{ name: 'No', value: 'no' },
					{ name: 'Recycled', value: 'recycled' },
					{ name: 'Yes', value: 'yes' },
				],
			});
			expect(result[3]).toMatchObject({
				displayName: 'Offer Name',
				name: 'offerName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[8]).toMatchObject({
				displayName: 'Installation Type',
				name: 'installationType',
				type: 'options',
				default: 'create',
				options: [
					{ name: 'Activate', value: 'activate' },
					{ name: 'Activate Undefined', value: 'activate_undefined' },
					{ name: 'Create', value: 'create' },
					{ name: 'Multi OTP', value: 'multiOtp' },
				],
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

		it('should migrate to the selected offer via POST', async () => {
			const mockData = { taskId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'acceptContracts':
							return true;
						case 'modem':
							return 'recycled';
						case 'offerName':
							return 'offer-vdsl';
						case 'engageMonths':
							return 12;
						case 'otp':
							return false;
						case 'options':
							return '[{"name": "option1"}]';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/packabcd-ovh/migration/migrate', {
				acceptContracts: true,
				modem: 'recycled',
				offerName: 'offer-vdsl',
				engageMonths: 12,
				otp: false,
				options: [{ name: 'option1' }],
			});
			expect(result).toEqual([mockData]);
		});

		it('should send only required parameters and the otp default when no optional is provided', async () => {
			const mockData = { taskId: 67890 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'acceptContracts':
							return true;
						case 'modem':
							return 'yes';
						case 'offerName':
							return 'offer-vdsl';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/packabcd-ovh/migration/migrate', {
				acceptContracts: true,
				modem: 'yes',
				offerName: 'offer-vdsl',
				otp: false,
			});
		});

		it('should encode special characters in packName', async () => {
			const mockData = { taskId: 1 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'pack abcd';
					switch (param) {
						case 'packName':
							return 'pack abcd';
						case 'acceptContracts':
							return true;
						case 'modem':
							return 'yes';
						case 'offerName':
							return 'offer-vdsl';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/pack%20abcd/migration/migrate', {
				acceptContracts: true,
				modem: 'yes',
				offerName: 'offer-vdsl',
				otp: false,
			});
		});
	});
});
