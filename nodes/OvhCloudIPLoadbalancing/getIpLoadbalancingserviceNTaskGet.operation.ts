import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'The action parameter',
			displayOptions,
		},
		{
			displayName: 'CreationDate.from',
			name: 'creationDate.from',
			type: 'string',
			default: '',
			description: 'The creationdate.from parameter',
			displayOptions,
		},
		{
			displayName: 'CreationDate.to',
			name: 'creationDate.to',
			type: 'string',
			default: '',
			description: 'The creationdate.to parameter',
			displayOptions,
		},
		{
			displayName: 'DoneDate.from',
			name: 'doneDate.from',
			type: 'string',
			default: '',
			description: 'The donedate.from parameter',
			displayOptions,
		},
		{
			displayName: 'DoneDate.to',
			name: 'doneDate.to',
			type: 'string',
			default: '',
			description: 'The donedate.to parameter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter',
			displayOptions,
		},
	];
}

/**
 * Task for this iplb
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/task
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const action = this.getNodeParameter('action', _itemIndex) as string;
	const creationDateFrom = this.getNodeParameter('creationDate.from', _itemIndex) as string;
	const creationDateTo = this.getNodeParameter('creationDate.to', _itemIndex) as string;
	const doneDateFrom = this.getNodeParameter('doneDate.from', _itemIndex) as string;
	const doneDateTo = this.getNodeParameter('doneDate.to', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;

	const qs: IDataObject = {
		'creationDate.from': creationDateFrom,
		'creationDate.to': creationDateTo,
		'doneDate.from': doneDateFrom,
		'doneDate.to': doneDateTo,
		action: action,
		status: status,
	};

	const client = getClient(this);
	const data = (await client.httpGet(
		'/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'task',
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
