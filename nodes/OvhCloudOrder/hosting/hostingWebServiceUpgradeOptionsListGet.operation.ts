import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'options',
			default: '',
			required: true,
			description: 'New offers for your hosting account',
			displayOptions,
		},
		{
			displayName: 'Start Time',
			name: 'startTime',
			type: 'string',
			default: '',
			description: 'Upgrade start time if it implies a shutdown of the website during few minutes (Format "HH:MM:ss")',
			displayOptions,
		},
		{
			displayName: 'Waive Retraction Period',
			name: 'waiveRetractationPeriod',
			type: 'boolean',
			default: false,
			description: 'Whether the order will be processed with waiving retractation period',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const offer = this.getNodeParameter('offer', _itemIndex) as string;
	const startTime = this.getNodeParameter('startTime', _itemIndex) as string;
	const waiveRetractationPeriod = this.getNodeParameter('waiveRetractationPeriod', _itemIndex) as boolean;

	const qs = {offer: offer, startTime: startTime, waiveRetractationPeriod: waiveRetractationPeriod};

	const data = (await client.httpGet(`/order/hosting/web/${serviceName}/upgrade`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
