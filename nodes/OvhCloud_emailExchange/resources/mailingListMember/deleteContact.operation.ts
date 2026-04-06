import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Remove an external contact member from a mailing list.
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/contact/{externalContactId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'External Contact ID',
			name: 'externalContactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The external contact ID to remove as member',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Mailing List Member Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as string;
	const externalContactId = this.getNodeParameter('externalContactId', 0) as string;

	const data = (await client.httpDelete(
		`/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${externalContactId}`,
	)) as IDataObject;
	return [{ json: data }];
}
