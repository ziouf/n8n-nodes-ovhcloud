import { SERVICE_NAME } from '../serviceName';
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
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Active Directory ID',
			name: 'activeDirectoryId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Active Directory',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Federated Active Directory operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const activeDirectoryId = this.getNodeParameter('activeDirectoryId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
