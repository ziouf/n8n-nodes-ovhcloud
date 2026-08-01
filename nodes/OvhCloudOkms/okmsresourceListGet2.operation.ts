import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Okms ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
		},

	];
}

/**
 * Executes the Get Get an OVHcloud KMS service operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
