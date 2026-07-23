import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The contact service name (e.g. 1234567)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getContacts' },
				},
				{
					displayName: 'By Name/Number',
					name: 'name',
					type: 'string',
					placeholder: '1234567',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactId = this.getNodeParameter('contactId', itemIndex, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/domain/contact/${contactId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
