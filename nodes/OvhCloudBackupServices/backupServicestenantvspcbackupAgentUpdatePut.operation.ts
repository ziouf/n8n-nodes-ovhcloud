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
			displayOptions,
		},
		{
			displayName: 'Vspc Tenant ID',
			name: 'vspcTenantId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vspcTenantId identifier',
			displayOptions,
		},
		{
			displayName: 'Backup Agent ID',
			name: 'backupAgentId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupAgentId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Put Updates backup agent operation.
 *
 * HTTP method: PUT
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', _itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', _itemIndex) as string;
	const backupAgentId = this.getNodeParameter('backupAgentId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId + '/backupAgent/' + backupAgentId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
