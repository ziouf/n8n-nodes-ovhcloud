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
			displayName: 'DedicatedServerInterface',
			name: 'dedicatedServerInterface',
			type: 'string',
			default: '',
			description: 'The dedicatedserverinterface value',
			displayOptions,
		},
	];
}

/**
 * add a dedicated server interface to this vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/dedicatedServerInterface
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const dedicatedServerInterface = this.getNodeParameter('dedicatedServerInterface', _itemIndex) as string;


const body: IDataObject = {
    dedicatedServerInterface: dedicatedServerInterface
    };

	const client = getClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServerInterface', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

