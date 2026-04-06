import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create Contact operation
 *
 * Creates a new contact.
 *
 * HTTP method: POST
 * Endpoint: /domain/contact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The contact name',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The contact email',
			displayOptions,
		},
		{
			displayName: 'Phone',
			name: 'phone',
			type: 'string',
			default: '',
			description: 'The contact phone number',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'The contact address',
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			description: 'The contact city',
			displayOptions,
		},
		{
			displayName: 'ZIP',
			name: 'zip',
			type: 'string',
			default: '',
			description: 'The contact ZIP code',
			displayOptions,
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'The contact country code',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const body: IDataObject = {
		name: this.getNodeParameter('name', 0) as string,
		email: this.getNodeParameter('email', 0) as string,
	};

	const phone = this.getNodeParameter('phone', 0, '') as string;
	const address = this.getNodeParameter('address', 0, '') as string;
	const city = this.getNodeParameter('city', 0, '') as string;
	const zip = this.getNodeParameter('zip', 0, '') as string;
	const country = this.getNodeParameter('country', 0, '') as string;

	if (phone) body.phone = phone;
	if (address) body.address = address;
	if (city) body.city = city;
	if (zip) body.zip = zip;
	if (country) body.country = country;

	const data = (await client.httpPost('/domain/contact', body)) as IDataObject;
	return [{ json: data }];
}
