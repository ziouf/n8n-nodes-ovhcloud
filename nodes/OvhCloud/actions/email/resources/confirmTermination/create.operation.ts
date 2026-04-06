import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Confirm termination of an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/confirmTermination
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Termination token',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Optional commentary for the termination',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Optional reason for the termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const token = this.getNodeParameter('token', 0) as string;
	const body: IDataObject = { token };
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const reason = this.getNodeParameter('reason', 0, '') as string;
	if (commentary) body.commentary = commentary;
	if (reason) body.reason = reason;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/confirmTermination`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
