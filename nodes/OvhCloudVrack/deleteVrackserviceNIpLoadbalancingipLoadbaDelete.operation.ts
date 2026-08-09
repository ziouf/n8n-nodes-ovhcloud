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
			displayName: 'IpLoadbalancing',
			name: 'ipLoadbalancing',
			type: 'string',
			default: '',
			required: true,
			description: 'The iploadbalancing identifier',
			displayOptions,
		},
	];
}

/**
 * remove this ipLoadbalancing from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ipLoadbalancing = this.getNodeParameter('ipLoadbalancing', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipLoadbalancing' + '/' + encodeURIComponent(ipLoadbalancing))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

