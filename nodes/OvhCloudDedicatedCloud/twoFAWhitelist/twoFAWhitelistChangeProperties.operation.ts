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
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the trusted IP',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of your whitelist',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Two Factor Authentication Whitelisted Network operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string; if (description !== '') { body.description = description; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}/changeProperties`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
