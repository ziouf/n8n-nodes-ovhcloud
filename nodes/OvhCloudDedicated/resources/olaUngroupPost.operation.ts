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
			description: 'Ungroup OLA interfaces',
			displayOptions,
		},
		{
			displayName: 'Interfaces',
			name: 'interfaces',
			type: 'string',
			default: '',
			required: true,
			description: 'Ungroup OLA interfaces',
			displayOptions,
		},
	];
}

/**
 * Ungroup OLA interfaces
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ola/ungroup
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const interfaces = this.getNodeParameter('interfaces', itemIndex, '') as string;

	const body: IDataObject = {};
		if (interfaces) {
			body.interfaces = interfaces;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ola/ungroup`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
