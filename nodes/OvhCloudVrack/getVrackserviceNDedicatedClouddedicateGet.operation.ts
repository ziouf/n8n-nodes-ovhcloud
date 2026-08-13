import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'DedicatedCloud',
			name: 'dedicatedCloud',
			type: 'string',
			default: '',
			required: true,
			description: 'The Dedicated Cloud service',
			displayOptions,
		},
	];
}

/**
 * Get vRack
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedCloud = this.getNodeParameter('dedicatedCloud', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloud' + '/' + encodeURIComponent(dedicatedCloud))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

