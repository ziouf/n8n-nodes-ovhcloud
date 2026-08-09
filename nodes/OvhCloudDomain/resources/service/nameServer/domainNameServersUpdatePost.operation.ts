import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Name Servers',
			name: 'nameServers',
			type: 'json',
			default: '',
			required: true,
			description: 'Name servers to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS servers operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/nameServers/update
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const nameServers = this.getNodeParameter('nameServers', _itemIndex, '') as string;
		if (nameServers !== '') body['nameServers'] = JSON.parse(nameServers);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/nameServers/update`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
