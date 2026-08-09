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
          displayName: 'Theme ID',
          name: 'themeId',
          type: 'string',
          default: '',
          description: 'The themeId parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Softphone Theme Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/softphone/theme
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const themeId = this.getNodeParameter('themeId', _itemIndex) as string;

	const body: IDataObject = {
    themeId: themeId
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/softphone/theme', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
