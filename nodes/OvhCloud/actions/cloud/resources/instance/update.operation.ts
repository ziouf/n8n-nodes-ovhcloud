import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Update Instance operation.
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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the instance to update',
			displayOptions,
		},
		{
			displayName: 'Monthly Billing',
			name: 'monthlyBilling',
			type: 'boolean',
			default: false,
			description: 'Whether to enable monthly billing',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'New name for the instance',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Instance operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const monthlyBilling = this.getNodeParameter('monthlyBilling', 0, false) as boolean;
	const name = this.getNodeParameter('name', 0, '') as string;

	const body: IDataObject = {};
	if (name) body.name = name;
	body.monthlyBilling = monthlyBilling;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/instance/${instanceId}`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
