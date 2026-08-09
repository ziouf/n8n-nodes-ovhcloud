import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about the termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'What next after your termination request',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason of the termination request',
			displayOptions,
		},
	];
}

/**
 * Confirm termination of a Horizon View service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = { token: this.getNodeParameter('token', _itemIndex ?? 0) as string };

	const commentary = (this.getNodeParameter('commentary', _itemIndex ?? 0, '') as string) || '';
	if (commentary) body.commentary = commentary;

	const futureUse = (this.getNodeParameter('futureUse', _itemIndex ?? 0, '') as string) || '';
	if (futureUse) body.futureUse = futureUse;

	const reason = (this.getNodeParameter('reason', _itemIndex ?? 0, '') as string) || '';
	if (reason) body.reason = reason;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/confirmTermination`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
