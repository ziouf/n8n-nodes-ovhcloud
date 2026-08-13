import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The account to delegate rights to',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'READ', value: 'READ' },
				{ name: 'WRITE', value: 'WRITE' },
				{ name: 'ADMIN', value: 'ADMIN' },
			],
			default: 'READ',
			required: true,
			description: 'ACL type',
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const accountId = this.getNodeParameter('accountId', _itemIndex ?? 0) as string;
	const type = this.getNodeParameter('type', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		accountId,
		type,
	};

	const data = (await client.httpPost(`/cloud/project/${serviceName}/acl`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
