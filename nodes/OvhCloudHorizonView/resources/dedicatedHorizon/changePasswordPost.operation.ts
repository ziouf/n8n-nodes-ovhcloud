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
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The new password of the customer user',
			displayOptions,
		},
	];
}

/**
 * Change the password of the dedicated Horizon customer user.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/user/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	const password = (this.getNodeParameter('password', _itemIndex ?? 0, '') as string) || '';
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/dedicatedHorizon/user/changePassword`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
