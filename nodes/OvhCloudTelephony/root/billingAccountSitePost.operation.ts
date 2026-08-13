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
          displayName: 'Billing Account Site',
          name: 'billingAccountSite',
          type: 'string',
          default: '',
          required: true,
          description: 'The billingAccountSite parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Billing Account Site operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/billingAccountSite
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const billingAccountSite = this.getNodeParameter('billingAccountSite', _itemIndex) as string;

	const body: IDataObject = {
    billingAccountSite: billingAccountSite
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/billingAccountSite', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
