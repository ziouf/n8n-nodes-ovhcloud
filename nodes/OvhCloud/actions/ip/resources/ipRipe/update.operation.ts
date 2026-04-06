import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update RIPE information for an IP block.
 *
 * Alters the RIPE registration information for a specific IP block.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/ripe
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update RIPE operation
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
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
				{
					displayName: 'Description',
					name: 'description',
					type: 'string',
					default: '',
					description: 'RIPE description',
				},
			],
		},
	];
}

/**
 * Executes the Update RIPE operation.
 *
 * Alters the RIPE registration information for a specific IP block.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/ripe
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;

	await client.httpPut(`/ip/${ipBlock}/ripe`, { body: updateFields });

	return [{ json: { success: true, ipBlock } }];
}
