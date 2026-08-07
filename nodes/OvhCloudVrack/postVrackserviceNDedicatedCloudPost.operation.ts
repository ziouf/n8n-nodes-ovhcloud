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
			displayName: 'DedicatedCloud',
			name: 'dedicatedCloud',
			type: 'string',
			default: '',
			description: 'The dedicatedcloud value',
			displayOptions,
		},
	];
}

/**
 * Add VMware on OVHcloud to vRack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/dedicatedCloud
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const dedicatedCloud = this.getNodeParameter('dedicatedCloud', itemIndex) as string;


const body: IDataObject = {
    dedicatedCloud: dedicatedCloud
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedCloud', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

