import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

const DIRECTORY_STRING_FIELDS = [
	'address',
	'addressExtra',
	'ape',
	'city',
	'country',
	'email',
	'firstName',
	'gender',
	'legalForm',
	'lineDescription',
	'name',
	'occupation',
	'postCode',
	'siret',
	'socialNomination',
	'status',
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Freefax Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Freefax line account service name (e.g. fr12345-ovh)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getFreefaxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'fr12345-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'Address of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'Address Extra',
			name: 'addressExtra',
			type: 'string',
			default: '',
			description: 'Additional address information',
			displayOptions,
		},
		{
			displayName: 'APE Code',
			name: 'ape',
			type: 'string',
			default: '',
			description: "Entreprise's category code for directory services",
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			description: 'City of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'Country of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'First name of the account holder',
			displayOptions,
		},
		{
			displayName: 'Gender',
			name: 'gender',
			type: 'string',
			default: '',
			description: 'Gender of the account holder',
			displayOptions,
		},
		{
			displayName: 'Legal Form',
			name: 'legalForm',
			type: 'string',
			default: '',
			description: 'Legal form of the entreprise',
			displayOptions,
		},
		{
			displayName: 'Line Description',
			name: 'lineDescription',
			type: 'string',
			default: '',
			description: 'Description of the Freefax line',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Name of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'Occupation',
			name: 'occupation',
			type: 'string',
			default: '',
			description: 'Occupation of the account holder',
			displayOptions,
		},
		{
			displayName: 'Post Code',
			name: 'postCode',
			type: 'string',
			default: '',
			description: 'Postal code of the Freefax line account',
			displayOptions,
		},
		{
			displayName: 'Receive PJ Directory',
			name: 'receivePJDirectory',
			type: 'boolean',
			default: false,
			description: 'Whether to receive directory information via email',
			displayOptions,
		},
		{
			displayName: 'SIRET',
			name: 'siret',
			type: 'string',
			default: '',
			description: 'SIRET number of the entreprise',
			displayOptions,
		},
		{
			displayName: 'Social Nomination',
			name: 'socialNomination',
			type: 'string',
			default: '',
			description: 'Social nomination of the account holder',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Status of the Freefax line account',
			displayOptions,
		},
	];
}

/**
 * Update the directory information for a specific Freefax line account.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}/directory
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	for (const field of DIRECTORY_STRING_FIELDS) {
		const value = (this.getNodeParameter(field, 0, '') as string) || '';
		if (value) body[field] = value;
	}

	const receivePJDirectory = this.getNodeParameter('receivePJDirectory', _itemIndex ?? 0) as boolean | undefined;
	if (receivePJDirectory !== undefined) {
		body.receivePJDirectory = receivePJDirectory;
	}

	await client.httpPut(`/freefax/${encodeURIComponent(serviceName)}/directory`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
