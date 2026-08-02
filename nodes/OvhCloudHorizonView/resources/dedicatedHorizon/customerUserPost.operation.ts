import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			description: 'Username for the new customer user in Active Directory',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email for the new customer user in Active Directory',
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
 * Add a customer user to the dedicated Horizon component.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/customerUser
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;

	const body: IDataObject = { username: this.getNodeParameter('username', 0) as string };

	const email = (this.getNodeParameter('email', 0, '') as string) || '';
	if (email) body.email = email;

	const password = (this.getNodeParameter('password', 0, '') as string) || '';
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/dedicatedHorizon/customerUser`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
