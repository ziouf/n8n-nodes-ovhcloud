import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'FrontendId',
			name: 'frontendId',
			type: 'string',
			default: '',
			required: true,
			description: 'The frontend ID',
			displayOptions,
		},
	];
}

/**
 * Delete an TCP frontend
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const frontendId = this.getNodeParameter('frontendId', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'frontend' + '/' + encodeURIComponent(frontendId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

