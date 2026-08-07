import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'ContactAdmin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contactadmin value',
			displayOptions,
		},
		{
			displayName: 'ContactBilling',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contactbilling value',
			displayOptions,
		},
		{
			displayName: 'ContactTech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contacttech value',
			displayOptions,
		},
	];
}

/**
 * Launch a contact change procedure
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const contactAdmin = this.getNodeParameter('contactAdmin', itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', itemIndex) as string;


const body: IDataObject = {
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'changeContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

