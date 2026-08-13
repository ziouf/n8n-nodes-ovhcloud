/**
 * Typed helper for creating mock IExecuteFunctions in tests.
 *
 * Exports `createMockExecuteFunctions` which returns a mock covering the
 * surface used by the transport layer (getCredentials, getNodeParameter,
 * helpers.httpRequest, helpers.returnJsonArray, continueOnFail,
 * getFirstCollectionItem, getInputData).
 */

import type { IExecuteFunctions } from 'n8n-workflow';

/** Minimal typed interface for the execute-function surface used by tests. */
export interface MockExecuteFunctions extends Partial<Omit<IExecuteFunctions, 'helpers'>> {
	getCredentials: jest.Mock;
	getNodeParameter: jest.Mock;
	helpers: {
		httpRequest: jest.Mock;
		returnJsonArray: jest.Mock;
	};
	continueOnFail: jest.Mock;
	getFirstCollectionItem: jest.Mock;
	getInputData: jest.Mock;
}

/** Default OVH credentials returned by getCredentials. */
const DEFAULT_CREDENTIALS = {
	endpoint: 'eu.api.ovh.com/1.0',
	appKey: 'test-app-key',
	appSecret: 'test-app-secret',
	consumerKey: 'test-consumer-key',
};

/**
 * Creates a strongly-typed mock of the execute-function surface.
 *
 * @param overrides - Partial overrides for any mock (e.g. `{ getNodeParameter: jest.fn().mockReturnValue('foo') }`)
 * @returns A mock context matching `IExecuteFunctions` surface
 */
export function createMockExecuteFunctions(
	overrides: Record<string, unknown> = {},
): jest.Mocked<IExecuteFunctions> {
	const httpRequestSpy = jest.fn().mockResolvedValue({ data: {} });

	return {
		getCredentials: jest.fn().mockResolvedValue({
			...DEFAULT_CREDENTIALS,
			...(overrides.getCredentials as Record<string, unknown> | undefined),
		}),
		getNodeParameter: jest.fn() as unknown as jest.Mock,
		helpers: {
			httpRequest: httpRequestSpy as unknown as jest.Mock,
			returnJsonArray: jest.fn((data: unknown[]) => data.map((item) => ({ json: item }))),
		},
		continueOnFail: jest.fn().mockReturnValue(false),
		getFirstCollectionItem: jest.fn().mockReturnValue({}),
		getInputData: jest.fn().mockReturnValue([{ json: {}, index: 0 }]),
		...overrides,
	};
}

/**
 * Alias matching the existing `buildMockCtx` name from `tests/helpers.ts`.
 *
 * @param overrides - Partial overrides
 * @returns A mock context matching `IExecuteFunctions` surface
 */
export function buildMockCtx(
	overrides: Record<string, unknown> = {},
): jest.Mocked<IExecuteFunctions> {
	return createMockExecuteFunctions(overrides);
}
