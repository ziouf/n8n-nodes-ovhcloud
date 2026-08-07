import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The internal name of your Web Cloud Database',
          displayOptions,
        },
        {
          displayName: 'Token',
          name: 'token',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'Token field',
          displayOptions,
        },
	];
}

/**
 * Confirm service termination
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/confirmTermination
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const token = this.getNodeParameter('token', itemIndex, '') as string;

	const body: IDataObject = {};
	if (token) {
		body['token'] = token;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
