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
			required: true,
			description: 'The dedicatedserver identifier',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			description: 'The period parameter',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'The type parameter',
			displayOptions,
		},
	];
}

/**
 * Retrieve vrack traffic graph values (LEGACY)
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dedicatedServer = this.getNodeParameter('dedicatedServer', _itemIndex) as string;

	const period = this.getNodeParameter('period', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;


const qs: IDataObject = {
    period: period,
    type: type
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'dedicatedServer' + '/' + encodeURIComponent(dedicatedServer) + '/' + 'mrtg', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

