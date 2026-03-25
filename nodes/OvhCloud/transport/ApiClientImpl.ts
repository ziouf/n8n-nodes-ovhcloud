import type { IDataObject, IHttpRequestOptions } from 'n8n-workflow';
import type { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
import type { OvhCredentialsType } from '../../../credentials/OvhCloudApi.credentials';
import { CredentialHolder } from './CredentialHolder';

type IFunctions = IExecuteFunctions | ILoadOptionsFunctions;

export class ApiClient {
	fn: IFunctions;

	constructor(fn: IFunctions) {
		this.fn = fn;
	}

	private async getCredentials(): Promise<CredentialHolder> {
		const rawCredentials = await this.fn.getCredentials('ovhCloud-Api');
		return new CredentialHolder(rawCredentials as OvhCredentialsType);
	}

	public async httpGet(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'GET', url, qs, ...options }),
		);
	}

	public async httpPost(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'POST', url, body, qs, ...options }),
		);
	}

	public async httpPut(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'PUT', url, body, qs, ...options }),
		);
	}

	public async httpDelete(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'DELETE', url, qs, ...options }),
		);
	}
}
