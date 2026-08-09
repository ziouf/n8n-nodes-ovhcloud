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
 * Delete sync service
 *
 * HTTP method: DELETE
 * Endpoint: /msServices/{serviceName}/sync
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'sync')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

