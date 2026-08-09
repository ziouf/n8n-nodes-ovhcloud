import type {

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

	];
}

/**
 * Executes the Get Retrieves the list of backup policies available in your VSPC operation.
 *
 * HTTP method: GET
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupPolicies
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', _itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', _itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId + '/backupPolicies')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
