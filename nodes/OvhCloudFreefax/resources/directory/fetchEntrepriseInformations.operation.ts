import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Fetch Entreprise Informations for Freefax Directory operation.
 *
 * HTTP method: POST
 * Endpoint: /freefax/{serviceName}/directory/fetchEntrepriseInformations
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
			displayName: 'Entreprise Number',
			name: 'entrepriseNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'The entreprise number to fetch informations for',
			displayOptions,
		},
	];
}

/**
 * Executes the Fetch Entreprise Informations operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const entrepriseNumber = this.getNodeParameter('entrepriseNumber', 0) as string;

	const data = (await client.httpPost(
		`/freefax/${serviceName}/directory/fetchEntrepriseInformations`,
		{ body: { entrepriseNumber } },
	)) as IDataObject;
	return [{ json: data }];
}
