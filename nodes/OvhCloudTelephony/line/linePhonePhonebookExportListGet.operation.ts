import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
          displayName: 'Book Key',
          name: 'bookKey',
          type: 'string',
          default: '',
          required: true,
          description: 'The bookKey parameter',
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
          displayName: 'Format',
          name: 'format',
          type: 'string',
          default: '',
          required: true,
          description: 'The format parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get Line Phone Phonebook Export List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const format = this.getNodeParameter('format', _itemIndex) as string;

	const qs: IDataObject = {
    format: format
  };

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/phonebook/' + bookKey + '/export', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
