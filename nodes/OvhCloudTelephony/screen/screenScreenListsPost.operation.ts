import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Call Number',
			name: 'callNumber',
			type: 'string',
			default: '',
			description: 'The callNumber of the generic screen list',
			displayOptions,
		},
		{
			displayName: 'Nature',
			name: 'nature',
			type: 'string',
			default: '',
			required: true,
			description: 'The nature of the generic screen list',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'The type of the generic screen list',
			displayOptions,
		},
	];
}

/**
 * Executes the ScreenScreenListsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/screen/{serviceName}/screenLists
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const callNumber = this.getNodeParameter('callNumber', itemIndex) as string;
	const nature = this.getNodeParameter('nature', itemIndex) as string;
	const type = this.getNodeParameter('type', itemIndex) as string;

	const body: IDataObject = {
		callNumber: callNumber,
		nature: nature,
		type: type,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/screen' + '/' + encodeURIComponent(serviceName) + '/screenLists', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
