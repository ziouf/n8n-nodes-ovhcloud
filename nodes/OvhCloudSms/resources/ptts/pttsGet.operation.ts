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
			displayName: 'Ptt',
			name: 'ptt',
			type: 'number',
			default: 0,
			required: true,
			description: 'The premium transaction tracking code',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/ptts operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/ptts
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const ptt = this.getNodeParameter('ptt', 0) as number;
	const qs: IDataObject = {};
	qs['ptt'] = ptt;
	const data = (await new ApiClient(this).httpGet(`/sms/ptts`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
