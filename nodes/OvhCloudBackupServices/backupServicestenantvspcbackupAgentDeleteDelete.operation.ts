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
			displayName: 'Vspc Tenant ID',
			name: 'vspcTenantId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Backup Agent ID',
			name: 'backupAgentId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Delete Deletes backup agent operation.
 *
 * HTTP method: DELETE
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', _itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', _itemIndex) as string;
	const backupAgentId = this.getNodeParameter('backupAgentId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId + '/backupAgent/' + backupAgentId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
