import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Backup Services ID',
			name: 'backupServicesId',
			type: 'string',
			default: '',
			required: true,
			description: 'Backup service ID',
			displayOptions,
		},
		{
			displayName: 'Vault ID',
			name: 'vaultId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Put Updates vault display name and cloud repository operation.
 *
 * HTTP method: PUT
 * Endpoint: /backupServices/tenant/{backupServicesId}/vault/{vaultId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', _itemIndex) as string;
	const vaultId = this.getNodeParameter('vaultId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPut('/backupServices/tenant/' + backupServicesId + '/vault/' + vaultId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
