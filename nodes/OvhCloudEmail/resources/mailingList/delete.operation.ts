import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a mailing list for an email domain.
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/{domain}/mailingList/{name}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Mailing List Name',
			name: 'mailingListName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the mailing list to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Mailing List operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mailingListName = this.getNodeParameter('mailingListName', 0) as string;
	const data = (await client.httpDelete(
		`/email/domain/${domainParam.value}/mailingList/${mailingListName}`,
	)) as IDataObject;
	return [{ json: data }];
}
