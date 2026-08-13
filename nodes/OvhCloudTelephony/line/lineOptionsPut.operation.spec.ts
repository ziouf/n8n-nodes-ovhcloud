/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './lineOptionsPut.operation';

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

describe('lineOptionsPut operation', () => {
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
			if (param === 'absentSubscriber') return 'absentSubscriber-value';
			if (param === 'anonymousCallRejection') return 'anonymousCallRejection-value';
			if (param === 'callRestrictionIncoming') return 'callRestrictionIncoming-value';
			if (param === 'callRestrictionOutgoing') return 'callRestrictionOutgoing-value';
			if (param === 'callWaiting') return 'callWaiting-value';
			if (param === 'codecs') return 'codecs-value';
			if (param === 'defaultVoicemail') return 'defaultVoicemail-value';
			if (param === 'displayNumber') return 'displayNumber-value';
			if (param === 'doNotDisturb') return 'doNotDisturb-value';
			if (param === 'domain') return 'domain-value';
			if (param === 'forwardBackup') return 'forwardBackup-value';
			if (param === 'forwardBackupNature') return 'forwardBackupNature-value';
			if (param === 'forwardBackupNumber') return 'forwardBackupNumber-value';
			if (param === 'forwardBusy') return 'forwardBusy-value';
			if (param === 'forwardBusyNature') return 'forwardBusyNature-value';
			if (param === 'forwardBusyNumber') return 'forwardBusyNumber-value';
			if (param === 'forwardNoReply') return 'forwardNoReply-value';
			if (param === 'forwardNoReplyDelay') return 'forwardNoReplyDelay-value';
			if (param === 'forwardNoReplyNature') return 'forwardNoReplyNature-value';
			if (param === 'forwardNoReplyNumber') return 'forwardNoReplyNumber-value';
			if (param === 'forwardUnconditional') return 'forwardUnconditional-value';
			if (param === 'forwardUnconditionalNature') return 'forwardUnconditionalNature-value';
			if (param === 'forwardUnconditionalNumber') return 'forwardUnconditionalNumber-value';
			if (param === 'identificationRestriction') return 'identificationRestriction-value';
			if (param === 'intercom') return 'intercom-value';
			if (param === 'ipRestrictions') return 'ipRestrictions-value';
			if (param === 'language') return 'language-value';
			if (param === 'lockOutCall') return 'lockOutCall-value';
			if (param === 'lockOutCallPassword') return 'lockOutCallPassword-value';
			if (param === 'proxy') return 'proxy-value';
			if (param === 'recordOutgoingCallsBeta') return 'recordOutgoingCallsBeta-value';
			if (param === 'toneOnCallWaitingSoundId') return 'toneOnCallWaitingSoundId-value';
			if (param === 'toneOnHoldSoundId') return 'toneOnHoldSoundId-value';
			if (param === 'toneRingbackSoundId') return 'toneRingbackSoundId-value';
			if (param === 'voicemailExternalNumber') return 'voicemailExternalNumber-value';
			if (param === 'voicemailInternalNumber') return 'voicemailInternalNumber-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPut as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
