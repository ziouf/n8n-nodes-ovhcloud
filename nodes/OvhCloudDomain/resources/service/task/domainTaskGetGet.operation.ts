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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Get details about a domain task operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/task/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const id = this.getNodeParameter('id', _itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/task/${encodeURIComponent(id)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
