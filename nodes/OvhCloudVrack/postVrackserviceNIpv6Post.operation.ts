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
			displayName: 'Block',
			name: 'block',
			type: 'string',
			default: '',
			description: 'The block value',
			displayOptions,
		},
	];
}

/**
 * add an IP v6 block to this vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/ipv6
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const block = this.getNodeParameter('block', itemIndex) as string;


const body: IDataObject = {
    block: block
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipv6', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

