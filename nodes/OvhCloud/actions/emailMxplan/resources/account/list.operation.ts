import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List accounts for an Email Mxplan service.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account
 * Query params: id (optional), primaryEmailAddress (optional)
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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter accounts by ID',
			displayOptions,
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter accounts by primary email address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const id = this.getNodeParameter('id', 0, '') as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0, '') as string;
	const qs: IDataObject = {};
	if (id) qs.id = id;
	if (primaryEmailAddress) qs.primaryEmailAddress = primaryEmailAddress;
	const data = (await client.httpGet(`/email/mxplan/${service}/account`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
