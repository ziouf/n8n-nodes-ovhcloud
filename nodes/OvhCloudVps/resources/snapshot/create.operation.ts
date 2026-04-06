import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Create VPS Snapshot operation.
 *
 * Defines the VPS service selector and supports manual or dynamic input.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Snapshot operation
 */
export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to create a snapshot for. This can be set manually or selected from the list of services.',
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
			displayName: 'Description',
			name: 'description',
			description: 'Optional description for the snapshot',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create VPS Snapshot operation.
 *
 * Creates a new snapshot of the specified VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the snapshot details
 * @throws NodeApiError if the VPS is not found or snapshot creation fails
 *
 * @example
 * ```typescript
 * // Input: serviceName = "vps1234567"
 * // Output: Snapshot details with ID, description, status, etc.
 * ```
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const description = this.getNodeParameter('description', 0, '') as string;

	const body: IDataObject = {};
	if (description) {
		body.description = description;
	}

	const data = (await client.httpPost(`/vps/${serviceName}/createSnapshot`, {
		body,
	})) as IDataObject;

	return this.helpers.returnJsonArray(data);
}
