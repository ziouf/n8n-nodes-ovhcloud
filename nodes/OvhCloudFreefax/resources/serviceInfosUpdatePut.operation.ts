import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

const SERVICE_INFOS_STRING_FIELDS = [
	'contactAdmin',
	'contactBilling',
	'contactTech',
	'domain',
	'engagedUpTo',
	'expiration',
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
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'Contact email for administrative purposes',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'Contact email for billing purposes',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'Contact email for technical purposes',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'Domain associated with the service',
			displayOptions,
		},
		{
			displayName: 'Engaged Up To',
			name: 'engagedUpTo',
			type: 'dateTime',
			default: '',
			description: 'Date until which the service is engaged',
			displayOptions,
		},
		{
			displayName: 'Expiration',
			name: 'expiration',
			type: 'dateTime',
			default: '',
			description: 'Expiration date of the service',
			displayOptions,
		},
		{
			displayName: 'Possible Renew Period',
			name: 'possibleRenewPeriod',
			type: 'string',
			default: '',
			description: 'Comma-separated possible renewal periods for the service (e.g. 6,12)',
			displayOptions,
		},
	];
}

/**
 * Modify service information for a specific Freefax line account.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	for (const field of SERVICE_INFOS_STRING_FIELDS) {
		const value = (this.getNodeParameter(field, 0, '') as string) || '';
		if (value) body[field] = value;
	}

	const possibleRenewPeriod = (this.getNodeParameter('possibleRenewPeriod', _itemIndex ?? 0, '') as string) || '';
	if (possibleRenewPeriod) {
		body.possibleRenewPeriod = possibleRenewPeriod
			.split(',')
			.map((period) => parseInt(period.trim(), 10))
			.filter((period) => !isNaN(period));
	}

	await client.httpPut(`/freefax/${encodeURIComponent(serviceName)}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
