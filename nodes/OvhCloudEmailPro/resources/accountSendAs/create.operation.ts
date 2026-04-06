import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Account Send As operation.
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
						searchListMethod: 'getEmailProServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'Email address of the account',
			displayOptions,
		},
		{
			displayName: 'Allow Account ID',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to allow sending as',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Send As operation.
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/account/{email}/sendAs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', 0) as string;

	const body: IDataObject = { allowAccountId };

	const data = (await client.httpPost(
		`/email/pro/${serviceName}/account/${email}/sendAs`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
