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
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId parameter',
			displayOptions,
		},
		{
			displayName: 'Execution Date',
			name: 'executionDate',
			type: 'string',
			default: '',
			description: 'Planned execution date',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceOfferTaskPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;
	const executionDate = this.getNodeParameter('executionDate', itemIndex) as string;

	const body: IDataObject = {
		executionDate: executionDate,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/offerTask' + '/' + encodeURIComponent(taskId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
