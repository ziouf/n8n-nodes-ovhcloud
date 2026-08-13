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
			description: 'Name of the service',
			displayOptions,
		},
		{
			displayName: 'Auto Validation',
			name: 'autoValidation',
			type: 'string',
			default: '',
			description: 'Whether External displayed number auto-validation. Only available for partner. Must be owner of the number.',
			displayOptions,
		},
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'External displayed number to create, in international format',
			displayOptions,
		},
	];
}

/**
 * Executes the TrunkExternalDisplayedNumberPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const autoValidation = this.getNodeParameter('autoValidation', _itemIndex) as string;
	const number = this.getNodeParameter('number', _itemIndex) as string;

	const body: IDataObject = {
		autoValidation: autoValidation,
		number: number,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/trunk' + '/' + encodeURIComponent(serviceName) + '/externalDisplayedNumber', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
