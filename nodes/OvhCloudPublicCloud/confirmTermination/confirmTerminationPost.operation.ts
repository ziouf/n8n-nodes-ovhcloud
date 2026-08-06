import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination confirmation token',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{ name: 'Budget', value: 'BUDGET' },
				{ name: 'Security', value: 'SECURITY' },
				{ name: 'Technical', value: 'TECHNICAL' },
				{ name: 'Other', value: 'OTHER' },
			],
			default: 'BUDGET',
			description: 'The reason for termination',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Additional commentary for the termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const reason = this.getNodeParameter('reason', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0) as string;

	const body: IDataObject = {
		token,
	};
	if (reason) body.reason = reason;
	if (commentary) body.commentary = commentary;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/confirmTermination`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
