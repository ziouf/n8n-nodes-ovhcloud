import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** Delete a remote access. HTTP: DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Remote Access ID', name: 'remoteAccessId', type: 'string', default: '', required: true, description: 'The ID of the remote access', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const remoteAccessId = this.getNodeParameter('remoteAccessId', 0) as string;
	const data = (await client.httpDelete(`/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`)) as IDataObject;
	return [{ json: data }];
}
