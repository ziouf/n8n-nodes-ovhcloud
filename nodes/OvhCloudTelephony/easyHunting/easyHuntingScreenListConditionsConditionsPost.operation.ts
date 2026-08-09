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
			displayName: 'Caller ID Number',
			name: 'callerIdNumber',
			type: 'string',
			default: '',
			description: 'Add a screenlist based on the presented caller number',
			displayOptions,
		},
		{
			displayName: 'Destination Number',
			name: 'destinationNumber',
			type: 'string',
			default: '',
			description: 'Add a screenlist based on the destination number',
			displayOptions,
		},
		{
			displayName: 'Screen List Type',
			name: 'screenListType',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of screenlist',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingScreenListConditionsConditionsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const callerIdNumber = this.getNodeParameter('callerIdNumber', _itemIndex) as string;
	const destinationNumber = this.getNodeParameter('destinationNumber', _itemIndex) as string;
	const screenListType = this.getNodeParameter('screenListType', _itemIndex) as string;

	const body: IDataObject = {
		callerIdNumber: callerIdNumber,
		destinationNumber: destinationNumber,
		screenListType: screenListType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/screenListConditions' + '/conditions', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
