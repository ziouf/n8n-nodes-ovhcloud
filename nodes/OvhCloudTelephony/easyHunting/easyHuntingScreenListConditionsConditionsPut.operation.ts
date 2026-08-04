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
			displayName: 'Condition ID',
			name: 'conditionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The conditionId parameter',
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
			description: 'Screenlist based on the presented caller number',
			displayOptions,
		},
		{
			displayName: 'Destination Number',
			name: 'destinationNumber',
			type: 'string',
			default: '',
			description: 'Screenlist based on the destination number',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingScreenListConditionsConditionsPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const conditionId = this.getNodeParameter('conditionId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const callerIdNumber = this.getNodeParameter('callerIdNumber', itemIndex) as string;
	const destinationNumber = this.getNodeParameter('destinationNumber', itemIndex) as string;

	const body: IDataObject = {
		callerIdNumber: callerIdNumber,
		destinationNumber: destinationNumber,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/screenListConditions' + '/conditions' + '/' + encodeURIComponent(conditionId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
