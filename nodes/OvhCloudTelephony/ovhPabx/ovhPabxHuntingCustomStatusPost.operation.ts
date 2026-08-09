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
			displayName: 'Color',
			name: 'color',
			type: 'color',
			default: '',
			description: 'The color (in hexadecimal) of the status that will be displayed on agent banner web application',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'A short description of the status',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the status (Pause, Mission, etc...)',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxHuntingCustomStatusPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const color = this.getNodeParameter('color', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;

	const body: IDataObject = {
		color: color,
		description: description,
		name: name,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/customStatus', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
