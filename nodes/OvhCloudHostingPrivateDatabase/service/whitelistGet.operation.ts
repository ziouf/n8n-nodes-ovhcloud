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
          displayName: 'Ip',
          name: 'ip',
          type: 'string',
          default: '',
          required: true,
          description: 'Ip parameter',
          displayOptions,
        },
	];
}

/**
 * Get whitelist properties
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist/{ip}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'whitelist' + '/' + encodeURIComponent(ip))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
