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
			displayName: 'HistorizedDate.from',
			name: 'historizedDate.from',
			type: 'string',
			default: '',
			description: 'The historizeddate.from parameter',
			displayOptions,
		},
		{
			displayName: 'HistorizedDate.to',
			name: 'historizedDate.to',
			type: 'string',
			default: '',
			description: 'The historizeddate.to parameter',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone parameter',
			displayOptions,
		},
	];
}

/**
 * Quota history informations, per month
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/quotaHistory
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const historizedDateFrom = this.getNodeParameter('historizedDate.from', itemIndex) as string;
	const historizedDateTo = this.getNodeParameter('historizedDate.to', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;

	const qs: IDataObject = {
		'historizedDate.from': historizedDateFrom,
		'historizedDate.to': historizedDateTo,
		zone: zone,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'quotaHistory',
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
