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
          displayName: 'Password',
          name: 'password',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'The password parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Fax Settings Change Password Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}/settings/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const password = this.getNodeParameter('password', _itemIndex) as string;

	const body: IDataObject = {
    password: password
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/fax/' + serviceName + '/settings/changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
