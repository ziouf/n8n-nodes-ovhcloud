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
			displayName: 'FrontendId',
			name: 'frontendId',
			type: 'string',
			default: '',
			required: true,
			description: 'The frontendid identifier',
			displayOptions,
		},
	];
}

/**
 * Delete an HTTP frontend
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const frontendId = this.getNodeParameter('frontendId', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'frontend' + '/' + encodeURIComponent(frontendId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

