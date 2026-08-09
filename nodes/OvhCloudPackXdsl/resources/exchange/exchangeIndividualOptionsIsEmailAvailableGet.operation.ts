import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
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
			description: 'The email address',
			displayOptions,
		},
	];
}

/**
 * Check if the email address is available for Exchange Individual service creation.
 *
 * HTTP method: GET
 * Endpoint: /pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;

	const qs: IDataObject = { email };
	const data = (await client.httpGet(
		`/pack/xdsl/${encodeURIComponent(packName)}/exchangeIndividual/options/isEmailAvailable`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ value: data }]);
}
