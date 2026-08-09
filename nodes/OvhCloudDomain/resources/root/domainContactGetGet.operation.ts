import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get details about a contact operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/contact/{contactId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const contactId = this.getNodeParameter('contactId', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/contact/${encodeURIComponent(contactId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
