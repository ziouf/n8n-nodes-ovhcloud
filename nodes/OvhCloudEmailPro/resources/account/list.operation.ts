import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List Accounts operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailProServices',
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
			description: 'Filter by account ID',
			displayOptions,
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter by primary email address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Accounts operation.
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/account
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const id = this.getNodeParameter('id', 0, '') as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0, '') as string;

	if (id) qs.id = id;
	if (primaryEmailAddress) qs.primaryEmailAddress = primaryEmailAddress;

	const data = (await client.httpGet(
		`/email/pro/${serviceName}/account`,
		Object.keys(qs).length > 0 ? qs : undefined,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
