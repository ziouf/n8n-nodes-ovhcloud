import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Get Usage History operation.
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
						searchListMethod: 'getCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'dateTime',
			default: '',
			description: 'Start date for usage history',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'dateTime',
			default: '',
			description: 'End date for usage history',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Usage History operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/usage/history
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const from = this.getNodeParameter('from', 0, '') as string;
	const to = this.getNodeParameter('to', 0, '') as string;

	const qs: IDataObject = {};
	if (from) qs.from = from;
	if (to) qs.to = to;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/usage/history`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
