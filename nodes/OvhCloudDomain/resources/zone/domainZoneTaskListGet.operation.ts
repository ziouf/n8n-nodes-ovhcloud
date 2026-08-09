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
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function_',
			type: 'options',
			default: 'DnsAnycastActivate',
			options: [
				{ name: 'DnsAnycastActivate', value: 'DnsAnycastActivate' },
				{ name: 'DnsAnycastDeactivate', value: 'DnsAnycastDeactivate' },
				{ name: 'DnssecDisable', value: 'DnssecDisable' },
				{ name: 'DnssecEnable', value: 'DnssecEnable' },
				{ name: 'DnssecResigning', value: 'DnssecResigning' },
				{ name: 'DnssecRollKsk', value: 'DnssecRollKsk' },
				{ name: 'DnssecRollZsk', value: 'DnssecRollZsk' },
				{ name: 'ZoneCreate', value: 'ZoneCreate' },
				{ name: 'ZoneCut', value: 'ZoneCut' },
				{ name: 'ZoneDelete', value: 'ZoneDelete' },
				{ name: 'ZoneImport', value: 'ZoneImport' },
				{ name: 'ZoneRestore', value: 'ZoneRestore' },
			],
			description: 'Function filter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: 'cancelled',
			options: [
				{ name: 'Cancelled', value: 'cancelled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'error', value: 'error' },
				{ name: 'Problem', value: 'problem' },
				{ name: 'Todo', value: 'todo' },
			],
			description: 'Status filter',
			displayOptions,
		},
	];
}

/**
 * Executes the List zone tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const qs: IDataObject = {};
		const function_ = this.getNodeParameter('function_', _itemIndex, '') as string;
		if (function_ !== '' && function_ !== undefined) qs['function'] = function_;
		const status = this.getNodeParameter('status', _itemIndex, '') as string;
		if (status !== '' && status !== undefined) qs['status'] = status;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/task`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
