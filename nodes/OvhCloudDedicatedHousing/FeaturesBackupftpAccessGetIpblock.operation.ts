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
			displayName: 'Ipblock',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP Block specific to this ACL',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your Housing bay',
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const ipBlock = this.getNodeParameter('ipBlock', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/housing/' + encodeURIComponent(serviceName) + '/features/backupFTP/access/' + encodeURIComponent(ipBlock))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
