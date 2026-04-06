import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create send-as permission for an account in an Email Mxplan service.
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/account/{email}/sendAs
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailMxplanServices',
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
			description: 'The email address of the account',
			displayOptions,
		},
		{
			displayName: 'Allow Account ID',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The account ID to allow sending as',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Send As operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const email = this.getNodeParameter('email', 0) as string;
	const body: IDataObject = {
		allowAccountId: this.getNodeParameter('allowAccountId', 0) as string,
	};
	const data = (await client.httpPost(`/email/mxplan/${service}/account/${email}/sendAs`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
