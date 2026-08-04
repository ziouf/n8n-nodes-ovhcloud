import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Snapshot policy description',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Snapshot policy name',
			displayOptions,
		},
		{
			displayName: 'Is Default',
			name: 'isDefault',
			type: 'boolean',
			default: false,
			description: 'Whether is this the default snapshot policy?',
			displayOptions,
		},
		{
			displayName: 'Rules',
			name: 'rules',
			type: 'string',
			default: '',
			required: true,
			description: 'Snapshot policy rules',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a snapshot policy operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/snapshotPolicy
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const name = this.getNodeParameter('name', itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	const isDefault = this.getNodeParameter('isDefault', itemIndex) as boolean;
	if (isDefault) { body.isDefault = isDefault; }
	body.rules = this.getNodeParameter('rules', itemIndex) as string;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
