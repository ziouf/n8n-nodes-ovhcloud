import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain Trust ID',
			name: 'domainTrustId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Passphrase',
			name: 'passphrase',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Shared passphrase to create the Active Directory trust',
			displayOptions,
		},
		{
			displayName: 'Service Account Password',
			name: 'serviceAccountPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Password of the horizonUI service account',
			displayOptions,
		},
	];
}

/**
 * Create a trust for a domain trust.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const domainTrustId = this.getNodeParameter('domainTrustId', _itemIndex ?? 0) as number;

	const body: IDataObject = {
		passphrase: this.getNodeParameter('passphrase', _itemIndex ?? 0) as string,
		serviceAccountPassword: this.getNodeParameter('serviceAccountPassword', _itemIndex ?? 0) as string,
	};

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/domainTrust/${domainTrustId}/createTrust`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
