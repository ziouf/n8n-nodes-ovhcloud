import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific vRack Services resource.
 *
 * HTTP method: GET
 * Endpoint: /v2/vrackServices/resource/{resourceId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Resource ID',
			name: 'resourceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the resource',
			displayOptions,
		},
	];
}

/**
 * Executes the Get vRack Services Resource operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const resourceId = this.getNodeParameter('resourceId', 0) as string;
	const data = (await client.httpGet(`/v2/vrackServices/resource/${resourceId}`)) as IDataObject;
	return [{ json: data }];
}
