import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a new SSH key.
 *
 * HTTP method: POST
 * Endpoint: /me/sshKey
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Key Name',
			name: 'keyName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name for the SSH key',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The SSH public key content',
			typeOptions: {
				rows: 4,
			},
			displayOptions,
		},
		{
			displayName: 'Default',
			name: 'default',
			type: 'boolean',
			default: false,
			description: 'Whether to set as default SSH key',
			displayOptions,
		},
	];
}

/**
 * Executes the Create SSH Key operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		keyName: this.getNodeParameter('keyName', 0) as string,
		key: this.getNodeParameter('key', 0) as string,
		default: this.getNodeParameter('default', 0, false) as boolean,
	};
	const data = (await client.httpPost('/me/sshKey', { body })) as IDataObject;
	return [{ json: data }];
}
