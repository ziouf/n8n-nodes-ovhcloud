import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
	];
}

/**
 * Restore administrator rights
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/sharepoint/restoreAdminRights
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPost('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'sharepoint' + '/' + 'restoreAdminRights', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

