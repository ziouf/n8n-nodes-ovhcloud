import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
          displayName: 'Feature Type',
          name: 'featureType',
          type: 'string',
          default: '',
          required: true,
          description: 'The featureType parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Number Change Feature Type Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/number/{serviceName}/changeFeatureType
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const featureType = this.getNodeParameter('featureType', _itemIndex) as string;

	const body: IDataObject = {
    featureType: featureType
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/number/' + serviceName + '/changeFeatureType', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
