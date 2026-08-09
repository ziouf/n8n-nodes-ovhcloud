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
			displayName: 'Filename',
			name: 'filename',
			type: 'string',
			default: '',
			required: true,
			description: 'Logo filename',
			displayOptions,
		},
		{
			displayName: 'Url',
			name: 'url',
			type: 'string',
			default: '',
			required: true,
			description: 'URL used to download logo',
			displayOptions,
		},
	];
}

/**
 * Executes the SoftphoneLogoPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/softphone/logo
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const filename = this.getNodeParameter('filename', _itemIndex) as string;
	const url = this.getNodeParameter('url', _itemIndex) as string;

	const body: IDataObject = {
		filename: filename,
		url: url,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/softphone' + '/logo', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
