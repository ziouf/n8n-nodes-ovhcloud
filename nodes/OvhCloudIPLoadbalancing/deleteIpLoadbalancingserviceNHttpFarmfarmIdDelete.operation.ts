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
			displayName: 'FarmId',
			name: 'farmId',
			type: 'string',
			default: '',
			required: true,
			description: 'The farmid identifier',
			displayOptions,
		},
	];
}

/**
 * Delete an HTTP Farm
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'farm' + '/' + encodeURIComponent(farmId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

