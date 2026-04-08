import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Cancel Migration 2020 operation.
 *
 * Defines inputs for cancelling a pending VPS migration.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name input
 */
export function descriptionMigration2020Cancel(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to cancel migration for. This can be set manually or selected from the list of services.',
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
	];
}

/**
 * Executes the Cancel Migration 2020 operation.
 *
 * Cancels a pending migration for a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the cancellation result
 */
export async function executeMigration2020Cancel(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;

	const response = (await client.httpDelete(`/vps/${serviceName}/migration2020`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
