/**
 * Typed helper for creating mock ApiClient instances in tests.
 *
 * Exports `createMockApiClient` which returns an object with all public
 * ApiClient methods as `jest.fn()`, fully typed so that no `as any` casts
 * are needed when interacting with the mock.
 */

import type { IDataObject, IHttpRequestOptions } from 'n8n-workflow';

/**
 * Configuration options for pagination — copied from ApiClient
 * to avoid cross-module imports in test helpers.
 */
export interface PaginationOptions {
	offset?: number;
	limit?: number;
	maxItems?: number;
	query?: IDataObject;
	concurrency?: number;
}

/**
 * Configuration options for paginating through a list endpoint and
 * fetching full resources — copied from ApiClient to avoid
 * cross-module imports in test helpers.
 */
export interface PaginateResourcesOptions extends PaginationOptions {
	onSkipped?: (id: string, error: unknown) => void;
	concurrency?: number;
}

/**
 * Public surface of ApiClient that tests interact with.
 *
 * Only includes methods actually called by shared/methods/*.ts and tests/*.test.ts.
 */
export interface MockApiClient {
	httpGet: jest.Mock<
		Promise<unknown>,
		[url: string, qs?: IDataObject, options?: IHttpRequestOptions]
	>;
	httpPost: jest.Mock<
		Promise<unknown>,
		[url: string, body?: IDataObject, qs?: IDataObject, options?: IHttpRequestOptions]
	>;
	httpPut: jest.Mock<
		Promise<unknown>,
		[url: string, body?: IDataObject, qs?: IDataObject, options?: IHttpRequestOptions]
	>;
	httpDelete: jest.Mock<
		Promise<unknown>,
		[url: string, qs?: IDataObject, options?: IHttpRequestOptions]
	>;
	paginate: jest.Mock<Promise<unknown[]>, [endpoint: string, options?: PaginationOptions]>;
	paginateResources: jest.Mock<
		Promise<unknown[]>,
		[listEndpoint: string, itemEndpoint: string, options?: PaginateResourcesOptions]
	>;
	getCredentialScope: jest.Mock<Promise<string>, []>;
}

/**
 * Creates a strongly-typed mock ApiClient instance.
 *
 * Each call returns a FRESH object with fresh jest.fn() mocks.
 * Use this in `jest.mock` factories and in test bodies.
 *
 * @returns A mock client with all methods as jest.fn()
 *
 * @example
 * ```typescript
 * const mockClient = createMockApiClient();
 * mockClient.httpGet.mockResolvedValue(['item1', 'item2']);
 * ```
 */
export function createMockApiClient(): MockApiClient {
	return {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
		paginate: jest.fn(),
		paginateResources: jest.fn(),
		getCredentialScope: jest.fn().mockResolvedValue('scope-default'),
	};
}
