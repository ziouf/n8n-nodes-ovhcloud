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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the portability',
			displayOptions,
		},
		{
			displayName: 'Parameters',
			name: 'parameters',
			type: 'string',
			default: '',
			required: true,
			description: 'List of parameters to use to fix error',
			displayOptions,
		},
	];
}

/**
 * Executes the PortabilityRelaunchPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/portability/{id}/relaunch
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const parameters = this.getNodeParameter('parameters', _itemIndex) as string;

	const body: IDataObject = {
		parameters: parameters,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/portability' + '/' + encodeURIComponent(id) + '/relaunch', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
