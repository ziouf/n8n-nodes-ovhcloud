import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Book Key',
			name: 'bookKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the phonebook',
			displayOptions,
		},
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the /me/document file you want to import',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/phonebooks/{bookKey}/import operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}/import
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const documentId = this.getNodeParameter('documentId', 0) as string;
	const body: IDataObject = {};
	body['documentId'] = documentId;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/import`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
