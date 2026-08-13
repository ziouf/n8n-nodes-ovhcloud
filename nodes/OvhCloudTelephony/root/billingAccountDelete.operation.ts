import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This action is destructive and cannot be undone.', displayOptions),
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const details = this.getNodeParameter('details', _itemIndex) as string;
	const reason = this.getNodeParameter('reason', _itemIndex) as string;

	const qs: IDataObject = {
    details: details,
    reason: reason
  };

	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/' + billingAccount, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
