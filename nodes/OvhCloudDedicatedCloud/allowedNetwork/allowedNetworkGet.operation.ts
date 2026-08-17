import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Network Access ID',
			name: 'networkAccessId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get network allowed on infrastructure firewall operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const networkAccessId = this.getNodeParameter('networkAccessId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
