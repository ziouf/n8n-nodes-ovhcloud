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
			displayName: 'Storage ID',
			name: 'storageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The storageId identifier',
		},

	];
}

/**
 * Executes the Get Get organization Virtual DataCenter associated storage resources operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', itemIndex) as string;
	const storageId = this.getNodeParameter('storageId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/organization/' + organizationId + '/virtualDataCenter/' + virtualDataCenterId + '/storage/' + storageId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
