/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './voicemailUpdatePut.operation';

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

describe('voicemailUpdatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName and voicemail edit parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(13);
			expect(result[0]).toMatchObject({
				displayName: 'Freefax Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Audio Format',
				name: 'audioFormat',
				type: 'options',
				default: 'wav',
				options: [
					{ name: 'AIFF', value: 'aiff' },
					{ name: 'AU', value: 'au' },
					{ name: 'FLAC', value: 'flac' },
					{ name: 'MP3', value: 'mp3' },
					{ name: 'OGG', value: 'ogg' },
					{ name: 'WAV', value: 'wav' },
				],
			});
			expect(result[7]).toMatchObject({
				displayName: 'Greeting Type',
				name: 'greetingType',
				type: 'options',
				default: 'default',
				options: [
					{ name: 'Default', value: 'default' },
					{ name: 'Full', value: 'full' },
					{ name: 'Short', value: 'short' },
				],
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
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

		it('should update voicemail via PUT with provided parameters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr12345-ovh';
						case 'audioFormat':
							return 'mp3';
						case 'doNotRecord':
							return false;
						case 'fromEmail':
							return 'voicemail@email.com';
						case 'fullGreetingSoundId':
							return 12345;
						case 'greetingType':
							return 'default';
						case 'unreadMessages':
							return 0;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr12345-ovh/voicemail', {
				audioFormat: 'mp3',
				doNotRecord: false,
				fromEmail: 'voicemail@email.com',
				fullGreetingSoundId: 12345,
				greetingType: 'default',
				unreadMessages: 0,
			});
			expect(result).toEqual([{ serviceName: 'fr12345-ovh', success: true }]);
		});

		it('should update voicemail via PUT with empty body when no parameters provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr12345-ovh';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr12345-ovh/voicemail', {});
		});

		it('should encode special characters in serviceName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr 12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr 12345-ovh';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr%2012345-ovh/voicemail', {});
		});
	});
});
