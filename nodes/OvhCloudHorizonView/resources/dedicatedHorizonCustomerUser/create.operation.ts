import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a new customer user for a Dedicated Horizon service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/customerUser
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Username for the customer user',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address for the customer user',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Password for the customer user',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Dedicated Horizon Customer User operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		username: this.getNodeParameter('username', 0) as string,
	};
	const email = this.getNodeParameter('email', 0, '') as string;
	if (email) body.email = email;
	const password = this.getNodeParameter('password', 0, '') as string;
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/dedicatedHorizon/customerUser`,
		{ body },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
