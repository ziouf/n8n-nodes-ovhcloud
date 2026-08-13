import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Sound ID',
			name: 'soundId',
			type: 'string',
			default: '',
			required: true,
			description: 'The soundId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingSoundDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const soundId = this.getNodeParameter('soundId', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/sound' + '/' + encodeURIComponent(soundId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
