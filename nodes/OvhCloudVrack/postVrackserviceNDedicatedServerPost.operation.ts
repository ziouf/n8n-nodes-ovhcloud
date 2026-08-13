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
			displayName: 'DedicatedServer',
			name: 'dedicatedServer',
			type: 'string',
			default: '',
			description: 'The dedicatedserver value',
			displayOptions,
		},
	];
}

/**
 * add a dedicated server to this vrack (LEGACY)
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/dedicatedServer
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const dedicatedServer = this.getNodeParameter('dedicatedServer', _itemIndex) as string;


const body: IDataObject = {
    dedicatedServer: dedicatedServer
    };

	const client = getClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

