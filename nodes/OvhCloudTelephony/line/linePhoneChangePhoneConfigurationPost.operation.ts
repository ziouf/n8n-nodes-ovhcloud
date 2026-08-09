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
          displayName: 'Auto Reboot',
          name: 'autoReboot',
          type: 'string',
          default: '',
          description: 'The autoReboot parameter',
          displayOptions,
        },
        {
          displayName: 'New Configurations',
          name: 'newConfigurations',
          type: 'string',
          default: '',
          description: 'The newConfigurations parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Phone Change Phone Configuration Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const autoReboot = this.getNodeParameter('autoReboot', _itemIndex) as string;
	const newConfigurations = this.getNodeParameter('newConfigurations', _itemIndex) as string;

	const body: IDataObject = {
    autoReboot: autoReboot,
    newConfigurations: newConfigurations
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/changePhoneConfiguration', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
