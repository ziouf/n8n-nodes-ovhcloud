import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The ip identifier',
			displayOptions,
		},
	];
}

/**
 * remove this IP block from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/ip/{ip}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ip = this.getNodeParameter('ip', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ip' + '/' + encodeURIComponent(ip))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

