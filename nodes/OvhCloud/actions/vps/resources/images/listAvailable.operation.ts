import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the List Available Images operation.
 *
 * Defines inputs for retrieving available images for a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name input
 */
export function descriptionImagesListAvailable(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to list available images for. This can be set manually or selected from the list of services.',
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
 * Executes the List Available Images operation.
 *
 * Retrieves available images for a specific VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the list of available images
 */
export async function executeImagesListAvailable(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;

	const images = (await client.httpGet(`/vps/${serviceName}/images/available`)) as IDataObject[];

	return this.helpers.returnJsonArray(images);
}
