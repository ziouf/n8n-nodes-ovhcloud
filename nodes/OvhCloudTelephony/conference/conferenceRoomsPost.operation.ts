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
			displayName: 'Room Number',
			name: 'roomNumber',
			type: 'string',
			default: '',
			description: 'The room number (a random number will be generated if not specified)',
			displayOptions,
		},
	];
}

/**
 * Executes the ConferenceRoomsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/conference/{serviceName}/rooms
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const roomNumber = this.getNodeParameter('roomNumber', _itemIndex) as string;

	const body: IDataObject = {
		roomNumber: roomNumber,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/conference' + '/' + encodeURIComponent(serviceName) + '/rooms', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
