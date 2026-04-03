import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Update IP operation.
 *
 * Defines inputs for updating properties of an IP address assigned to a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name, IP address, and properties inputs
 */
export function descriptionIpsUpdate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service that contains the IP address. This can be set manually or selected from the list of services.',
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
			description: 'The IP address to update',
			displayOptions,
		},
		{
			displayName: 'Properties',
			name: 'ips.properties',
			description: 'IP properties to update (JSON object)',
			type: 'json',
			default: '{}',
			displayOptions,
		},
	];
}

/**
 * Executes the Update IP operation.
 *
 * Updates properties of an IP address assigned to a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the updated IP information
 */
export async function executeIpsUpdate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ips.ipAddress', 0) as string;
	const propertiesStr = this.getNodeParameter('ips.properties', 0, '{}') as string;

	let body: IDataObject = {};
	try {
		body = JSON.parse(propertiesStr) as IDataObject;
	} catch {
		// Use empty body if JSON is invalid
	}

	await client.httpPut(`/vps/${serviceName}/ips/${ipAddress}`, { body });

	const ip = (await client.httpGet(`/vps/${serviceName}/ips/${ipAddress}`)) as IDataObject;

	return this.helpers.returnJsonArray(ip);
}
