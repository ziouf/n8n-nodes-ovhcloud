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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Day',
			name: 'day',
			type: 'string',
			default: '',
			description: 'The day parameter',
			displayOptions,
		},
		{
			displayName: 'Hour Begin',
			name: 'hourBegin',
			type: 'string',
			default: '',
			description: 'The hourBegin parameter',
			displayOptions,
		},
		{
			displayName: 'Hour End',
			name: 'hourEnd',
			type: 'string',
			default: '',
			description: 'The hourEnd parameter',
			displayOptions,
		},
		{
			displayName: 'Policy',
			name: 'policy',
			type: 'string',
			default: '',
			description: 'The policy parameter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the TimeConditionConditionPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const day = this.getNodeParameter('day', itemIndex) as string;
	const hourBegin = this.getNodeParameter('hourBegin', itemIndex) as string;
	const hourEnd = this.getNodeParameter('hourEnd', itemIndex) as string;
	const policy = this.getNodeParameter('policy', itemIndex) as string;
	const status = this.getNodeParameter('status', itemIndex) as string;

	const body: IDataObject = {
		day: day,
		hourBegin: hourBegin,
		hourEnd: hourEnd,
		policy: policy,
		status: status,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/timeCondition' + '/' + encodeURIComponent(serviceName) + '/condition' + '/' + encodeURIComponent(id), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
