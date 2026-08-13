import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'The email address of the Horizon user',
			displayOptions,
		},
	];
}

/**
 * Change the properties of the dedicated Horizon user.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/user/changeProperties
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	const email = (this.getNodeParameter('email', _itemIndex ?? 0, '') as string) || '';
	if (email) body.email = email;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/dedicatedHorizon/user/changeProperties`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
