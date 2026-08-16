import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Key Name',
			name: 'keyName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SSH key',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The SSH public key content',
			placeholder: 'ssh-rsa AAAA...',
			displayOptions,
		},
		{
			displayName: 'Comment',
			name: 'comment',
			type: 'string',
			default: '',
			description: 'An optional comment for the SSH key',
			displayOptions,
		},
	];
}

/**
 * Create an SSH key on the hosting
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/key/ssh
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const keyName = this.getNodeParameter('keyName', _itemIndex ?? 0) as string;
	const key = this.getNodeParameter('key', _itemIndex ?? 0) as string;
	const comment = this.getNodeParameter('comment', _itemIndex ?? 0, '') as string;

	const body: IDataObject = { key, keyName };
	if (comment) {
		body.comment = comment;
	}

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/key/ssh`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
