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
			description: 'The vrackservices value',
			displayOptions,
		},
	];
}

/**
 * Add a vrackServices to the vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/vrackServices
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const vrackServices = this.getNodeParameter('vrackServices', _itemIndex) as string;


const body: IDataObject = {
    vrackServices: vrackServices
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'vrackServices', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

