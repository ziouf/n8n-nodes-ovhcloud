import { SERVICE_NAME } from '../../serviceName';
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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms user login',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Slot number ID',
			displayOptions,
		},
		{
			displayName: 'Auto Update',
			name: 'autoUpdate',
			type: 'boolean',
			default: false,
			description: 'Whether Property of sms.Receiver',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.Receiver',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/users/{login}/receivers/{slotId} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/users/{login}/receivers/{slotId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const slotId = this.getNodeParameter('slotId', _itemIndex ?? 0) as number;
	const body: IDataObject = {};
	const autoUpdate = this.getNodeParameter('autoUpdate', _itemIndex ?? 0) as boolean;
	if (autoUpdate) body['autoUpdate'] = autoUpdate;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (description) body['description'] = description;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/receivers/${slotId}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
