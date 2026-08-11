/**
 * Tests for ApiClient.getCredentialScope() — S1 credential-scoped cache isolation.
 */

import { ApiClient } from '../shared/transport/ApiClient';
import type { ILoadOptionsFunctions } from 'n8n-workflow';

describe('getCredentialScope', () => {
	/** Build a minimal mock context that returns the given credentials. */
	function createContext(
		endpoint: string,
		consumerKey: string,
	): jest.Mocked<ILoadOptionsFunctions> {
		return {
			getCredentials: jest.fn().mockResolvedValue({
				endpoint,
				appKey: 'app-key',
				appSecret: 'app-secret',
				consumerKey,
			}),
			getNodeParameter: jest.fn(),
			getInputData: () => [],
			getFirstCollectionItem: () => ({}),
			continueOnFail: jest.fn(),
			helpers: {
				httpRequest: jest.fn(),
				returnJsonArray: (d: unknown[]) => d.map((item) => ({ json: item })),
			},
		} as unknown as jest.Mocked<ILoadOptionsFunctions>;
	}

	it('returns scope in format endpoint|16-hex-chars', async () => {
		const ctx = createContext('eu.api.ovh.com/1.0', 'my-consumer-key');
		const client = new ApiClient(ctx);
		const scope = await client.getCredentialScope();

		expect(scope).toMatch(/^eu\.api\.ovh\.com\/1\.0\|[a-f0-9]{16}$/);
	});

	it('never contains the raw consumer key', async () => {
		const ctx = createContext('eu.api.ovh.com/1.0', 'super-secret-consumer-key-12345');
		const client = new ApiClient(ctx);
		const scope = await client.getCredentialScope();

		expect(scope).not.toContain('super-secret-consumer-key-12345');
	});

	it('produces different scopes for different consumer keys', async () => {
		const ctx1 = createContext('eu.api.ovh.com/1.0', 'consumer-key-a');
		const ctx2 = createContext('eu.api.ovh.com/1.0', 'consumer-key-b');
		const client1 = new ApiClient(ctx1);
		const client2 = new ApiClient(ctx2);

		const scope1 = await client1.getCredentialScope();
		const scope2 = await client2.getCredentialScope();

		expect(scope1).not.toBe(scope2);
	});

	it('produces different scopes for different endpoints', async () => {
		const ctx1 = createContext('eu.api.ovh.com/1.0', 'same-key');
		const ctx2 = createContext('ca.api.ovh.com/1.0', 'same-key');
		const client1 = new ApiClient(ctx1);
		const client2 = new ApiClient(ctx2);

		const scope1 = await client1.getCredentialScope();
		const scope2 = await client2.getCredentialScope();

		expect(scope1).not.toBe(scope2);
	});

	it('is deterministic for the same credential', async () => {
		const ctx = createContext('eu.api.ovh.com/1.0', 'deterministic-key');
		const client = new ApiClient(ctx);

		const scope1 = await client.getCredentialScope();
		const scope2 = await client.getCredentialScope();

		expect(scope1).toBe(scope2);
	});

	it('getCredentials is memoized (called once)', async () => {
		const ctx = createContext('eu.api.ovh.com/1.0', 'memo-key');
		const client = new ApiClient(ctx);

		await client.getCredentialScope();
		await client.getCredentialScope();

		expect(ctx.getCredentials).toHaveBeenCalledTimes(1);
	});

	it('getCredentials is re-fetched after clearCredentialsCache', async () => {
		const ctx = createContext('eu.api.ovh.com/1.0', 'refresh-key');
		const client = new ApiClient(ctx);

		await client.getCredentialScope();
		client.clearCredentialsCache();
		await client.getCredentialScope();

		expect(ctx.getCredentials).toHaveBeenCalledTimes(2);
	});
});
