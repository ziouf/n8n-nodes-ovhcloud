import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Instance operation.
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the instance',
			displayOptions,
		},
		{
			displayName: 'Flavor ID',
			name: 'flavorId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the flavor to use',
			displayOptions,
		},
		{
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the image to use',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region to deploy the instance in',
			displayOptions,
		},
		{
			displayName: 'Monthly Billing',
			name: 'monthlyBilling',
			type: 'boolean',
			default: false,
			description: 'Whether to enable monthly billing',
			displayOptions,
		},
		{
			displayName: 'SSH Key ID',
			name: 'sshKeyId',
			type: 'string',
			default: '',
			description: 'ID of the SSH key to use',
			displayOptions,
		},
		{
			displayName: 'User Data',
			name: 'userData',
			type: 'string',
			default: '',
			description: 'User data for cloud-init',
			displayOptions,
		},
		{
			displayName: 'Boot Type',
			name: 'bootType',
			type: 'options',
			options: [
				{ name: 'Local', value: 'local' },
				{ name: 'Rescue', value: 'rescue' },
			],
			default: 'local',
			description: 'Boot type for the instance',
			displayOptions,
		},
		{
			displayName: 'Group',
			name: 'group',
			type: 'collection',
			placeholder: 'Add Group',
			default: {},
			description: 'Instance group settings',
			displayOptions,
			options: [
				{
					displayName: 'Group ID',
					name: 'groupId',
					type: 'string',
					default: '',
					description: 'ID of the instance group',
				},
				{
					displayName: 'Group Type',
					name: 'groupType',
					type: 'string',
					default: '',
					description: 'Type of the instance group',
				},
			],
		},
	];
}

/**
 * Executes the Create Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const flavorId = this.getNodeParameter('flavorId', 0) as string;
	const imageId = this.getNodeParameter('imageId', 0) as string;
	const region = this.getNodeParameter('region', 0) as string;
	const monthlyBilling = this.getNodeParameter('monthlyBilling', 0, false) as boolean;
	const sshKeyId = this.getNodeParameter('sshKeyId', 0, '') as string;
	const userData = this.getNodeParameter('userData', 0, '') as string;
	const bootType = this.getNodeParameter('bootType', 0, 'local') as string;
	const group = this.getNodeParameter('group', 0, {}) as IDataObject;

	const body: IDataObject = { name, flavorId, imageId, region, monthlyBilling, bootType };
	if (sshKeyId) body.sshKeyId = sshKeyId;
	if (userData) body.userData = userData;
	if (group && Object.keys(group).length > 0) body.group = group;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
