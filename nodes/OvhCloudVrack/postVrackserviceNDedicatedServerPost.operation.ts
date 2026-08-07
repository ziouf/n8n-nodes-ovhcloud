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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const dedicatedServer = this.getNodeParameter('dedicatedServer', itemIndex) as string;


const body: IDataObject = {
    dedicatedServer: dedicatedServer
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

