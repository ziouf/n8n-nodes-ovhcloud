import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List external contacts for an Email Mxplan service.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/externalContact
 * Query params: displayName, externalEmailAddress, firstName, lastName (all optional)
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
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Filter external contacts by display name',
			displayOptions,
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter external contacts by email address',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Filter external contacts by first name',
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Filter external contacts by last name',
			displayOptions,
		},
	];
}

/**
 * Executes the List External Contacts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const displayName = this.getNodeParameter('displayName', 0, '') as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', 0, '') as string;
	const firstName = this.getNodeParameter('firstName', 0, '') as string;
	const lastName = this.getNodeParameter('lastName', 0, '') as string;
	const qs: IDataObject = {};
	if (displayName) qs.displayName = displayName;
	if (externalEmailAddress) qs.externalEmailAddress = externalEmailAddress;
	if (firstName) qs.firstName = firstName;
	if (lastName) qs.lastName = lastName;
	const data = (await client.httpGet(
		`/email/mxplan/${service}/externalContact`,
		qs,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
