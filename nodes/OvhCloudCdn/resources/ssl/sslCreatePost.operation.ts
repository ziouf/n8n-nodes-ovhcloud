import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Certificate',
			name: 'certificate',
			type: 'string',
			default: '',
			description: 'Certificate (empty for lets encrypt generation)',
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			type: 'string',
			default: '',
			description: 'Certificate chain (empty for lets encrypt generation)',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			description: 'Certificate key (empty for lets encrypt generation)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'SSL name to add on CDN',
			displayOptions,
		},
	];
}

/**
 * Executes the Post AddSsl operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/ssl
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const certificate = (this.getNodeParameter('certificate', itemIndex, "") as string);
	const chain = (this.getNodeParameter('chain', itemIndex, "") as string);
	const key = (this.getNodeParameter('key', itemIndex, "") as string);
	const name = this.getNodeParameter('name', itemIndex) as string;

	const body: IDataObject = {};
	if (certificate !== '') body.certificate = certificate;
	if (chain !== '') body.chain = chain;
	if (key !== '') body.key = key;
	body.name = name;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/ssl`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
