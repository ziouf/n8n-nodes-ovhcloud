import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Backup Services ID',
			name: 'backupServicesId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupServicesId identifier',
		},
		{
			displayName: 'Vault ID',
			name: 'vaultId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vaultId identifier',
		},

	];
}

/**
 * Executes the Get Retrieves specific vault details operation.
 *
 * HTTP method: GET
 * Endpoint: /backupServices/tenant/{backupServicesId}/vault/{vaultId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', itemIndex) as string;
	const vaultId = this.getNodeParameter('vaultId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/backupServices/tenant/' + backupServicesId + '/vault/' + vaultId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
