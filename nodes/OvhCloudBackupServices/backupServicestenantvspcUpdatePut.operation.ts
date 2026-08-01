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

	];
}

/**
 * Executes the Put Updates the display name of a VSPC tenant operation.
 *
 * HTTP method: PUT
 * Endpoint: /backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const backupServicesId = this.getNodeParameter('backupServicesId', itemIndex) as string;
	const vspcTenantId = this.getNodeParameter('vspcTenantId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/backupServices/tenant/' + backupServicesId + '/vspc/' + vspcTenantId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
