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
			displayName: 'VrackServices',
			name: 'vrackServices',
			type: 'string',
			default: '',
			required: true,
			description: 'The vrackservices identifier',
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/vrackServices/{vrackServices}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const vrackServices = this.getNodeParameter('vrackServices', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'vrackServices' + '/' + encodeURIComponent(vrackServices))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

