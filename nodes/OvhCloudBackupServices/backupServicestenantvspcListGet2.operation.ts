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
			displayName: 'backup Services Id',
			name: 'backupServicesId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupServicesId identifier',
		},
		{
			displayName: 'vspc Tenant Id',
			name: 'vspcTenantId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vspcTenantId identifier',
		},

	];
}

/**
 * Executes the Get Retrieves details of a specific VSPC tenant operation.
 *
 * HTTP method: GET
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
