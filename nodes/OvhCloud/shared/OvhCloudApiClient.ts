import { IDataObject, IExecuteFunctions, IHttpRequestOptions, ILoadOptionsFunctions } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType } from "../../../credentials/OvhCloudApi.credentials";
import { createHash } from 'crypto';

type IFunctions = IExecuteFunctions | ILoadOptionsFunctions;

export class OvhCloudApiClient {
    fn: IFunctions;

    constructor(fn: IFunctions) {
        this.fn = fn;
    }

    private async signRequestOptions(
        requestOptions: IHttpRequestOptions,
    ): Promise<IHttpRequestOptions> {
        const { endpoint, appKey, appSecret, consumerKey } = await this.fn.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
        const { qs } = requestOptions;
        const baseURL = `https://${endpoint}`;
        const url = baseURL + requestOptions.url + (qs && Object.keys(qs).length ? '?' + new URLSearchParams(qs as Record<string, string>).toString() : '');
        const method = requestOptions.method || 'GET';
        const body = typeof requestOptions.body === 'object' ? JSON.stringify(requestOptions.body) : (requestOptions.body as string) || '';
        const ts = Math.floor(Date.now() / 1000);
        const signatureFields = [appSecret, consumerKey, method, url, body, ts];
    
        return Object.assign({}, requestOptions, {
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Ovh-Application': appKey,
                'X-Ovh-Consumer': consumerKey,
                'X-Ovh-Timestamp': ts,
                'X-Ovh-Signature': '$1$' + createHash('sha1').update(signatureFields.join('+')).digest('hex') ,
            },
        });
    }

    public async httpGet(url: string, qs: IDataObject = {}) {
        return await this.fn.helpers.httpRequestWithAuthentication.call(this.fn, OvhCloudApiSecretName, 
            await this.signRequestOptions({ method: 'GET', url, qs, json: true })
        );
    }
    public async httpPost(url: string, body: IDataObject = {}, qs: IDataObject = {}) {
        return await this.fn.helpers.httpRequestWithAuthentication.call(this.fn, OvhCloudApiSecretName, 
            await this.signRequestOptions({ method: 'POST', url, body, qs, json: true })
        );
    }
    public async httpPut(url: string, body: IDataObject = {}, qs: IDataObject = {}) {
        return await this.fn.helpers.httpRequestWithAuthentication.call(this.fn, OvhCloudApiSecretName, 
            await this.signRequestOptions({ method: 'PUT', url, body, qs, json: true })
        );
    }
    public async httpDelete(url: string, qs: IDataObject = {}) {
        return await this.fn.helpers.httpRequestWithAuthentication.call(this.fn, OvhCloudApiSecretName, 
            await this.signRequestOptions({ method: 'DELETE', url, qs, json: true })
        );
    }
}