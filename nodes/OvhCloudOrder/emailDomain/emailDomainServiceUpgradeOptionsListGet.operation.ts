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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'options',
			default: '',
			required: true,
			description: 'New offers for your hosting account',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const offer = this.getNodeParameter('offer', itemIndex) as string;

	const qs = {offer: offer};

	const data = (await client.httpGet(`/order/email/domain/${domain}/upgrade`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
