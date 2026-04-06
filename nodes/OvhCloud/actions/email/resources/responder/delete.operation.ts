import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a responder for an email domain.
 *
 * HTTP method: DELETE
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
			description: 'The account name of the responder to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Responder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const account = this.getNodeParameter('account', 0) as string;
	const data = (await client.httpDelete(
		`/email/domain/${domainParam.value}/responder/${account}`,
	)) as IDataObject;
	return [{ json: data }];
}
