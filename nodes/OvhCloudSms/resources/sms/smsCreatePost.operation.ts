import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Recipients',
			name: 'recipients',
			type: 'string',
			default: '',
			required: true,
			description: 'Comma-separated list of recipient phone numbers',
			displayOptions,
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			typeOptions: { rows: 2 },
			default: '',
			required: true,
			description: 'The SMS content',
			displayOptions,
		},
	];
}

/**
 * Executes the Send SMS operation.
 *
 * HTTP method: POST
 * Endpoint: /sms
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const recipients = this.getNodeParameter('recipients', 0) as string;
	const content = this.getNodeParameter('content', 0) as string;

	const body: IDataObject = {
		recipients: recipients.split(',').map((r: string) => r.trim()),
		content,
	};

	const data = (await client.httpPost('/sms', body)) as string;
	return this.helpers.returnJsonArray([{ taskName: data }]);
}
