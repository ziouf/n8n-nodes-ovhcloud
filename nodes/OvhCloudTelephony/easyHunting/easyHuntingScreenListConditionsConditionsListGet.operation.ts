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
			displayName: 'Screen List Type',
			name: 'screenListType',
			type: 'string',
			default: '',
			description: 'Filter the value of screenListType property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingScreenListConditionsConditions List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const screenListType = this.getNodeParameter('screenListType', _itemIndex) as string;

	const qs: IDataObject = {
		screenListType: screenListType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/screenListConditions' + '/conditions', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
