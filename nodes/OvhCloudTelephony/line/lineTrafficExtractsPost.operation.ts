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
          displayName: 'Date End',
          name: 'dateEnd',
          type: 'string',
          default: '',
          required: true,
          description: 'The dateEnd parameter',
          displayOptions,
        },
        {
          displayName: 'Date Start',
          name: 'dateStart',
          type: 'string',
          default: '',
          required: true,
          description: 'The dateStart parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Traffic Extracts Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/trafficExtracts
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dateEnd = this.getNodeParameter('dateEnd', _itemIndex) as string;
	const dateStart = this.getNodeParameter('dateStart', _itemIndex) as string;

	const body: IDataObject = {
    dateEnd: dateEnd,
    dateStart: dateStart
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/trafficExtracts', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
