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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the object',
			displayOptions,
		},
		{
			displayName: 'Room Number',
			name: 'roomNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'The conference room number',
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
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'The value of energy level',
			displayOptions,
		},
	];
}

/**
 * Executes the ConferenceRoomsParticipantsEnergyPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/energy
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const roomNumber = this.getNodeParameter('roomNumber', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const value = this.getNodeParameter('value', _itemIndex) as string;

	const body: IDataObject = {
		value: value,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/conference' + '/' + encodeURIComponent(serviceName) + '/rooms' + '/' + encodeURIComponent(roomNumber) + '/participants' + '/' + encodeURIComponent(id) + '/energy', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
