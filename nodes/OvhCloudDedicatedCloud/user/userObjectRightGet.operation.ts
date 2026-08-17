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
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Object Right ID',
			name: 'objectRightId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get user object right operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const objectRightId = this.getNodeParameter('objectRightId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/user/${userId}/objectRight/${objectRightId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
