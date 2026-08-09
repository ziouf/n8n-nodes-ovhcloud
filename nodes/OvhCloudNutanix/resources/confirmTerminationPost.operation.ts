import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Nutanix Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Nutanix cluster service name (e.g. nutanix-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNutanixServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'nutanix-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'The termination token sent by email to the admin contact',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'The reason for the termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'The future use after the termination',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
			displayOptions,
		},
		{
			displayName: 'Commentary Future Use',
			name: 'commentaryFutureUse',
			type: 'string',
			default: '',
			description: 'Commentary about your future use',
			displayOptions,
		},
		{
			displayName: 'Commentary Reason',
			name: 'commentaryReason',
			type: 'string',
			default: '',
			description: 'Commentary about your reason for termination request',
			displayOptions,
		},
	];
}

/**
 * Confirm the termination of a Nutanix cluster.
 *
 * HTTP method: POST
 * Endpoint: /nutanix/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const token = (this.getNodeParameter('token', _itemIndex ?? 0, '') as string) || '';
	const reason = (this.getNodeParameter('reason', _itemIndex ?? 0, '') as string) || '';
	const futureUse = (this.getNodeParameter('futureUse', _itemIndex ?? 0, '') as string) || '';
	const commentary = (this.getNodeParameter('commentary', _itemIndex ?? 0, '') as string) || '';
	const commentaryFutureUse = (this.getNodeParameter('commentaryFutureUse', _itemIndex ?? 0, '') as string) || '';
	const commentaryReason = (this.getNodeParameter('commentaryReason', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (token) body.token = token;
	if (reason) body.reason = reason;
	if (futureUse) body.futureUse = futureUse;
	if (commentary) body.commentary = commentary;
	if (commentaryFutureUse) body.commentaryFutureUse = commentaryFutureUse;
	if (commentaryReason) body.commentaryReason = commentaryReason;
	await client.httpPost(`/nutanix/${encodeURIComponent(serviceName)}/confirmTermination`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
