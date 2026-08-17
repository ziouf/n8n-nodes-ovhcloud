import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will reset the reset triggered alarm. This action is irreversible.', displayOptions),
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Reset All Hypervisor Triggered Alarms operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/resetTriggeredAlarm
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/resetTriggeredAlarm`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
