import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getNetAppServices',
				displayName: 'NetApp Service Name',
				description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
				placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			}),
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const name = this.getNodeParameter('name', _itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	const isDefault = this.getNodeParameter('isDefault', _itemIndex) as boolean;
	if (isDefault) { body.isDefault = isDefault; }
	body.rules = this.getNodeParameter('rules', _itemIndex) as string;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
