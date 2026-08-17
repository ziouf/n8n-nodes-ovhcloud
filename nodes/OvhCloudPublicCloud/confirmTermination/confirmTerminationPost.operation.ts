import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination confirmation token',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{ name: 'Budget', value: 'BUDGET' },
				{ name: 'Security', value: 'SECURITY' },
				{ name: 'Technical', value: 'TECHNICAL' },
				{ name: 'Other', value: 'OTHER' },
			],
			default: 'BUDGET',
			description: 'The reason for termination',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Additional commentary for the termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const token = this.getNodeParameter('token', _itemIndex ?? 0) as string;
	const reason = this.getNodeParameter('reason', _itemIndex ?? 0) as string;
	const commentary = this.getNodeParameter('commentary', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		token,
	};
	if (reason) body.reason = reason;
	if (commentary) body.commentary = commentary;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/confirmTermination`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
