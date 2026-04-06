import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update an API credential.
 *
 * HTTP method: PUT
 * Endpoint: /me/api/credential/{credentialId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the API credential to update',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
				{
					displayName: 'Application ID',
					name: 'applicationId',
					type: 'string',
					default: '',
					description: 'Application ID to associate',
				},
				{
					displayName: 'Status',
					name: 'status',
					type: 'options',
					options: [
						{ name: 'Expired', value: 'expired' },
						{ name: 'Key', value: 'key' },
						{ name: 'Revoked', value: 'revoked' },
					],
					default: 'key',
					description: 'Credential status',
				},
			],
		},
	];
}

/**
 * Executes the Update API Credential operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const credentialId = this.getNodeParameter('credentialId', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut(`/me/api/credential/${credentialId}`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}
