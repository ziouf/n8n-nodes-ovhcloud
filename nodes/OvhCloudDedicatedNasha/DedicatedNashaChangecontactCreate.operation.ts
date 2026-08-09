import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Contactadmin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contact to set as admin contact',
		},
		{
			displayName: 'Contactbilling',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contact to set as billing contact',
		},
		{
			displayName: 'Contacttech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contact to set as tech contact',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your storage',
		},
	];
}

/**
 * Launch a contact change procedure
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/changeContact')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
