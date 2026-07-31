import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Housing Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The housing service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'housingListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'h12345678.ovh.net',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Bandwidth',
			name: 'bandwidth',
			type: 'string',
			default: '',
			required: true,
			description: 'The bandwidth value (e.g. 100, 1000)',
			placeholder: 'e.g. 1000',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Housing Bandwidth operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/bandwidth
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const bandwidth = (this.getNodeParameter('bandwidth', 0) as string) || '';

	const body: IDataObject = { bandwidth };
	const data = (await client.httpPost(
		`/dedicated/housing/${serviceName}/bandwidth`,
		body,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
