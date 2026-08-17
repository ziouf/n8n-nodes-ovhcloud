import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

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
			...SERVICE_NAME,
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
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/changeContact')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
