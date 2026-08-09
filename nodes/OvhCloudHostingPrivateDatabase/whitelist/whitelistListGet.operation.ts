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
          description: 'Filter on ip',
          displayOptions,
        },
        {
          displayName: 'Service',
          name: 'service',
          type: 'string',
          default: '',
          description: 'Filter on service',
          displayOptions,
        },
        {
          displayName: 'Sftp',
          name: 'sftp',
          type: 'string',
          default: '',
          description: 'Filter on sftp',
          displayOptions,
        },
	];
}

/**
 * List whitelists on a Web Cloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex, '') as string;
	const service = this.getNodeParameter('service', _itemIndex, '') as string;
	const sftp = this.getNodeParameter('sftp', _itemIndex, '') as string;

	const qs: IDataObject = {};
	if (ip) {
		qs['ip'] = ip;
	}
	if (service) {
		qs['service'] = service;
	}
	if (sftp) {
		qs['sftp'] = sftp;
	}

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'whitelist', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
