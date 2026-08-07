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
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
			displayOptions,
		},
	];
}

/**
 * Delete a custom SSL certificate
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'ssl' + '/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

