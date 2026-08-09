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
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The telephony service name (line number)',
          displayOptions,
        },
        {
          displayName: 'Contact Admin',
          name: 'contactAdmin',
          type: 'string',
          default: '',
          required: true,
          description: 'The contactAdmin parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Billing',
          name: 'contactBilling',
          type: 'string',
          default: '',
          required: true,
          description: 'The contactBilling parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Tech',
          name: 'contactTech',
          type: 'string',
          default: '',
          required: true,
          description: 'The contactTech parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post ChangeContact operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/trunks/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;


	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex) as string;

	const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/trunks/' + serviceName + '/changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
