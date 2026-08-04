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
			displayName: 'Ape Code',
			name: 'apeCode',
			type: 'string',
			default: '',
			required: true,
			description: 'The apeCode parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceDirectoryGetDirectoryServiceCode List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const apeCode = this.getNodeParameter('apeCode', itemIndex) as string;

	const qs: IDataObject = {
		apeCode: apeCode,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/directory' + '/getDirectoryServiceCode', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
