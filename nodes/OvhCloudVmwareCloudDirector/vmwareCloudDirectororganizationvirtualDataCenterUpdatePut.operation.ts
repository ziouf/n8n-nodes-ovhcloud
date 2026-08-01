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

	];
}

/**
 * Executes the Put Update organization Virtual DataCenter details operation.
 *
 * HTTP method: PUT
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/vmwareCloudDirector/organization/' + organizationId + '/virtualDataCenter/' + virtualDataCenterId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
