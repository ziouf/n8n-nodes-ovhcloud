import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function_',
			type: 'string',
			default: '',
			description: 'Filter the value of function property (like)',
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
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'alldom',
			options: [
				{ name: 'Alldom', value: 'alldom' },
				{ name: 'Domain', value: 'domain' },
			],
			description: 'Filter the value of type property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the List all domain tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const qs: IDataObject = {};
		const function_ = this.getNodeParameter('function_', itemIndex, '') as string;
		if (function_ !== '' && function_ !== undefined) qs['function'] = function_;
		const status = this.getNodeParameter('status', itemIndex, '') as string;
		if (status !== '' && status !== undefined) qs['status'] = status;
		const type = this.getNodeParameter('type', itemIndex, '') as string;
		if (type !== '' && type !== undefined) qs['type'] = type;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/task`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
