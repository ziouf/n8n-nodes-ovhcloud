import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a mailing list subscriber.
 *
 * HTTP method: POST
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
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'Email address of the subscriber',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Mailing List Subscriber operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mailingListName = this.getNodeParameter('mailingListName', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/mailingList/${mailingListName}/subscriber`,
		{ email },
	)) as IDataObject;
	return [{ json: data }];
}
