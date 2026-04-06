import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Delete Storage Container operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Storage ID',
			name: 'storageId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the storage',
			displayOptions,
		},
		{
			displayName: 'Container ID',
			name: 'containerId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the container to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Storage Container operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/storage/{storageId}/container/{containerId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const storageId = this.getNodeParameter('storageId', 0) as string;
	const containerId = this.getNodeParameter('containerId', 0) as string;
	const data = (await client.httpDelete(
		`/cloud/project/${serviceName}/storage/${storageId}/container/${containerId}`,
	)) as IDataObject;
	return [{ json: data }];
}
