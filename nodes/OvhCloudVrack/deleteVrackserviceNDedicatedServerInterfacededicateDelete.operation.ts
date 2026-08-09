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
			displayName: 'DedicatedServerInterface',
			name: 'dedicatedServerInterface',
			type: 'string',
			default: '',
			required: true,
			description: 'The dedicatedserverinterface identifier',
			displayOptions,
		},
	];
}

/**
 * remove this server interface from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedServerInterface = this.getNodeParameter('dedicatedServerInterface', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServerInterface' + '/' + encodeURIComponent(dedicatedServerInterface))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

