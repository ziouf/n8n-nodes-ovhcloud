import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get details of a specific customer user.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/customerUser/{username}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username of the customer user',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Dedicated Horizon Customer User operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const username = this.getNodeParameter('username', 0) as string;
	const data = (await client.httpGet(
		`/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`,
	)) as IDataObject;
	return [{ json: data }];
}
