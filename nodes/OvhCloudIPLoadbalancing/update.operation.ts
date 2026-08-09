import type {
	IExecuteFunctions,
	INodeProperties,
	IDataObject,
	IDisplayOptions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your IP load balancing',
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address of the load balancer',
		},
		{
			displayName: 'No SLB',
			name: 'noSlb',
			type: 'boolean',
			default: false,
			description: 'Whether to disable SLB on this load balancer',
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex) as string;
	const noSlb = this.getNodeParameter('noSlb', _itemIndex) as boolean;

	const body: IDataObject = {
		ip,
		noSlb,
	};

	await client.httpPut(`/ipLoadbalancing/${serviceName}`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}
