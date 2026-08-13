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
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Customer username of the HaaS user',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'New password for this Horizon View user',
			displayOptions,
		},
	];
}

/**
 * Change the password of a customer user of the dedicated Horizon component.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const username = this.getNodeParameter('username', _itemIndex ?? 0) as string;

	const body: IDataObject = {};

	const password = (this.getNodeParameter('password', _itemIndex ?? 0, '') as string) || '';
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/dedicatedHorizon/customerUser/${encodeURIComponent(username)}/changePassword`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
