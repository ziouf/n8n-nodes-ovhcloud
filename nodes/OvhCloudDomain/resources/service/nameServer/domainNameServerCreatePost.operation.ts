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
			displayName: 'Name Server',
			name: 'nameServer',
			type: 'json',
			default: '',
			required: true,
			description: 'Name servers to create',
			displayOptions,
		},
	];
}

/**
 * Executes the Add new name server operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/nameServer
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const nameServer = this.getNodeParameter('nameServer', _itemIndex, '') as string;
		if (nameServer !== '') body['nameServer'] = JSON.parse(nameServer);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/nameServer`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
