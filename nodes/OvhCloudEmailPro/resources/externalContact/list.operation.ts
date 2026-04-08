import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List External Contacts operation.
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
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Filter by display name',
			displayOptions,
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter by external email address',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Filter by first name',
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Filter by last name',
			displayOptions,
		},
	];
}

/**
 * Executes the List External Contacts operation.
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/externalContact
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const displayName = this.getNodeParameter('displayName', 0, '') as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', 0, '') as string;
	const firstName = this.getNodeParameter('firstName', 0, '') as string;
	const lastName = this.getNodeParameter('lastName', 0, '') as string;

	if (displayName) qs.displayName = displayName;
	if (externalEmailAddress) qs.externalEmailAddress = externalEmailAddress;
	if (firstName) qs.firstName = firstName;
	if (lastName) qs.lastName = lastName;

	const data = (await client.httpGet(
		`/email/pro/${serviceName}/externalContact`,
		Object.keys(qs).length > 0 ? qs : undefined,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
