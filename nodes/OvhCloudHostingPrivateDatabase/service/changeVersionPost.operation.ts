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
          displayName: 'Version',
          name: 'version',
          type: 'string',
          default: '',
          description: 'Version field',
          displayOptions,
        },
	];
}

/**
 * Change DBMS version of your Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/changeVersion
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const version = this.getNodeParameter('version', itemIndex, '') as string;

	const body: IDataObject = {};
	if (version) {
		body['version'] = version;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'changeVersion', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
