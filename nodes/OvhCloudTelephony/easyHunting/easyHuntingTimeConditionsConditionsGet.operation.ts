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
	];
}

/**
 * Executes the EasyHuntingTimeConditionsConditionsGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const conditionId = this.getNodeParameter('conditionId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/timeConditions' + '/conditions' + '/' + encodeURIComponent(conditionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
