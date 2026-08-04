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
          displayName: 'Task ID',
          name: 'taskId',
          type: 'string',
          default: '',
          required: true,
          description: 'The taskId parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get Task Get operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/task/' + taskId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
