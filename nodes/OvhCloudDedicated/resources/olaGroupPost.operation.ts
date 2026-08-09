import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Group OLA interfaces',
			displayOptions,
		},
		{
			displayName: 'Interfaces',
			name: 'interfaces',
			type: 'string',
			default: '',
			required: true,
			description: 'Group OLA interfaces',
			displayOptions,
		},
	];
}

/**
 * Group OLA interfaces
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ola/group
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const interfaces = this.getNodeParameter('interfaces', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (interfaces) {
			body.interfaces = interfaces;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ola/group`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
