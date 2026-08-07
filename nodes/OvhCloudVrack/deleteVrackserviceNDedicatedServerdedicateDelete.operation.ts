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
			displayName: 'DedicatedServer',
			name: 'dedicatedServer',
			type: 'string',
			default: '',
			required: true,
			description: 'The dedicatedserver identifier',
			displayOptions,
		},
	];
}

/**
 * remove this server from this vrack (LEGACY)
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/dedicatedServer/{dedicatedServer}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dedicatedServer = this.getNodeParameter('dedicatedServer', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServer' + '/' + encodeURIComponent(dedicatedServer))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

