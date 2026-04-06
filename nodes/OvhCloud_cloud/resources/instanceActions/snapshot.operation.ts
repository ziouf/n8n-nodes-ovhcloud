import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Snapshot Instance operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the instance to snapshot',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name for the snapshot',
			displayOptions,
		},
		{
			displayName: 'Snapshot Name',
			name: 'snapshotName',
			type: 'string',
			default: '',
			description: 'Optional snapshot name',
			displayOptions,
		},
	];
}

/**
 * Executes the Snapshot Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/snapshot
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const snapshotName = this.getNodeParameter('snapshotName', 0, '') as string;

	const body: IDataObject = { name };
	if (snapshotName) body.snapshotName = snapshotName;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/snapshot`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
