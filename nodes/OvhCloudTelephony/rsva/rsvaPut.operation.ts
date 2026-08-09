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
			displayName: 'Typology',
			name: 'typology',
			type: 'string',
			default: '',
			description: 'The typology parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the RsvaPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/rsva/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const typology = this.getNodeParameter('typology', _itemIndex) as string;

	const body: IDataObject = {
		typology: typology,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/rsva' + '/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
