import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * Description for Create User operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			required: true,
			description: 'First name of the user',
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			required: true,
			description: 'Last name of the user',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'Email address of the user',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Password for the user',
			displayOptions,
		},
		{
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			description: 'Group to assign the user to',
			displayOptions,
		},
	];
}

/**
 * Executes the Create User operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const firstName = this.getNodeParameter('firstName', 0) as string;
	const lastName = this.getNodeParameter('lastName', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const group = this.getNodeParameter('group', 0, '') as string;

	const body: IDataObject = { firstName, lastName, email, password };
	if (group) body.group = group;

	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/user`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
