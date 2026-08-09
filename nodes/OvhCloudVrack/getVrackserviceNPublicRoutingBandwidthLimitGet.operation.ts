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
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'The region parameter',
			displayOptions,
		},
	];
}

/**
 * List public routing bandwidth limit on regions for this vrack
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/publicRoutingBandwidthLimit
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const region = this.getNodeParameter('region', _itemIndex) as string;


const qs: IDataObject = {
    region: region
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'publicRoutingBandwidthLimit', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

