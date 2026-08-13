import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Anonymous Permission',
			name: 'anonymousPermission',
			type: 'string',
			default: '',
			description: 'Access right for the guest users',
		},
		{
			displayName: 'Default Permission',
			name: 'defaultPermission',
			type: 'string',
			default: '',
			description: 'Default access right',
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'Path for public folder',
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'string',
			default: '',
			required: true,
			description: 'Quota for public folder in MB',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type for public folder',
		},
	];
}

/**
 * Create organization public folder
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const anonymousPermission = this.getNodeParameter('anonymousPermission', _itemIndex ?? 0) as string;
	const defaultPermission = this.getNodeParameter('defaultPermission', _itemIndex ?? 0) as string;
	const path = this.getNodeParameter('path', _itemIndex ?? 0) as string;
	const quota = this.getNodeParameter('quota', _itemIndex ?? 0) as string;
	const type = this.getNodeParameter('type', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    anonymousPermission: anonymousPermission,
    defaultPermission: defaultPermission,
    path: path,
    quota: quota,
    type: type
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/publicFolder", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
