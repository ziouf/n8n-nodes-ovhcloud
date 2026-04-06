/**
 * @brief Get user details for a Dedicated Ceph cluster
 *
 * Retrieves details for a specific user:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/user/{userName}` endpoint
 * - Returns user details
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCephServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get User operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing user details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const userName = this.getNodeParameter('userName', 0) as string;

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/user/${userName}`,
	)) as IDataObject;

	return [{ json: data }];
}
