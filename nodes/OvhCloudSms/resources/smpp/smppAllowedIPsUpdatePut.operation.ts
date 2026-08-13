import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			default: 'add',
			options: [
				{ name: 'Add', value: 'add' },
				{ name: 'Remove', value: 'remove' },
			],
			required: true,
			description: 'Property of sms.AllowedIPs',
			displayOptions,
		},
		{
			displayName: 'Ips',
			name: 'ips',
			type: 'string',
			default: '',
			required: true,
			description: 'Property of sms.AllowedIPs (comma-separated list)',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/smpp/allowedIPs operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/smpp/allowedIPs
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const action = this.getNodeParameter('action', _itemIndex ?? 0) as string;
	body['action'] = action;
	const ips = this.getNodeParameter('ips', _itemIndex ?? 0) as string;
	body['ips'] = (ips as string).split(',').map((r: string) => r.trim());
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/smpp/allowedIPs`,
		body,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((v: string) => ({ id: v })));
}
