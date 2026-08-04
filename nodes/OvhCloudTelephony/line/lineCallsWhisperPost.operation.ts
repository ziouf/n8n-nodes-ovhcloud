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
          displayName: 'Number',
          name: 'number',
          type: 'string',
          default: '',
          required: true,
          description: 'The number parameter',
          displayOptions,
        },
        {
          displayName: 'Whispering Mode',
          name: 'whisperingMode',
          type: 'string',
          default: '',
          required: true,
          description: 'The whisperingMode parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Calls Whisper Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const number = this.getNodeParameter('number', itemIndex) as string;
	const whisperingMode = this.getNodeParameter('whisperingMode', itemIndex) as string;

	const body: IDataObject = {
    number: number,
    whisperingMode: whisperingMode
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/calls/' + id + '/whisper', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
