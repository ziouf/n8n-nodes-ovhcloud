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
			description: 'Domain name which will be linked to this mx account',
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'options',
			default: '',
			required: true,
			description: 'Offer for your new mx account',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex) as string;
	const offer = this.getNodeParameter('offer', _itemIndex) as string;

	const qs = {domain: domain};

	const body = {offer: offer};

	const data = (await client.httpPost(`/order/email/domain/new/${duration}`, body, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
