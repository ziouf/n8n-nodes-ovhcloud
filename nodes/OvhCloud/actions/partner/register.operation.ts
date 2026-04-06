import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Register as Partner operation for Partner resource
 *
 * Registers the authenticated account as a partner:
 * - HTTP POST request to `/partner` endpoint
 * - Requires partner registration body
 * - Returns void on success
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Register Partner operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'Account name for the partner registration',
			displayOptions,
		},
		{
			displayName: 'Contact Email',
			name: 'contactEmail',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact email for the partner registration',
			displayOptions,
		},
		{
			displayName: 'Contact First Name',
			name: 'contactFirstName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contact Last Name',
			name: 'contactLastName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contact Phone',
			name: 'contactPhone',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact phone number',
			displayOptions,
		},
		{
			displayName: 'Contact Position',
			name: 'contactPosition',
			type: 'options',
			options: [
				{ name: 'AF', value: 'AF' },
				{ name: 'Business Owner', value: 'BusinessOwner' },
				{ name: 'HR', value: 'HR' },
				{ name: 'IT Devops', value: 'ITDevops' },
				{ name: 'IT Other', value: 'ITOther' },
				{ name: 'IT SysAdmin', value: 'ITSysAdmin' },
				{ name: 'LC', value: 'LC' },
				{ name: 'Marketing', value: 'Marketing' },
				{ name: 'Other', value: 'Other' },
				{ name: 'PreSales', value: 'PreSales' },
				{ name: 'Production', value: 'Production' },
				{ name: 'Purchasing', value: 'Purchasing' },
				{ name: 'R&D', value: 'RD' },
				{ name: 'Sales', value: 'Sales' },
			],
			default: 'Other',
			required: true,
			description: 'Contact position in the company',
			displayOptions,
		},
		{
			displayName: 'Sales Projection (EUR)',
			name: 'salesProjection',
			type: 'number',
			default: 0,
			required: true,
			description: 'Sales projection in euros',
			displayOptions,
		},
		{
			displayName: 'Support Agreement Statement',
			name: 'supportAgreementStatement',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Accept the support agreement statement',
			displayOptions,
		},
		{
			displayName: 'Email Communication Opt-In',
			name: 'emailCommunication',
			type: 'boolean',
			default: false,
			description: 'GDPR - email/communication opt in',
			displayOptions,
		},
	];
}

/**
 * Executes the Register as Partner operation.
 *
 * Registers the authenticated account as a partner.
 *
 * HTTP method: POST
 * Endpoint: /partner
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body = {
		account: {
			name: this.getNodeParameter('accountName', 0) as string,
		},
		contact: {
			email: this.getNodeParameter('contactEmail', 0) as string,
			firstName: this.getNodeParameter('contactFirstName', 0) as string,
			lastName: this.getNodeParameter('contactLastName', 0) as string,
			phone: this.getNodeParameter('contactPhone', 0) as string,
			position: this.getNodeParameter('contactPosition', 0) as string,
		},
		partnership: {
			salesProjection: this.getNodeParameter('salesProjection', 0) as number,
			supportAgreementStatement: this.getNodeParameter('supportAgreementStatement', 0) as boolean,
			emailCommunication: this.getNodeParameter('emailCommunication', 0, false) as boolean,
		},
	};
	const data = (await client.httpPost('/partner', { body })) as IDataObject;
	return [{ json: data }];
}
