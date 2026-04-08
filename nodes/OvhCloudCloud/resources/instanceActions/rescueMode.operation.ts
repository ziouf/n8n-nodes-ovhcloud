import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Rescue Mode Instance operation.
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
			description: 'ID of the instance to put in rescue mode',
			displayOptions,
		},
		{
			displayName: 'Rescue Image',
			name: 'rescueImage',
			type: 'string',
			default: '',
			description: 'Rescue image to use',
			displayOptions,
		},
	];
}

/**
 * Executes the Rescue Mode Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const rescueImage = this.getNodeParameter('rescueImage', 0, '') as string;

	const body: IDataObject = {};
	if (rescueImage) body.rescueImage = rescueImage;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/rescueMode`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
