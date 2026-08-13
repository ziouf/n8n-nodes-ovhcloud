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
			displayName: 'Automatic Recredit Amount',
			name: 'automaticRecreditAmount',
			type: 'string',
			default: '',
			description:
				'Property of sms.Account (allowed values: 100, 200, 250, 500, 1000, 5000, 10000)',
			displayOptions,
		},
		{
			displayName: 'Call Back',
			name: 'callBack',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Property of sms.Account (allowed values: disable, enable)',
			displayOptions,
		},
		{
			displayName: 'Stop Call Back',
			name: 'stopCallBack',
			type: 'string',
			default: '',
			description: 'Property of sms.Account',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const automaticRecreditAmount = this.getNodeParameter('automaticRecreditAmount', _itemIndex ?? 0) as string;
	if (automaticRecreditAmount) body['automaticRecreditAmount'] = automaticRecreditAmount;
	const callBack = this.getNodeParameter('callBack', _itemIndex ?? 0) as string;
	if (callBack) body['callBack'] = callBack;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (description) body['description'] = description;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	if (name) body['name'] = name;
	const status = this.getNodeParameter('status', _itemIndex ?? 0) as string;
	if (status) body['status'] = status;
	const stopCallBack = this.getNodeParameter('stopCallBack', _itemIndex ?? 0) as string;
	if (stopCallBack) body['stopCallBack'] = stopCallBack;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
