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
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			required: true,
			description: 'The host identifier',
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
 * Executes the Delete the glue record operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/{serviceName}/glueRecord/{host}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const host = this.getNodeParameter('host', itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const data = (await client.httpDelete(`/domain/${encodeURIComponent(serviceName)}/glueRecord/${encodeURIComponent(host)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
