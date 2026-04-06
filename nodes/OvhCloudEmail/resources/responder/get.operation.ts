import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a responder for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/responder/{account}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
			description: 'The account name of the responder',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Responder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const account = this.getNodeParameter('account', 0) as string;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/responder/${account}`,
	)) as IDataObject;
	return [{ json: data }];
}
