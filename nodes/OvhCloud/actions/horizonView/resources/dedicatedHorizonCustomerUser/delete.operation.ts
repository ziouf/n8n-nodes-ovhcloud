import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a customer user.
 *
 * HTTP method: DELETE
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
			description: 'The username of the customer user to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Dedicated Horizon Customer User operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const username = this.getNodeParameter('username', 0) as string;
	const data = (await client.httpDelete(
		`/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
