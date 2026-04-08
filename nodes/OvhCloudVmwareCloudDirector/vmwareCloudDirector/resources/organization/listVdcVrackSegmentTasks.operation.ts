import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * List VMware Cloud Director VDC vRack segment tasks.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task
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
		{
			displayName: 'vRack Segment ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the vRack segment',
			displayOptions,
		},
	];
}

/**
 * Executes the List VMware Cloud Director Organization VDC vRack Segment Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/organization/${organizationId}/virtualDataCenter/${virtualDataCenterId}/vrackSegment/${id}/task`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
