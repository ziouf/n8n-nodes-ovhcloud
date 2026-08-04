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
          displayName: 'Login',
          name: 'login',
          type: 'string',
          default: '',
          required: true,
          description: 'The login parameter',
          displayOptions,
        },
        {
          displayName: 'Password',
          name: 'password',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          required: true,
          description: 'The password parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Click2 Call User Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/click2CallUser
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const login = this.getNodeParameter('login', itemIndex) as string;
	const password = this.getNodeParameter('password', itemIndex) as string;

	const body: IDataObject = {
    login: login,
    password: password
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/click2CallUser', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
