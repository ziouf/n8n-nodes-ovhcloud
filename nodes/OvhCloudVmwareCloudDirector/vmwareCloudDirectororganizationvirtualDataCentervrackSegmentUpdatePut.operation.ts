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
			displayName: 'organization Id',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The organizationId identifier',
		},
		{
			displayName: 'virtual Data Center Id',
			name: 'virtualDataCenterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtualDataCenterId identifier',
		},
		{
			displayName: 'id',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The id identifier',
		},

	];
}

/**
 * Executes the Put Update VMware Cloud Director vrack segment resources operation.
 *
 * HTTP method: PUT
 * Endpoint: /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', itemIndex) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/vmwareCloudDirector/organization/' + organizationId + '/virtualDataCenter/' + virtualDataCenterId + '/vrackSegment/' + id, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
