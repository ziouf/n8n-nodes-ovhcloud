import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List VMware Cloud Director VDC storages.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage
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
 * Executes the List VMware Cloud Director Organization VDC Storages operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/organization/${organizationId}/virtualDataCenter/${virtualDataCenterId}/storage`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
