/**
 * @brief Create a user for a Dedicated Ceph cluster
 *
 * Creates a new user:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/user` endpoint
 * - Body: userName (string) required
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

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
			description: 'The name of the user to create',
			displayOptions,
		},
	];
}

/**
 * Executes the Create User operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/user
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const userName = this.getNodeParameter('userName', 0) as string;

	const data = await client.httpPost(`/dedicated/ceph/${serviceName}/user`, {
		userName,
	});

	return [{ json: data as IDataObject }];
}
