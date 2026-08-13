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
          displayName: 'Contact Admin',
          name: 'contactAdmin',
          type: 'string',
          default: '',
          description: 'The contactAdmin parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Billing',
          name: 'contactBilling',
          type: 'string',
          default: '',
          description: 'The contactBilling parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Tech',
          name: 'contactTech',
          type: 'string',
          default: '',
          description: 'The contactTech parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Change Contact operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex) as string;

	const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
