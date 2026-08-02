import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Entreprise Number',
			name: 'entrepriseNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Enterprise number to fetch information from',
			displayOptions,
		},
	];
}

/**
 * Get enterprise information by providing an enterprise number.
 *
 * HTTP method: POST
 * Endpoint: /freefax/{serviceName}/directory/fetchEntrepriseInformations
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const entrepriseNumber = this.getNodeParameter('entrepriseNumber', 0) as string;

	const data = (await client.httpPost(
		`/freefax/${encodeURIComponent(serviceName)}/directory/fetchEntrepriseInformations`,
		{ entrepriseNumber: { entrepriseNumber } },
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
