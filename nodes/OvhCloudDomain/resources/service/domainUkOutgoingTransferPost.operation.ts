import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			required: true,
			description: 'Registrar tag',
			displayOptions,
		},
	];
}

/**
 * Executes the Schedule an outgoing transfer task for this domain (.uk only) operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/ukOutgoingTransfer
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const body: IDataObject = {};
		const tag = this.getNodeParameter('tag', itemIndex, '') as string;
		body['tag'] = tag;

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/ukOutgoingTransfer`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
