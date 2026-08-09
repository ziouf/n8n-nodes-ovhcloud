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
          displayName: 'Billing Account Destination',
          name: 'billingAccountDestination',
          type: 'string',
          default: '',
          required: true,
          description: 'The billingAccountDestination parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Can Transfer Security Deposit operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/canTransferSecurityDeposit
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const billingAccountDestination = this.getNodeParameter('billingAccountDestination', _itemIndex) as string;

	const body: IDataObject = {
    billingAccountDestination: billingAccountDestination
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/canTransferSecurityDeposit', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
