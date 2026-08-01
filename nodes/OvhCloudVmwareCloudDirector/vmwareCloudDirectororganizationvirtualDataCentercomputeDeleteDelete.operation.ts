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
			displayName: 'Compute ID',
			name: 'computeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The computeId identifier',
		},

	];
}

/**
 * Executes the Delete Delete compute resources associated with an organization\'s Virtual DataCenter operation.
 *
 * HTTP method: DELETE
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', itemIndex) as string;
	const computeId = this.getNodeParameter('computeId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vmwareCloudDirector/organization/' + organizationId + '/virtualDataCenter/' + virtualDataCenterId + '/compute/' + computeId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
