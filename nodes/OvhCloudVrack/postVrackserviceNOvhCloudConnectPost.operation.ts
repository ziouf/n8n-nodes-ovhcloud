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
			displayName: 'OvhCloudConnect',
			name: 'ovhCloudConnect',
			type: 'string',
			default: '',
			description: 'The ovhcloudconnect value',
			displayOptions,
		},
	];
}

/**
 * Add an ovhCloudConnect to the vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/ovhCloudConnect
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const ovhCloudConnect = this.getNodeParameter('ovhCloudConnect', itemIndex) as string;


const body: IDataObject = {
    ovhCloudConnect: ovhCloudConnect
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ovhCloudConnect', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

