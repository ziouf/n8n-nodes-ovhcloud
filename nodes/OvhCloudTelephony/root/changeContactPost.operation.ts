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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', itemIndex) as string;

	const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
