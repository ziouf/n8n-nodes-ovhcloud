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
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The organizationId identifier',
		},
		{
			displayName: 'Virtual Data Center ID',
			name: 'virtualDataCenterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtualDataCenterId identifier',
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
		},

	];
}

/**
 * Executes the Get List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/organization/' + organizationId + '/virtualDataCenter/' + virtualDataCenterId + '/vrackSegment/' + id + '/task')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
