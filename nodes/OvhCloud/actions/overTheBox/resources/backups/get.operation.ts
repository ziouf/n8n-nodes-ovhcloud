import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** Get backup details. HTTP: GET /overTheBox/{serviceName}/backups/{backupId} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Backup ID', name: 'backupId', type: 'string', default: '', required: true, description: 'The ID of the backup', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const backupId = this.getNodeParameter('backupId', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/backups/${backupId}`)) as IDataObject;
	return [{ json: data }];
}
