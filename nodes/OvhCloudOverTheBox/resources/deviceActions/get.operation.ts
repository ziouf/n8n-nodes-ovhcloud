import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Get device action details. HTTP: GET /overTheBox/{serviceName}/device/actions/{actionId} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Action ID', name: 'actionId', type: 'string', default: '', required: true, description: 'The ID of the action', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const actionId = this.getNodeParameter('actionId', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/device/actions/${actionId}`)) as IDataObject;
	return [{ json: data }];
}
