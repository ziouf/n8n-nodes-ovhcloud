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
          displayName: 'Timeframe',
          name: 'timeframe',
          type: 'string',
          default: '',
          required: true,
          description: 'The timeframe parameter',
          displayOptions,
        },
        {
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          required: true,
          description: 'The type parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get Line Statistics List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/statistics
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const timeframe = this.getNodeParameter('timeframe', itemIndex) as string;
	const typeParam = this.getNodeParameter('type', itemIndex) as string;

	const qs: IDataObject = {
    timeframe: timeframe,
    type: typeParam
  };

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/line/' + serviceName + '/statistics', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
