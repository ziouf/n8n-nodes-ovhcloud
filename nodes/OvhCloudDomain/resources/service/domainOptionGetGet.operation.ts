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
			displayName: 'Option',
			name: 'option',
			type: 'string',
			default: '',
			required: true,
			description: 'The option identifier',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get details on this domain option operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/option/{option}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const option = this.getNodeParameter('option', itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/option/${encodeURIComponent(option)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
