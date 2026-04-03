import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Distribution Software operation.
 *
 * Defines inputs for retrieving details of a specific software distribution.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name and software ID inputs
 */
export function descriptionDistributionGetSoftware(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service that contains the software distribution. This can be set manually or selected from the list of services.',
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
			displayName: 'Software ID',
			name: 'distribution.softwareId',
			type: 'string',
			required: true,
			default: '',
			description: 'The unique identifier of the software distribution to retrieve',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Distribution Software operation.
 *
 * Retrieves details of a specific software distribution for a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the software distribution information
 */
export async function executeDistributionGetSoftware(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const softwareId = this.getNodeParameter('distribution.softwareId', 0) as string;

	const software = (await client.httpGet(
		`/vps/${serviceName}/distribution/software/${softwareId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(software);
}
