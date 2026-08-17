import { SERVICE_NAME } from '../../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../../shared/transport/ApiClient';

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
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Get this glue record operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/glueRecord/{host}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const host = this.getNodeParameter('host', _itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/glueRecord/${encodeURIComponent(host)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
