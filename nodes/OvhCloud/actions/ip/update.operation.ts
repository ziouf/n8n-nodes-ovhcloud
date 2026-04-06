import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Update IP Block properties.
 *
 * Alters the properties of a specific IP block.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update IP Block operation
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
					description: 'New description for the IP block',
				},
				{
					displayName: 'Tags',
					name: 'tags',
					type: 'string',
					default: '',
					description: 'Comma-separated list of IAM tags',
				},
			],
		},
	];
}

/**
 * Executes the Update IP Block operation.
 *
 * Alters the properties of a specific IP block.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;

	await client.httpPut(`/ip/${ipBlock}`, { body: updateFields });

	return [{ json: { success: true, ipBlock } }];
}
