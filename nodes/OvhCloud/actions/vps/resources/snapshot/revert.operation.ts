import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Revert Snapshot operation.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Revert Snapshot operation
 */
export function descriptionSnapshotRevert(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to revert the snapshot for. This can be set manually or selected from the list of services.',
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
 * Executes the Revert Snapshot operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results
 */
export async function executeSnapshotRevert(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPost(`/vps/${serviceName}/snapshot/revert`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
