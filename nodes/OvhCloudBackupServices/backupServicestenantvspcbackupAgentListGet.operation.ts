import type {

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

	];
}

/**
 * Executes the Get Lists backup agents operation.
 *
 * HTTP method: GET
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', _itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId + '/backupAgent')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
