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
			displayName: 'Dialplan ID',
			name: 'dialplanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The dialplanId parameter',
			displayOptions,
		},
		{
			displayName: 'Extension ID',
			name: 'extensionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The extensionId parameter',
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
			description: 'Type of screenlist',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanExtensionConditionScreenListPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', itemIndex) as string;
	const extensionId = this.getNodeParameter('extensionId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const callerIdNumber = this.getNodeParameter('callerIdNumber', itemIndex) as string;
	const destinationNumber = this.getNodeParameter('destinationNumber', itemIndex) as string;
	const screenListType = this.getNodeParameter('screenListType', itemIndex) as string;

	const body: IDataObject = {
		callerIdNumber: callerIdNumber,
		destinationNumber: destinationNumber,
		screenListType: screenListType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId) + '/extension' + '/' + encodeURIComponent(extensionId) + '/conditionScreenList', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
