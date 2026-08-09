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
 * List Regions available to announce IP blocks
 *
 * HTTP method: GET
 * Endpoint: /vrack/publicRoutingRegion
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {

	const region = this.getNodeParameter('region', _itemIndex) as string;


const qs: IDataObject = {
    region: region
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrack' + '/' + 'publicRoutingRegion', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

