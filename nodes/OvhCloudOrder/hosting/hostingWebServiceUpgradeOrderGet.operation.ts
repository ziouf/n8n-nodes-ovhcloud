import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'Duration',
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
			required: false,
			description: 'Upgrade start time if it implies a shutdown of the website during few minutes (Format "HH:MM:ss")',
			displayOptions,
		},
		{
			displayName: 'Waive Retraction Period',
			name: 'waiveRetractationPeriod',
			type: 'boolean',
			default: '',
			required: false,
			description: 'Indicates that order will be processed with waiving retractation period',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex) as string;
	const offer = this.getNodeParameter('offer', itemIndex) as string;
	const startTime = this.getNodeParameter('startTime', itemIndex) as string;
	const waiveRetractationPeriod = this.getNodeParameter('waiveRetractationPeriod', itemIndex) as boolean;

	const qs = {offer: offer, startTime: startTime, waiveRetractationPeriod: waiveRetractationPeriod};

	const data = (await client.httpGet(`/order/hosting/web/${serviceName}/upgrade/${duration}`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
