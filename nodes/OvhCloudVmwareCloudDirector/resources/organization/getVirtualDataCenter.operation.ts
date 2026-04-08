import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific VMware Cloud Director organization virtual data center.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the organization',
			displayOptions,
		},
		{
			displayName: 'Virtual Data Center ID',
			name: 'virtualDataCenterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the virtual data center',
			displayOptions,
		},
	];
}

/**
 * Executes the Get VMware Cloud Director Organization Virtual Data Center operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/organization/${organizationId}/virtualDataCenter/${virtualDataCenterId}`)) as IDataObject;
	return [{ json: data }];
}
