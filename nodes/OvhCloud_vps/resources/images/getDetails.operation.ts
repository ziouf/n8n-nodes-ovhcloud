import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Image Details operation.
 *
 * Defines inputs for retrieving details of a specific available image.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name and image ID inputs
 */
export function descriptionImagesGetDetails(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service that contains the image. This can be set manually or selected from the list of services.',
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
			displayName: 'Image ID',
			name: 'images.imageId',
			type: 'string',
			required: true,
			default: '',
			description: 'The unique identifier of the image to retrieve details for',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Image Details operation.
 *
 * Retrieves details of a specific available image for a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the image details
 */
export async function executeImagesGetDetails(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const imageId = this.getNodeParameter('images.imageId', 0) as string;

	const image = (await client.httpGet(
		`/vps/${serviceName}/images/available/${imageId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(image);
}
