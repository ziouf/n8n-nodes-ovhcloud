import {
	ICredentialTestRequest,
	type ICredentialDataDecryptedObject,
	type ICredentialType,
	type IHttpRequestOptions,
	type INodeProperties,
	type Icon,
} from 'n8n-workflow';
import { CredentialHolder, OvhCredentialsType } from '../nodes/OvhCloud/transport/CredentialHolder';

export const OvhCloudApiSecretName = 'ovhCloud-Api';
export * from '../nodes/OvhCloud/transport/CredentialHolder';

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
		const credentials = new CredentialHolder(rawCredentials as OvhCredentialsType);
		return credentials.sign(requestOptions);
	}

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
				},
			},
		],
	};
}
