import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'getDedicatedServerServices',
						displayName: 'Dedicated Server Service Name',
						description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
						placeholder: 'ns123456.ip-123-45-678.eu',
					}),
					displayOptions,
				},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The task identifier (e.g. 12345)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Dedicated Server Task operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/task/${taskId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
