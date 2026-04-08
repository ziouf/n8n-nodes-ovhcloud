import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create ACL operation.
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
			description: 'ACL rule to create',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the ACL rule',
			displayOptions,
		},
	];
}

/**
 * Executes the Create ACL operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/acl
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const rule = this.getNodeParameter('rule', 0) as string;
	const description = this.getNodeParameter('description', 0, '') as string;

	const body: IDataObject = { rule };
	if (description) body.description = description;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/acl`, body)) as IDataObject;
	return [{ json: data }];
}
