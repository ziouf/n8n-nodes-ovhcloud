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
        {
          displayName: 'Country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
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
          displayName: 'Fax',
          name: 'fax',
          type: 'string',
          default: '',
          description: 'The fax parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put UpdateAliasServiceInfo operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/aliases/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;


	const contactAdmin = this.getNodeParameter('contactAdmin', itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', itemIndex) as string;
	const country = this.getNodeParameter('country', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const fax = this.getNodeParameter('fax', itemIndex) as string;

	const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech,
    country: country,
    description: description,
    fax: fax
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/aliases/' + serviceName + '/serviceInfos', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
