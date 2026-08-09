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
	];
}

/**
 * Executes the ConferenceRoomsParticipantsKickPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/conference/{serviceName}/rooms/{roomNumber}/participants/{id}/kick
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const roomNumber = this.getNodeParameter('roomNumber', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/conference' + '/' + encodeURIComponent(serviceName) + '/rooms' + '/' + encodeURIComponent(roomNumber) + '/participants' + '/' + encodeURIComponent(id) + '/kick')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
