import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the domain confirm termination create.', displayOptions),
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainConfirmTerminationCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainConfirmTerminationCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason of your termination request',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainConfirmTerminationCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by mail to the admin contact',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainConfirmTerminationCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Confirm termination of your email service
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const commentary = this.getNodeParameter('commentary', _itemIndex ?? 0) as string;
	const reason = this.getNodeParameter('reason', _itemIndex ?? 0) as string;
	const token = this.getNodeParameter('token', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		commentary: commentary,
		reason: reason,
		token: token,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
