import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update a firewall IP configuration.
 *
 * Alters the properties of a firewall IP.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update Firewall operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'IP On Firewall',
			name: 'ipOnFirewall',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address on the firewall',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
				{
					displayName: 'State',
					name: 'state',
					type: 'options',
					options: [
						{ name: 'Ok', value: 'ok' },
						{ name: 'Off', value: 'off' },
					],
					default: 'ok',
					description: 'Firewall state',
				},
			],
		},
	];
}

/**
 * Executes the Update Firewall operation.
 *
 * Alters the properties of a firewall IP.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;

	await client.httpPut(`/ip/${ipBlock}/firewall/${ipOnFirewall}`, { body: updateFields });

	return [{ json: { success: true, ipBlock, ipOnFirewall } }];
}
