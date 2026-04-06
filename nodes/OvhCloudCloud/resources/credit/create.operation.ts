import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Credit operation.
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
			displayName: 'Amount',
			name: 'amount',
			type: 'number',
			default: 0,
			required: true,
			description: 'Credit amount to add',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Credit operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/credit
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const amount = this.getNodeParameter('amount', 0) as number;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/credit`, {
		amount,
	})) as IDataObject;
	return [{ json: data }];
}
