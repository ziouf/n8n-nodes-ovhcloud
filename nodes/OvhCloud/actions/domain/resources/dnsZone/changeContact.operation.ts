import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Change DNS Zone Contact operation
 *
 * Initiates a contact change for a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/changeContact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contact handle to assign',
			displayOptions,
		},
	];
}

/**
 * Executes the Change DNS Zone Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const contactId = this.getNodeParameter('contactId', 0) as string;

	const body: IDataObject = { contactId };
	const data = (await client.httpPost(`/domain/zone/${zoneName}/changeContact`, body)) as IDataObject;
	return [{ json: data }];
}
