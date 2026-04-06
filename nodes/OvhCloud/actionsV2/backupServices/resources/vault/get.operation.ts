import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific backup service vault.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices/vault/{vaultId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vault ID',
			name: 'vaultId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the vault',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Backup Service Vault operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const vaultId = this.getNodeParameter('vaultId', 0) as string;
	const data = (await client.httpGet(`/v2/backupServices/vault/${vaultId}`)) as IDataObject;
	return [{ json: data }];
}
