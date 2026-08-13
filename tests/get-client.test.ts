/**
 * Tests for getClient() / clearClientCache() in ApiClient.ts.
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import { getClient, clearClientCache } from '../shared/transport/ApiClient';
import { ApiClient } from '../shared/transport/ApiClientImpl';

describe('getClient', () => {
	beforeEach(() => {
		clearClientCache();
	});

	it('returns an ApiClient instance', () => {
		const ctx = {
			getCredentials: jest.fn(),
			getNodeParameter: jest.fn(),
			helpers: { httpRequest: jest.fn() },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const client = getClient(ctx);
		expect(client).toBeInstanceOf(ApiClient);
	});

	it('returns the same instance for two calls with the same context', () => {
		const ctx = {
			getCredentials: jest.fn(),
			getNodeParameter: jest.fn(),
			helpers: { httpRequest: jest.fn() },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const client1 = getClient(ctx);
		const client2 = getClient(ctx);

		expect(client1).toBe(client2);
	});

	it('returns distinct instances for two different contexts', () => {
		const ctx1 = {
			getCredentials: jest.fn(),
			getNodeParameter: jest.fn(),
			helpers: { httpRequest: jest.fn() },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const ctx2 = {
			getCredentials: jest.fn(),
			getNodeParameter: jest.fn(),
			helpers: { httpRequest: jest.fn() },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const client1 = getClient(ctx1);
		const client2 = getClient(ctx2);

		expect(client1).not.toBe(client2);
	});

	it('clearClientCache() allows a new instance after clearing', () => {
		const ctx = {
			getCredentials: jest.fn(),
			getNodeParameter: jest.fn(),
			helpers: { httpRequest: jest.fn() },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const client1 = getClient(ctx);
		clearClientCache();
		const client2 = getClient(ctx);

		expect(client1).not.toBe(client2);
	});

	it('clearClientCache() is a no-op when cache is empty', () => {
		clearClientCache(); // should not throw
	});
});
