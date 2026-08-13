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
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'Filter the value of action property (=)',
			displayOptions,
		},
		{
			displayName: 'Service Type',
			name: 'serviceType',
			type: 'string',
			default: '',
			description: 'Filter the value of serviceType property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceTask List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const action = this.getNodeParameter('action', _itemIndex) as string;
	const serviceType = this.getNodeParameter('serviceType', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;

	const qs: IDataObject = {
		action: action,
		serviceType: serviceType,
		status: status,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/task', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
