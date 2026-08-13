/**
 * Tests for the typed mock context helper (tests/helpers/mockCtx.ts).
 */

import { createMockExecuteFunctions, buildMockCtx } from './helpers/mockCtx';

describe('createMockExecuteFunctions', () => {
	it('getNodeParameter returns override value when provided', () => {
		const ctx = createMockExecuteFunctions({
			getNodeParameter: jest.fn().mockReturnValue('my-value'),
		});

		expect(ctx.getNodeParameter('foo', 0)).toBe('my-value');
	});

	it('helpers.httpRequest is a jest.fn', () => {
		const ctx = createMockExecuteFunctions();

		expect(ctx.helpers.httpRequest).toBeDefined();
		expect(jest.isMockFunction(ctx.helpers.httpRequest)).toBe(true);
	});

	it('returns default values when no overrides provided', () => {
		const ctx = createMockExecuteFunctions();

		expect(ctx.continueOnFail()).toBe(false);
		expect(ctx.getFirstCollectionItem()).toEqual({});
		expect(ctx.getInputData()).toEqual([{ json: {}, index: 0 }]);
		expect(ctx.helpers.returnJsonArray).toBeDefined();
	});

	it('credentials are returned by getCredentials', async () => {
		const ctx = createMockExecuteFunctions();

		const credentials = await ctx.getCredentials();
		expect(credentials).toHaveProperty('endpoint');
		expect(credentials).toHaveProperty('appKey');
		expect(credentials).toHaveProperty('appSecret');
		expect(credentials).toHaveProperty('consumerKey');
	});

	it('allows custom credentials override', async () => {
		const ctx = createMockExecuteFunctions({
			getCredentials: jest.fn().mockResolvedValue({
				endpoint: 'ca.api.ovh.com/1.0',
				appKey: 'custom-key',
				appSecret: 'custom-secret',
				consumerKey: 'custom-consumer',
			}),
		});

		const credentials = await ctx.getCredentials();
		expect(credentials.endpoint).toBe('ca.api.ovh.com/1.0');
		expect(credentials.appKey).toBe('custom-key');
	});
});

describe('buildMockCtx', () => {
	it('is an alias of createMockExecuteFunctions', () => {
		const a = buildMockCtx();
		const b = buildMockCtx();

		expect(a).not.toBe(b);
		expect(jest.isMockFunction(a.getNodeParameter)).toBe(true);
		expect(jest.isMockFunction(a.helpers.httpRequest)).toBe(true);
	});
});
