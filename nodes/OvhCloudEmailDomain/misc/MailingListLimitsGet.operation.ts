import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Moderator Message',
			name: 'moderatorMessage',
			type: 'string',
			default: '',
			required: true,
			description: 'If true, messages are moderate',
			displayOptions: {
				show: {
					emailDomainOperation: ['MailingListLimitsGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get limits of mailing list
 *
 * HTTP method: GET
 * Endpoint: /email/domain/mailingListLimits
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const moderatorMessage = this.getNodeParameter('moderatorMessage', 0) as string;

	const qs: IDataObject = {
		moderatorMessage: moderatorMessage,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain' + '/mailingListLimits', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
