import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the main.', displayOptions),
		{
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOvhCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '123e4567-e89b-12d3-a456-426614174000',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Termination Token',
			name: 'token',
			type: 'string',
			default: '',
			required: true,
			description: 'Termination token sent by email',
			typeOptions: { password: true },
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			required: true,
			description: 'Reason of the termination request',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Additional commentary about the termination',
			displayOptions,
		},
	];
}

/**
 * Confirm the termination of an OvhCloud Connect service.
 *
 * HTTP method: POST
 * Endpoint: /ovhCloudConnect/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const token = (this.getNodeParameter('token', _itemIndex ?? 0, '') as string) || '';
	const reason = (this.getNodeParameter('reason', _itemIndex ?? 0, '') as string) || '';
	const commentary = (this.getNodeParameter('commentary', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (token) body.token = token;
	if (reason) body.reason = reason;
	if (commentary) body.commentary = commentary;

	const data = (await client.httpPost(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/confirmTermination`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
