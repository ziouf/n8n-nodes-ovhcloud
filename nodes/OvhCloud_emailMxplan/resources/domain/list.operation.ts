import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List domains for an Email Mxplan service.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/domain
 * Query params: state (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
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
						searchListMethod: 'getEmailMxplanServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'string',
			default: '',
			description: 'Filter domains by state',
			displayOptions,
		},
	];
}

/**
 * Executes the List Domains operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const state = this.getNodeParameter('state', 0, '') as string;
	const qs: IDataObject = {};
	if (state) qs.state = state;
	const data = (await client.httpGet(`/email/mxplan/${service}/domain`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
