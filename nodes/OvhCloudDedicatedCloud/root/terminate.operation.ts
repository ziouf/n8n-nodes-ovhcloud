import { SERVICE_NAME_2 } from '../serviceName';
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
		destructiveActionNotice('This will terminate the terminate service. This action is irreversible.', displayOptions),
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
	];
}

/**
 * Executes the Ask for the termination of your service operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/terminate
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/terminate`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
