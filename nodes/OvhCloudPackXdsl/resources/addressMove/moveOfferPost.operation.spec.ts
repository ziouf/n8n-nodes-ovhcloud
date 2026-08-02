/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './moveOfferPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('moveOfferPost.operation', () => {
	describe('description', () => {
		it('should return packName and move offer parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(25);
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
				displayName: 'Eligibility Reference',
				name: 'eligibilityReference',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[4]).toMatchObject({
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
			expect(result[14]).toMatchObject({
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

		it('should move the access via POST with required and optional parameters', async () => {
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
						case 'eligibilityReference':
							return 'eligibilityRef123';
						case 'keepCurrentNumber':
							return true;
						case 'modem':
							return 'recycled';
						case 'offerName':
							return 'offer-vdsl';
						case 'otp':
							return false;
						case 'productCode':
							return 'productCode123';
						case 'buildingReference':
							return 'buildingRef123';
						case 'engageMonths':
							return 12;
						case 'installationType':
							return 'create';
						case 'options':
							return '[{"name": "option1"}]';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/packabcd-ovh/addressMove/moveOffer',
				{
					acceptContracts: true,
					eligibilityReference: 'eligibilityRef123',
					keepCurrentNumber: true,
					modem: 'recycled',
					offerName: 'offer-vdsl',
					otp: false,
					productCode: 'productCode123',
					buildingReference: 'buildingRef123',
					engageMonths: 12,
					installationType: 'create',
					options: [{ name: 'option1' }],
				},
			);
			expect(result).toEqual([mockData]);
		});

		it('should send only required parameters when no optional is provided', async () => {
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
						case 'eligibilityReference':
							return 'eligibilityRef123';
						case 'keepCurrentNumber':
							return false;
						case 'modem':
							return 'yes';
						case 'offerName':
							return 'offer-vdsl';
						case 'otp':
							return true;
						case 'productCode':
							return 'productCode123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/packabcd-ovh/addressMove/moveOffer',
				{
					acceptContracts: true,
					eligibilityReference: 'eligibilityRef123',
					keepCurrentNumber: false,
					modem: 'yes',
					offerName: 'offer-vdsl',
					otp: true,
					productCode: 'productCode123',
				},
			);
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
						case 'eligibilityReference':
							return 'eligibilityRef123';
						case 'keepCurrentNumber':
							return false;
						case 'modem':
							return 'yes';
						case 'offerName':
							return 'offer-vdsl';
						case 'otp':
							return false;
						case 'productCode':
							return 'productCode123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/pack%20abcd/addressMove/moveOffer', {
				acceptContracts: true,
				eligibilityReference: 'eligibilityRef123',
				keepCurrentNumber: false,
				modem: 'yes',
				offerName: 'offer-vdsl',
				otp: false,
				productCode: 'productCode123',
			});
		});
	});
});
