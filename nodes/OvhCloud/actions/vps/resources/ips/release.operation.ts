import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Release IP operation.
 *
 * Defines inputs for releasing an IP address from a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name and IP address inputs
 */
export function descriptionIpsRelease(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to release the IP address from. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'IP Address',
			name: 'ips.ipAddress',
			type: 'string',
			required: true,
			default: '',
			description: 'The IP address to release',
			displayOptions,
		},
	];
}

/**
 * Executes the Release IP operation.
 *
 * Releases an IP address from a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the release result
 */
export async function executeIpsRelease(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ips.ipAddress', 0) as string;

	const response = (await client.httpDelete(`/vps/${serviceName}/ips/${ipAddress}`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
