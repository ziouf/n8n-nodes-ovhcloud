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
			description: 'Remove vRack connection',
			displayOptions,
		},
		{
			displayName: 'V Rack ID',
			name: 'vRackId',
			type: 'string',
			default: '',
			required: true,
			description: 'Remove vRack connection',
			displayOptions,
		},
	];
}

/**
 * Remove vRack connection
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/server/{serviceName}/vrack/{vRackId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const vRackId = this.getNodeParameter('vRackId', itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/vrack/${encodeURIComponent(String(vRackId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
