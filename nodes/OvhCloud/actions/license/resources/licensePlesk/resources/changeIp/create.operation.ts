import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Change the IP of a Plesk license.
 *
 * HTTP method: POST
 * Endpoint: /license/plesk/{serviceName}/changeIp
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Plesk license service',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The new IP for the license',
			displayOptions,
		},
	];
}

/**
 * Executes the Change IP operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpPost(
		`/license/plesk/${serviceName}/changeIp`,
		{ body: { ip } },
	)) as IDataObject;
	return [{ json: data }];
}
