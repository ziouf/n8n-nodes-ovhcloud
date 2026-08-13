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
 * Get all IP blocks that can be used in the ACL
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/housing/' + encodeURIComponent(serviceName) + '/features/backupFTP/authorizableBlocks')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
