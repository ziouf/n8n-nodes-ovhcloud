import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * List VMware Cloud Director VDC computes.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute
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
 * Executes the List VMware Cloud Director Organization VDC Computes operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/organization/${organizationId}/virtualDataCenter/${virtualDataCenterId}/compute`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
