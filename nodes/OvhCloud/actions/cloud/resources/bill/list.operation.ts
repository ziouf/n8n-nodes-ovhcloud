import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for List Bills operation.
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
			required: true,
			description: 'Start date for bill filtering',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'dateTime',
			default: '',
			required: true,
			description: 'End date for bill filtering',
			displayOptions,
		},
	];
}

/**
 * Executes the List Bills operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/bill
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const from = this.getNodeParameter('from', 0) as string;
	const to = this.getNodeParameter('to', 0) as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/bill`, {
		from,
		to,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
