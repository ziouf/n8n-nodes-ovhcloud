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
          displayName: 'Details',
          name: 'details',
          type: 'string',
          default: '',
          description: 'The details parameter',
          displayOptions,
        },
        {
          displayName: 'Reason',
          name: 'reason',
          type: 'string',
          default: '',
          required: true,
          description: 'The reason parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete Terminate Billing Account operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const details = this.getNodeParameter('details', itemIndex) as string;
	const reason = this.getNodeParameter('reason', itemIndex) as string;

	const qs: IDataObject = {
    details: details,
    reason: reason
  };

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/' + billingAccount, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
