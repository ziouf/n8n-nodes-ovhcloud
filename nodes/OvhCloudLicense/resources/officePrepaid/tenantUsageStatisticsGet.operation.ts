import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The OfficePrepaid license service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'officePrepaid-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Period\'s start point',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'Period\'s end point',
			displayOptions,
		},
	];
}


/**
 * Get day-to-day statistics of license usage and availability.
 *
 * HTTP method: GET
 * Endpoint: /license/officePrepaid/{serviceName}/tenantUsageStatistics
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const from = this.getNodeParameter('from', _itemIndex, '') as string;
	const to = this.getNodeParameter('to', _itemIndex, '') as string;

	const qs: IDataObject = {
    from: from,
    to: to
  };
	const data = (await client.httpGet('/license/officePrepaid/' + encodeURIComponent(serviceName) + '/tenantUsageStatistics', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

