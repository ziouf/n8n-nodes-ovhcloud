import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'options',
			default: 'flush',
			options: [
				{ name: 'Flush', value: 'flush' },
				{ name: 'Flush All', value: 'flushAll' },
				{ name: 'Generate SSL', value: 'generateSsl' },
				{ name: 'Install SSL', value: 'installSsl' },
				{ name: 'Reinstall SSL', value: 'reinstallSsl' },
				{ name: 'Remove Domain', value: 'removeDomain' },
				{ name: 'Uninstall SSL', value: 'uninstallSsl' },
				{ name: 'Update Cache Rule', value: 'updateCacheRule' },
			],
			description: 'Filter the value of function property (=)',
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
				{ name: 'Error', value: 'error' },
				{ name: 'Todo', value: 'todo' },
			],
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ListSslTasks operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/ssl/tasks
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const taskFunction = (this.getNodeParameter('function', itemIndex, '') as string) || '';
	const status = (this.getNodeParameter('status', itemIndex, '') as string) || '';

	const qs: IDataObject = {};
	if (taskFunction) qs.function = taskFunction;
	if (status) qs.status = status;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/ssl/tasks`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
