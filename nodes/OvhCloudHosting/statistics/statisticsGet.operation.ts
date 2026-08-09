import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Get statistics for a web hosting service. */
export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The hosting web service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'myservice.ovh' },
			],
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			options: [
				{ name: 'Day', value: 'day' },
				{ name: 'Week', value: 'week' },
				{ name: 'Month', value: 'month' },
				{ name: 'Year', value: 'year' },
			],
			default: 'day',
			required: true,
			description: 'The time period for statistics',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Bandwidth', value: 'bandwidth' },
				{ name: 'Hits', value: 'hits' },
				{ name: 'Errors', value: 'errors' },
			],
			default: 'bandwidth',
			required: true,
			description: 'The type of statistics to retrieve',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number, '', {
		extractValue: true,
	}) as string;
	const period = this.getNodeParameter('period', _itemIndex as number) as string;
	const type = this.getNodeParameter('type', _itemIndex as number) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/statistics`, {
		period,
		type,
	})) as IDataObject;
	return this.helpers.returnJsonArray(Array.isArray(data) ? data : [data]);
}
