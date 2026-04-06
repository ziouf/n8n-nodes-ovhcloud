import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update Freefax Directory operation.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}/directory
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
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
						searchListMethod: 'getFreefaxServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Directory entry name',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'Street address',
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Post Code',
			name: 'postCode',
			type: 'string',
			default: '',
			description: 'Postal code',
			displayOptions,
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'Country code (ISO 3166-1 alpha-2)',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Contact email address',
			displayOptions,
		},
		{
			displayName: 'Display in Universal Directory',
			name: 'displayUniversalDirectory',
			type: 'boolean',
			default: false,
			description: 'Whether to display in the universal directory',
			displayOptions,
		},
		{
			displayName: 'Display in Reverse Search',
			name: 'displaySearchReverse',
			type: 'boolean',
			default: false,
			description: 'Whether to allow reverse search',
			displayOptions,
		},
		{
			displayName: 'Display in Marketing Directory',
			name: 'displayMarketingDirectory',
			type: 'boolean',
			default: false,
			description: 'Whether to display in marketing directories',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description:
				'Additional directory fields as a JSON object. Overrides individual fields above.',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Freefax Directory operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body: IDataObject = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;

	const name = this.getNodeParameter('name', 0, '') as string;
	const address = this.getNodeParameter('address', 0, '') as string;
	const city = this.getNodeParameter('city', 0, '') as string;
	const postCode = this.getNodeParameter('postCode', 0, '') as string;
	const country = this.getNodeParameter('country', 0, '') as string;
	const email = this.getNodeParameter('email', 0, '') as string;
	const displayUniversalDirectory = this.getNodeParameter(
		'displayUniversalDirectory',
		0,
		false,
	) as boolean;
	const displaySearchReverse = this.getNodeParameter('displaySearchReverse', 0, false) as boolean;
	const displayMarketingDirectory = this.getNodeParameter(
		'displayMarketingDirectory',
		0,
		false,
	) as boolean;

	if (name) body.name = name;
	if (address) body.address = address;
	if (city) body.city = city;
	if (postCode) body.postCode = postCode;
	if (country) body.country = country;
	if (email) body.email = email;
	if (displayUniversalDirectory !== undefined)
		body.displayUniversalDirectory = displayUniversalDirectory;
	if (displaySearchReverse !== undefined) body.displaySearchReverse = displaySearchReverse;
	if (displayMarketingDirectory !== undefined)
		body.displayMarketingDirectory = displayMarketingDirectory;

	const data = (await client.httpPut(`/freefax/${serviceName}/directory`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
