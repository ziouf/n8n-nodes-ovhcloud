/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from '../../../shared/transport/ApiClient';
import {
	executeAddSotpSecret,
	executeDisableSotpAccount,
	executeEnableSotpAccount,
	executeValidateSotpAccount,
	executeEditDeveloperModeRestriction,
	executeAddIpRestriction,
	executeDeleteIpRestriction,
	executeEditIpRestriction,
	executeEnableIpAccount,
	executeDisableIpAccount,
	executeAddSmsRestriction,
	executeDeleteSmsRestriction,
	executeEnableSmsAccount,
	executeDisableSmsAccount,
	executeSendSmsCode,
	executeValidateSmsAccount,
	executeAddTotpRestriction,
	executeDeleteTotpRestriction,
	executeEnableTotpAccount,
	executeDisableTotpAccount,
	executeValidateTotpAccount,
	executeEditTotpRestriction,
	executeAddU2fRestriction,
	executeDeleteU2fRestriction,
	executeEnableU2fAccount,
	executeDisableU2fAccount,
	executeGetU2fRestriction,
	executeEditU2fRestriction,
	executeGetTotpRestriction,
} from './accessRestriction.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

describe('accessRestriction.operation', () => {
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
	// SOTP Two-Factor Authentication
	// ============================================================

	describe('executeAddSotpSecret', () => {
		it('should POST backupCode with code and return response data', async () => {
			client.httpPost.mockResolvedValue({ secret: 'ABCD-EFGH' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '123456';
					default:
						return '';
				}
			});

			const result = await executeAddSotpSecret.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/backupCode', {
				code: '123456',
			});
			expect(result[0]).toEqual({ secret: 'ABCD-EFGH' });
		});

		it('should POST backupCode with different codes (edge case)', async () => {
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '000000';
					default:
						return '';
				}
			});

			const result = await executeAddSotpSecret.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/backupCode', {
				code: '000000',
			});
			expect(result[0]).toEqual({ ok: true });
		});
	});

	describe('executeEnableSotpAccount', () => {
		it('should POST backupCode/enable with code and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '987654';
					default:
						return '';
				}
			});

			const result = await executeEnableSotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/backupCode/enable', {
				code: '987654',
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDisableSotpAccount', () => {
		it('should POST backupCode/disable with code and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '112233';
					default:
						return '';
				}
			});

			const result = await executeDisableSotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/backupCode/disable', {
				code: '112233',
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeValidateSotpAccount', () => {
		it('should POST backupCode/validate with code and return response data', async () => {
			client.httpPost.mockResolvedValue({ valid: true, remainingCodes: 4 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '567890';
					default:
						return '';
				}
			});

			const result = await executeValidateSotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/backupCode/validate', {
				code: '567890',
			});
			expect(result[0]).toEqual({ valid: true, remainingCodes: 4 });
		});

		it('should return failure response when validation fails', async () => {
			client.httpPost.mockResolvedValue({ valid: false, error: 'invalid_code' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'code':
						return '000000';
					default:
						return '';
				}
			});

			const result = await executeValidateSotpAccount.call(mockExecuteFunctions);
			expect(result[0]).toEqual({ valid: false, error: 'invalid_code' });
		});
	});

	// ============================================================
	// Developer Mode Access Restriction
	// ============================================================

	describe('executeEditDeveloperModeRestriction', () => {
		it('should PUT developerMode with body and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'body':
						return { enabled: true };
					default:
						return '';
				}
			});

			const result = await executeEditDeveloperModeRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/developerMode', {
				enabled: true,
			});
			expect(result[0]).toEqual({ success: true });
		});

		it('should PUT developerMode with disabled body', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'body':
						return { enabled: false };
					default:
						return '';
				}
			});

			await executeEditDeveloperModeRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/developerMode', {
				enabled: false,
			});
		});
	});

	// ============================================================
	// IP Access Restrictions CRUD + Enable/Disable lifecycle
	// ============================================================

	describe('executeAddIpRestriction', () => {
		it('should POST ip with ip, rule and warning params', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '192.168.1.0/32';
					case 'rule':
						return 'allow';
					case 'warning':
						return true;
					default:
						return '';
				}
			});

			const result = await executeAddIpRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/ip', {
				ip: '192.168.1.0/32',
				rule: 'allow',
				warning: true,
			});
			expect(result[0]).toEqual({ success: true });
		});

		it('should POST ip with deny rule and no warning', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '10.0.0.0/8';
					case 'rule':
						return 'deny';
					case 'warning':
						return false;
					default:
						return '';
				}
			});

			const result = await executeAddIpRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/ip', {
				ip: '10.0.0.0/8',
				rule: 'deny',
				warning: false,
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDeleteIpRestriction', () => {
		it('should DELETE ip/{id} and return success', async () => {
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'ip-12345';
					default:
						return '';
				}
			});

			const result = await executeDeleteIpRestriction.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/me/accessRestriction/ip/ip-12345');
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeEditIpRestriction', () => {
		it('should PUT ip/{id} with body and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'ip-12345';
					case 'body':
						return { rule: 'deny', warning: true };
					default:
						return '';
				}
			});

			const result = await executeEditIpRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/ip/ip-12345', {
				rule: 'deny',
				warning: true,
			});
			expect(result[0]).toEqual({ success: true });
		});

		it('should PUT ip/{id} with empty body update', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'ip-67890';
					case 'body':
						return {};
					default:
						return '';
				}
			});

			await executeEditIpRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/ip/ip-67890', {});
		});
	});

	describe('executeEnableIpAccount', () => {
		it('should PUT ip/{id} with rule accept and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'ip-12345';
					default:
						return '';
				}
			});

			const result = await executeEnableIpAccount.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/ip/ip-12345', {
				rule: 'accept',
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDisableIpAccount', () => {
		it('should PUT ip/{id} with rule deny and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'ip-12345';
					default:
						return '';
				}
			});

			const result = await executeDisableIpAccount.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/ip/ip-12345', {
				rule: 'deny',
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	// ============================================================
	// SMS Access Restrictions lifecycle (6 operations)
	// ============================================================

	describe('executeAddSmsRestriction', () => {
		it('should POST sms with phone and return response data', async () => {
			client.httpPost.mockResolvedValue({ id: 'sms-100', phoneNumber: '+33612345678' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'phone':
						return '+33612345678';
					default:
						return '';
				}
			});

			const result = await executeAddSmsRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/sms', {
				phone: '+33612345678',
			});
			expect(result[0]).toEqual({ id: 'sms-100', phoneNumber: '+33612345678' });
		});

		it('should POST sms with different phone number (international format)', async () => {
			client.httpPost.mockResolvedValue({ id: 'sms-200' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'phone':
						return '+14155552671';
					default:
						return '';
				}
			});

			const result = await executeAddSmsRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/sms', {
				phone: '+14155552671',
			});
			expect(result[0]).toEqual({ id: 'sms-200' });
		});
	});

	describe('executeDeleteSmsRestriction', () => {
		it('should DELETE sms/{id} and return success', async () => {
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'sms-100';
					default:
						return '';
				}
			});

			const result = await executeDeleteSmsRestriction.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/me/accessRestriction/sms/sms-100');
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeEnableSmsAccount', () => {
		it('should POST sms/{id}/enable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'sms-100';
					default:
						return '';
				}
			});

			const result = await executeEnableSmsAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/sms/sms-100/enable', {});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDisableSmsAccount', () => {
		it('should POST sms/{id}/disable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'sms-100';
					default:
						return '';
				}
			});

			const result = await executeDisableSmsAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/sms/sms-100/disable', {});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeSendSmsCode', () => {
		it('should POST sms/{id}/sendCode and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'sms-100';
					default:
						return '';
				}
			});

			const result = await executeSendSmsCode.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/me/accessRestriction/sms/sms-100/sendCode',
				{},
			);
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeValidateSmsAccount', () => {
		it('should POST sms/{id}/validate and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'sms-100';
					default:
						return '';
				}
			});

			const result = await executeValidateSmsAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/me/accessRestriction/sms/sms-100/validate',
				{},
			);
			expect(result[0]).toEqual({ success: true });
		});
	});

	// ============================================================
	// TOTP Access Restrictions lifecycle (5 operations)
	// ============================================================

	describe('executeAddTotpRestriction', () => {
		it('should POST totp and return response data with secret/codeUrl', async () => {
			client.httpPost.mockResolvedValue({
				id: 'totp-100',
				codeUrl: 'otpauth://...',
				secret: 'ABCDEF',
			});

			const result = await executeAddTotpRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/totp', {});
			expect(result[0]).toEqual({ id: 'totp-100', codeUrl: 'otpauth://...', secret: 'ABCDEF' });
		});

		it('should POST totp with empty response body edge case', async () => {
			client.httpPost.mockResolvedValue({});

			const result = await executeAddTotpRestriction.call(mockExecuteFunctions);
			expect(result[0]).toEqual({});
		});
	});

	describe('executeDeleteTotpRestriction', () => {
		it('should DELETE totp/{id} and return success', async () => {
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					default:
						return '';
				}
			});

			const result = await executeDeleteTotpRestriction.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/me/accessRestriction/totp/totp-100');
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeEnableTotpAccount', () => {
		it('should POST totp/{id}/enable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					default:
						return '';
				}
			});

			const result = await executeEnableTotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/me/accessRestriction/totp/totp-100/enable',
				{},
			);
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDisableTotpAccount', () => {
		it('should POST totp/{id}/disable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					default:
						return '';
				}
			});

			const result = await executeDisableTotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/me/accessRestriction/totp/totp-100/disable',
				{},
			);
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeValidateTotpAccount', () => {
		it('should POST totp/{id}/validate and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					default:
						return '';
				}
			});

			const result = await executeValidateTotpAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/me/accessRestriction/totp/totp-100/validate',
				{},
			);
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeGetTotpRestriction', () => {
		it('should GET totp/{id} and return response data', async () => {
			client.httpGet.mockResolvedValue({
				id: 'totp-100',
				enabled: false,
				createdDate: '2024-01-01',
			});

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					default:
						return '';
				}
			});

			const result = await executeGetTotpRestriction.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/me/accessRestriction/totp/totp-100');
			expect(result[0]).toEqual({ id: 'totp-100', enabled: false, createdDate: '2024-01-01' });
		});

		it('should GET totp/{id} with only required fields edge case', async () => {
			client.httpGet.mockResolvedValue({ id: 'totp-999' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-999';
					default:
						return '';
				}
			});

			const result = await executeGetTotpRestriction.call(mockExecuteFunctions);
			expect(result[0]).toEqual({ id: 'totp-999' });
		});
	});

	describe('executeEditTotpRestriction', () => {
		it('should PUT totp/{id} with body and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'totp-100';
					case 'body':
						return { enabled: true };
					default:
						return '';
				}
			});

			const result = await executeEditTotpRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/totp/totp-100', {
				enabled: true,
			});
			expect(result[0]).toEqual({ success: true });
		});
	});

	// ============================================================
	// U2F Access Restrictions lifecycle (4 operations) + GET/PUT
	// ============================================================

	describe('executeAddU2fRestriction', () => {
		it('should POST u2f and return response data with id/keyId', async () => {
			client.httpPost.mockResolvedValue({ id: 'u2f-100', keyHandle: 'abc123' });

			const result = await executeAddU2fRestriction.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/u2f', {});
			expect(result[0]).toEqual({ id: 'u2f-100', keyHandle: 'abc123' });
		});

		it('should POST u2f with minimal response edge case', async () => {
			client.httpPost.mockResolvedValue({ id: 'u2f-new' });

			const result = await executeAddU2fRestriction.call(mockExecuteFunctions);
			expect(result[0]).toEqual({ id: 'u2f-new' });
		});
	});

	describe('executeDeleteU2fRestriction', () => {
		it('should DELETE u2f/{id} and return success', async () => {
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-100';
					default:
						return '';
				}
			});

			const result = await executeDeleteU2fRestriction.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/me/accessRestriction/u2f/u2f-100');
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeEnableU2fAccount', () => {
		it('should POST u2f/{id}/enable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-100';
					default:
						return '';
				}
			});

			const result = await executeEnableU2fAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/u2f/u2f-100/enable', {});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeDisableU2fAccount', () => {
		it('should POST u2f/{id}/disable and return success', async () => {
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-100';
					default:
						return '';
				}
			});

			const result = await executeDisableU2fAccount.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/me/accessRestriction/u2f/u2f-100/disable', {});
			expect(result[0]).toEqual({ success: true });
		});
	});

	describe('executeGetU2fRestriction', () => {
		it('should GET u2f/{id} and return response data with properties', async () => {
			client.httpGet.mockResolvedValue({ id: 'u2f-100', enabled: true, createdDate: '2024-06-01' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-100';
					default:
						return '';
				}
			});

			const result = await executeGetU2fRestriction.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/me/accessRestriction/u2f/u2f-100');
			expect(result[0]).toEqual({ id: 'u2f-100', enabled: true, createdDate: '2024-06-01' });
		});

		it('should GET u2f/{id} with default response edge case', async () => {
			client.httpGet.mockResolvedValue({ id: 'u2f-default' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-default';
					default:
						return '';
				}
			});

			const result = await executeGetU2fRestriction.call(mockExecuteFunctions);
			expect(result[0]).toEqual({ id: 'u2f-default' });
		});
	});

	describe('executeEditU2fRestriction', () => {
		it('should PUT u2f/{id} with body and return success', async () => {
			client.httpPut.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'id':
						return 'u2f-100';
					case 'body':
						return { enabled: false };
					default:
						return '';
				}
			});

			const result = await executeEditU2fRestriction.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/me/accessRestriction/u2f/u2f-100', {
				enabled: false,
			});
			expect(result[0]).toEqual({ success: true });
		});
	});
});
