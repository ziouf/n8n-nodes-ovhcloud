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
			displayName: 'Vspc Tenant ID',
			name: 'vspcTenantId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vspcTenantId identifier',
		},
		{
			displayName: 'Backup Agent ID',
			name: 'backupAgentId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupAgentId identifier',
		},

	];
}

/**
 * Executes the Get Gets specific backup agent details operation.
 *
 * HTTP method: GET
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', itemIndex) as string;
	const backupAgentId = this.getNodeParameter('backupAgentId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId + '/backupAgent/' + backupAgentId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
