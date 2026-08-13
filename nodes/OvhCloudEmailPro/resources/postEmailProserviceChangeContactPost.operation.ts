import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
		{
			displayName: 'ContactAdmin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contactadmin value',
		},
		{
			displayName: 'ContactBilling',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contactbilling value',
		},
		{
			displayName: 'ContactTech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contacttech value',
		},
	];
}

/**
 * Launch a contact change procedure
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;



	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex ?? 0) as string;
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex ?? 0) as string;
	const contactTech = this.getNodeParameter('contactTech', _itemIndex ?? 0) as string;


const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech
    };

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

