import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Send mailing list by email.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList/{name}/sendListByEmail
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
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'Email address to send the list to',
			displayOptions,
		},
	];
}

/**
 * Executes the Send Mailing List By Email operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mailingListName = this.getNodeParameter('mailingListName', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/mailingList/${mailingListName}/sendListByEmail`,
		{ email },
	)) as IDataObject;
	return [{ json: data }];
}
