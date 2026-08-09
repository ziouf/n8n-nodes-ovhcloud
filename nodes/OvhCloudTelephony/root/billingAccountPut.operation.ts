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
          displayName: 'Allowed Outplan',
          name: 'allowedOutplan',
          type: 'string',
          default: '',
          description: 'The allowedOutplan parameter',
          displayOptions,
        },
        {
          displayName: 'Billing Account',
          name: 'billingAccount',
          type: 'string',
          default: '',
          description: 'The name of your billingAccount',
          displayOptions,
        },
        {
          displayName: 'Credit Threshold',
          name: 'creditThreshold',
          type: 'string',
          default: '',
          description: 'The creditThreshold parameter',
          displayOptions,
        },
        {
          displayName: 'Current Outplan',
          name: 'currentOutplan',
          type: 'string',
          default: '',
          description: 'The currentOutplan parameter',
          displayOptions,
        },
        {
          displayName: 'Description',
          name: 'description',
          type: 'string',
          default: '',
          description: 'The description parameter',
          displayOptions,
        },
        {
          displayName: 'Has Special Numbers',
          name: 'hasSpecialNumbers',
          type: 'string',
          default: '',
          description: 'The hasSpecialNumbers parameter',
          displayOptions,
        },
        {
          displayName: 'Hidden External Number',
          name: 'hiddenExternalNumber',
          type: 'string',
          default: '',
          description: 'The hiddenExternalNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Override Displayed Number',
          name: 'overrideDisplayedNumber',
          type: 'string',
          default: '',
          description: 'The overrideDisplayedNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Security Deposit',
          name: 'securityDeposit',
          type: 'string',
          default: '',
          description: 'The securityDeposit parameter',
          displayOptions,
        },
        {
          displayName: 'Status',
          name: 'status',
          type: 'string',
          default: '',
          description: 'The status parameter',
          displayOptions,
        },
        {
          displayName: 'Trusted',
          name: 'trusted',
          type: 'string',
          default: '',
          description: 'The trusted parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Update Billing Account operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const allowedOutplan = this.getNodeParameter('allowedOutplan', _itemIndex) as string;
	const billingAccount1 = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const creditThreshold = this.getNodeParameter('creditThreshold', _itemIndex) as string;
	const currentOutplan = this.getNodeParameter('currentOutplan', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const hasSpecialNumbers = this.getNodeParameter('hasSpecialNumbers', _itemIndex) as string;
	const hiddenExternalNumber = this.getNodeParameter('hiddenExternalNumber', _itemIndex) as string;
	const overrideDisplayedNumber = this.getNodeParameter('overrideDisplayedNumber', _itemIndex) as string;
	const securityDeposit = this.getNodeParameter('securityDeposit', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;
	const trusted = this.getNodeParameter('trusted', _itemIndex) as string;

	const body: IDataObject = {
    allowedOutplan: allowedOutplan,
    billingAccount: billingAccount1,
    creditThreshold: creditThreshold,
    currentOutplan: currentOutplan,
    description: description,
    hasSpecialNumbers: hasSpecialNumbers,
    hiddenExternalNumber: hiddenExternalNumber,
    overrideDisplayedNumber: overrideDisplayedNumber,
    securityDeposit: securityDeposit,
    status: status,
    trusted: trusted
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
