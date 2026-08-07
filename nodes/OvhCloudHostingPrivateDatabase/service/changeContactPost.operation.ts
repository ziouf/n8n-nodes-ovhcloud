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
	];
}

/**
 * Launch a contact change procedure
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/changeContact
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'changeContact')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
