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
          displayName: 'Blacklisted Numbers',
          name: 'blacklistedNumbers',
          type: 'string',
          default: '',
          description: 'The blacklistedNumbers parameter',
          displayOptions,
        },
        {
          displayName: 'Blacklisted Tsi',
          name: 'blacklistedTSI',
          type: 'string',
          default: '',
          description: 'The blacklistedTSI parameter',
          displayOptions,
        },
        {
          displayName: 'Filtering List',
          name: 'filteringList',
          type: 'string',
          default: '',
          description: 'The filteringList parameter',
          displayOptions,
        },
        {
          displayName: 'Whitelisted Numbers',
          name: 'whitelistedNumbers',
          type: 'string',
          default: '',
          description: 'The whitelistedNumbers parameter',
          displayOptions,
        },
        {
          displayName: 'Whitelisted Tsi',
          name: 'whitelistedTSI',
          type: 'string',
          default: '',
          description: 'The whitelistedTSI parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Fax Screen Lists Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}/screenLists
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const blacklistedNumbers = this.getNodeParameter('blacklistedNumbers', _itemIndex) as string;
	const blacklistedTSI = this.getNodeParameter('blacklistedTSI', _itemIndex) as string;
	const filteringList = this.getNodeParameter('filteringList', _itemIndex) as string;
	const whitelistedNumbers = this.getNodeParameter('whitelistedNumbers', _itemIndex) as string;
	const whitelistedTSI = this.getNodeParameter('whitelistedTSI', _itemIndex) as string;

	const body: IDataObject = {
    blacklistedNumbers: blacklistedNumbers,
    blacklistedTSI: blacklistedTSI,
    filteringList: filteringList,
    whitelistedNumbers: whitelistedNumbers,
    whitelistedTSI: whitelistedTSI
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/fax/' + serviceName + '/screenLists', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
