import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List mailing list subscribers.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/mailingList/{name}/subscriber
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Mailing List Name',
			name: 'mailingListName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the mailing list',
			displayOptions,
		},
	];
}

/**
 * Executes the List Mailing List Subscribers operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mailingListName = this.getNodeParameter('mailingListName', 0) as string;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/mailingList/${mailingListName}/subscriber`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
