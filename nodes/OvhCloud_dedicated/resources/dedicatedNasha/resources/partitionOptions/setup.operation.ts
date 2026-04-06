import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Setup Partition Options operation.
 *
 * Defines inputs for setting up partition options.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name, partition name, and option inputs
 */
export function descriptionDedicatedNashaPartitionOptionsSetup(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Nasha service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a Dedicated Nasha service...',
					typeOptions: {
						searchListMethod: 'getDedicatedNashaServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Partition Name',
			name: 'partitionName',
			description: 'The name of the partition',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Atime',
			name: 'atime',
			description: 'Atime option for the partition',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Record Size',
			name: 'recordsize',
			description: 'Record size option for the partition',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Sync',
			name: 'sync',
			description: 'Sync option for the partition',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Template Name',
			name: 'templateName',
			description: 'Template name option for the partition',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Setup Partition Options operation.
 *
 * Sets up partition options.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the setup result
 */
export async function executeDedicatedNashaPartitionOptionsSetup(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const atime = this.getNodeParameter('atime', 0, '') as string;
	const recordsize = this.getNodeParameter('recordsize', 0, '') as string;
	const sync = this.getNodeParameter('sync', 0, '') as string;
	const templateName = this.getNodeParameter('templateName', 0, '') as string;

	const body: IDataObject = {};
	if (atime) body.atime = atime;
	if (recordsize) body.recordsize = recordsize;
	if (sync) body.sync = sync;
	if (templateName) body.templateName = templateName;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/options`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
