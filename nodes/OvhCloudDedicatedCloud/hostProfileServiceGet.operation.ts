import { SERVICE_NAME_2 } from './serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Host Profile ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the host profile',
			displayOptions,
		},
	];
}

/**
 * Executes the Get host profile operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/location/hostProfile/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/location/hostProfile/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
