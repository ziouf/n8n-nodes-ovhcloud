import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'offer',
          name: 'offer',
          type: 'string',
          default: '',
          required: true,
          description: 'Required offer parameter',
          displayOptions,
        },
	];
}

/**
 * Get available order capacities
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/availableOrderCapacities
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const offer = this.getNodeParameter('offer', itemIndex) as string;

	const qs: IDataObject = {};
	qs['offer'] = offer;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + 'availableOrderCapacities', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
