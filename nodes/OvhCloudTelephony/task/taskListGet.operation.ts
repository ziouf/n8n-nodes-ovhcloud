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
          displayName: 'Action',
          name: 'action',
          type: 'string',
          default: '',
          description: 'The action parameter',
          displayOptions,
        },
        {
          displayName: 'Service Type',
          name: 'serviceType',
          type: 'string',
          default: '',
          description: 'The serviceType parameter',
          displayOptions,
        },
        {
          displayName: 'Status',
          name: 'status',
          type: 'string',
          default: '',
          description: 'The status parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get Task List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const action = this.getNodeParameter('action', _itemIndex) as string;
	const serviceType = this.getNodeParameter('serviceType', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;

	const qs: IDataObject = {
    action: action,
    serviceType: serviceType,
    status: status
  };

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/task', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
