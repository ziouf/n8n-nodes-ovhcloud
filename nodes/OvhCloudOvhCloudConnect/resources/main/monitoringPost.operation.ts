import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
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
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			description: 'Email address to receive the monitoring alerts',
			placeholder: 'name@email.com',
			displayOptions,
		},
		{
			displayName: 'Phone',
			name: 'phone',
			type: 'string',
			default: '',
			description: 'Phone number to receive the monitoring alerts',
			displayOptions,
		},
		{
			displayName: 'SMS',
			name: 'sms',
			type: 'string',
			default: '',
			description: 'SMS number to receive the monitoring alerts',
			displayOptions,
		},
	];
}

/**
 * Create a new monitoring subscription for an OvhCloud Connect service.
 *
 * HTTP method: POST
 * Endpoint: /ovhCloudConnect/{serviceName}/monitoring
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const email = (this.getNodeParameter('email', _itemIndex ?? 0, '') as string) || '';
	const phone = (this.getNodeParameter('phone', _itemIndex ?? 0, '') as string) || '';
	const sms = (this.getNodeParameter('sms', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (email) body.email = email;
	if (phone) body.phone = phone;
	if (sms) body.sms = sms;

	await client.httpPost(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/monitoring`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
