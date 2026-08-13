import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will reset the ip task reset task state. This action is irreversible.', displayOptions),
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			description: 'IP ex: 213.186.33.34/24',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			required: true,
			description: 'Reason of task restart',
			displayOptions,
		},
	];
}

/**
 * Executes the Relaunch operation currently in error state operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const network = this.getNodeParameter('network', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const body: IDataObject = {};
	body.reason = this.getNodeParameter('reason', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/ip/${encodeURIComponent(network)}/task/${taskId}/resetTaskState`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
