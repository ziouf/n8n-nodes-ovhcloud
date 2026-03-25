import { createHash } from 'crypto';
import type { IHttpRequestOptions } from 'n8n-workflow';

export interface OvhCredentialsType {
	endpoint: string;
	appKey: string;
	appSecret: string;
	consumerKey: string;
	[key: string]: unknown;
}

export class CredentialHolder implements OvhCredentialsType {
	endpoint: string;
	appKey: string;
	appSecret: string;
	consumerKey: string;
	[key: string]: unknown;

	constructor(credentials: OvhCredentialsType) {
		this.endpoint = credentials.endpoint;
		this.appKey = credentials.appKey;
		this.appSecret = credentials.appSecret;
		this.consumerKey = credentials.consumerKey;
		for (const key in credentials) {
			if (
				Object.prototype.hasOwnProperty.call(credentials, key) &&
				!['endpoint', 'appKey', 'appSecret', 'consumerKey'].includes(key)
			) {
				this[key] = credentials[key];
			}
		}
	}

	sign(requestOptions: IHttpRequestOptions): IHttpRequestOptions {
		const { endpoint, appKey, appSecret, consumerKey } = this;
		const { url: path, qs = {}, headers = {} } = requestOptions;
		const baseURL = `https://${endpoint}`;
		const searchParams = new URLSearchParams(qs as Record<string, string>).toString();
		const url = [baseURL, path, Object.keys(qs).length ? '?' + searchParams : ''].join('');
		const method = requestOptions.method || 'GET';
		const body =
			typeof requestOptions.body === 'object'
				? JSON.stringify(requestOptions.body)
				: (requestOptions.body as string) || '';
		const ts = Math.floor(Date.now() / 1000);
		const signatureFields = [appSecret, consumerKey, method, url, body, ts];

		headers['Content-Type'] = 'application/json';
		headers['X-Ovh-Application'] = appKey;
		headers['X-Ovh-Consumer'] = consumerKey;
		headers['X-Ovh-Timestamp'] = ts.toString();
		headers['X-Ovh-Signature'] =
			'$1$' + createHash('sha1').update(signatureFields.join('+')).digest('hex');

		return Object.assign({}, requestOptions, { baseURL, headers });
	};
}
