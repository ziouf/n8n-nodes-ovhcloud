import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a resource account.
 *
 * HTTP method: POST
 * Endpoint: resourceAccount
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Capacity',
			name: 'capacity',
			type: 'number',
			default: 0,
			required: true,
			description: 'The capacity of the resource',
			displayOptions,
		},
		{
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Equipment', value: 'equipment' },
				{ name: 'Room', value: 'room' },
			],
			default: 'equipment',
			required: true,
			description: 'The type of resource',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Resource Account operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const capacity = this.getNodeParameter('capacity', 0) as number;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const body: IDataObject = { capacity, resourceEmailAddress, type };

	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
