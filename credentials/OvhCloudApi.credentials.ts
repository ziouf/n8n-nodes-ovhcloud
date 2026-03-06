import {
    ICredentialTestRequest,
    type ICredentialDataDecryptedObject,
    type ICredentialType,
    type IDataObject,
    type IHttpRequestOptions,
    type INodeProperties,
    type Icon,
} from 'n8n-workflow';
import { createHash } from 'crypto';

export type OvhCredentialsType = {
    endpoint: string;
    appKey: string;
    appSecret: string;
    consumerKey: string;
} & IDataObject;

export const OvhCloudApiSecretName = 'ovhCloud-Api';

export class OvhCloudApi implements ICredentialType {
    name = OvhCloudApiSecretName;
    displayName = 'OVH API';
    icon = 'file:../icons/ovh_vertical.svg' as Icon;
    documentationUrl = 'https://api.ovh.com/console/';
    properties: INodeProperties[] = [
        {
            displayName: 'Endpoint',
            name: 'endpoint',
            type: 'options',
            options: [
                {
                    name: 'OVH Europe',
                    value: 'eu.api.ovh.com/1.0',
                },
                {
                    name: 'OVH Canada',
                    value: 'ca.api.ovh.com/1.0',
                },
                {
                    name: 'OVH USA',
                    value: 'api.us.ovhcloud.com/1.0',
                },
                {
                    name: 'SoYouStart Europe',
                    value: 'eu.api.soyoustart.com/1.0',
                },
                {
                    name: 'SoYouStart North-America',
                    value: 'ca.api.soyoustart.com/1.0',
                },
                {
                    name: 'Kimsufi Europe',
                    value: 'eu.api.kimsufi.com/1.0',
                },
                {
                    name: 'Kimsufi North-America',
                    value: 'ca.api.kimsufi.com/1.0',
                },
            ],
            default: 'eu.api.ovh.com/1.0',
            description: 'The OVH API endpoint to use.',
        },
        {
            displayName: 'Application Key',
            name: 'appKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            description: 'Your OVH application key.',
            required: true,
        },
        {
            displayName: 'Application Secret',
            name: 'appSecret',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            description: 'Your OVH application secret.',
            required: true,
        },
        {
            displayName: 'Consumer Key',
            name: 'consumerKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            description: 'Your OVH consumer key.',
            required: true,
        },
    ];

    async authenticate(
        rawCredentials: ICredentialDataDecryptedObject,
        requestOptions: IHttpRequestOptions,
    ): Promise<IHttpRequestOptions> {
        return signRequestOptions(rawCredentials as OvhCredentialsType, requestOptions);
    };

    test: ICredentialTestRequest = {
        request: {
            url: '/me',
            method: 'GET',
        },
        rules: [
            {
                type: 'responseCode',
                properties: {
                    value: 200,
                    message: 'Authentication successful',
                }
            }
        ]
    };
}

export const signRequestOptions = (
    credentials: OvhCredentialsType, 
    requestOptions: IHttpRequestOptions
): IHttpRequestOptions => {
    const { endpoint, appKey, appSecret, consumerKey } = credentials;
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