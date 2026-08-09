import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the variable',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'string',
			options: [
				{ name: 'Integer', value: 'integer' },
				{ name: 'Password', value: 'password' },
				{ name: 'String', value: 'string' },
			],
			description: 'Type of variable set',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Value of the variable',
			displayOptions,
		},
	];
}

/**
 * Update an environment variable on a web hosting service
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/envVar/{key}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const key = this.getNodeParameter('key', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;
	const value = this.getNodeParameter('value', _itemIndex) as string;
	const data = (await client.httpPut(
		`/hosting/web/${encodeURIComponent(serviceName)}/envVar/${encodeURIComponent(key)}`,
		{ key, type, value },
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
