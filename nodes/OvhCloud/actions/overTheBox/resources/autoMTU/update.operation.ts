import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** Change the value of autoMTU. HTTP: PUT /overTheBox/{serviceName}/autoMTU */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Auto MTU Value', name: 'autoMTU', type: 'boolean', default: false, required: true, description: 'Enable or disable auto MTU', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const autoMTU = this.getNodeParameter('autoMTU', 0) as boolean;
	const data = (await client.httpPut(`/overTheBox/${serviceName}/autoMTU`, { body: { autoMTU } })) as IDataObject;
	return [{ json: data }];
}
