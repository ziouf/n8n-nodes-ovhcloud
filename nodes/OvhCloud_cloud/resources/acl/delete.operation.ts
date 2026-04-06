import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Delete ACL operation.
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
			displayName: 'Rule',
			name: 'rule',
			type: 'string',
			default: '',
			required: true,
			description: 'ACL rule to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete ACL operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/acl/{rule}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const rule = this.getNodeParameter('rule', 0) as string;
	const data = (await client.httpDelete(
		`/cloud/project/${serviceName}/acl/${rule}`,
	)) as IDataObject;
	return [{ json: data }];
}
