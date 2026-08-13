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
	];
}

/**
 * Executes the Post Cancel Termination operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/cancelTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/cancelTermination')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
