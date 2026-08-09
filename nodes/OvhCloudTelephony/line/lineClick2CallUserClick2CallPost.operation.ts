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
          displayName: 'ID',
          name: 'id',
          type: 'string',
          default: '',
          required: true,
          description: 'The ID parameter',
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
          displayName: 'Called Number',
          name: 'calledNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The calledNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Calling Number',
          name: 'callingNumber',
          type: 'string',
          default: '',
          description: 'The callingNumber parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Click2 Call User Click2 Call Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const calledNumber = this.getNodeParameter('calledNumber', _itemIndex) as string;
	const callingNumber = this.getNodeParameter('callingNumber', _itemIndex) as string;

	const body: IDataObject = {
    calledNumber: calledNumber,
    callingNumber: callingNumber
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/click2CallUser/' + id + '/click2Call', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
