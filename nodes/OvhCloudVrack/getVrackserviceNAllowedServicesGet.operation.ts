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
			displayName: 'ServiceFamily',
			name: 'serviceFamily',
			type: 'string',
			default: '',
			description: 'The servicefamily parameter',
			displayOptions,
		},
	];
}

/**
 * List all services allowed in this vrack
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/allowedServices
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const serviceFamily = this.getNodeParameter('serviceFamily', _itemIndex) as string;


const qs: IDataObject = {
    serviceFamily: serviceFamily
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'allowedServices', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

