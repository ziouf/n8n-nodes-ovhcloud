import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'Billing Account',
          name: 'billingAccount',
          type: 'string',
          default: '',
          required: true,
          description: 'The name of your billingAccount',
          displayOptions,
        },
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          displayOptions,
        },
        {
          displayName: 'Filename',
          name: 'filename',
          type: 'string',
          default: '',
          description: 'The filename parameter',
          displayOptions,
        },
        {
          displayName: 'Url',
          name: 'url',
          type: 'string',
          default: '',
          description: 'The URL parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Softphone Logo Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/softphone/logo
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const filename = this.getNodeParameter('filename', itemIndex) as string;
	const url = this.getNodeParameter('url', itemIndex) as string;

	const body: IDataObject = {
    filename: filename,
    url: url
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/softphone/logo', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
