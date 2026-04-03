import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Key Tag',
			name: 'keyTag',
			type: 'string',
			default: '',
			required: true,
			description: 'The key tag of the DNSSEC key',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const keyTag = this.getNodeParameter('keyTag', 0) as string;
	const data = (await client.httpGet(`/domain/zone/${zoneName}/dnssec/${keyTag}`)) as IDataObject;
	return [{ json: data }];
}
