import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change contact information for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/changeContact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Admin contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'Billing contact handle',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'Technical contact handle',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const body: IDataObject = {};
	const contactAdmin = this.getNodeParameter('contactAdmin', 0, '') as string;
	const contactBilling = this.getNodeParameter('contactBilling', 0, '') as string;
	const contactTech = this.getNodeParameter('contactTech', 0, '') as string;
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/changeContact`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
